# Revised Proposal: Dynamic Database-Connected Translation Architecture

> **Final Revision**: Grounded in actual codebase analysis. PostgreSQL + Prisma (JSONB via `Json?`), Apollo Router (Rust binary), `loadPrisma*` model pattern, `buildPrismaQuery` compatibility wrappers, NX/Rspack Module Federation.

---

## 1. Codebase Reality Check

| Aspect | Actual Stack | Design Implication |
|:---|:---|:---|
| **Database** | PostgreSQL, `DATABASE_URL=postgresql://...` | Use native JSONB columns via Prisma `Json?` type |
| **ORM** | Prisma with single schema at `erxes-api-shared/prisma/schema.prisma` | Localized fields = change `String?` → `Json?` in Prisma schema, run migration |
| **Model Layer** | `loadPrisma*` functions returning Mongoose-API-compatible objects | Translation helpers integrate at this layer |
| **Query Compat** | `buildPrismaQuery` translates Mongoose selectors → Prisma `where` | Existing query patterns continue to work |
| **Gateway** | Apollo Router (Rust binary), NOT Apollo Gateway JS | No JS directive transformers. Translation resolution at **subgraph level** |
| **Federation** | `@apollo/composition` → supergraph SDL, `rover` CLI | Subgraph resolvers handle translation |
| **Header Propagation** | Apollo Router propagates ALL headers (`matching: '.*'`) | Adding `x-language` header reaches every subgraph for free |
| **Context** | `IMainContext { subdomain, user, ... }` built by `generateApolloContext()` | Add `language` field — all plugins get it automatically via `startPlugin()` |
| **Frontend Plugins** | NX/Rspack Module Federation, `react-i18next` shared as singleton | Remote modules inherit i18n instance from `core-ui` |
| **JSONB Precedent** | Already used for `customFieldsData`, `details`, `triggers`, `actions`, `attachment` | Localized fields follow an established pattern |

---

## 2. The Two Translation Problems

### Problem A: Static UI Strings
Button labels, form headers, error messages — text in code, not in the database.

**Current**: `i18next` + static JSON files at `gateway/src/locales/`. 
**Target**: Move to database-backed storage so the Translation Manager UI can CRUD them. Frontend loading path stays the same (`/locales/:lng/:ns.json`), but the endpoint reads from PostgreSQL instead of the filesystem.

### Problem B: Dynamic Data
Product names, category labels, tag names, template titles — text in database records created by users.

**Target**: Store translations as JSONB inline in the record. Resolve at the subgraph resolver level via shared helpers.

---

## 3. Prisma Schema: Localized Fields as JSONB

### What changes in the Prisma schema

A localized field changes from `String?` to `Json?`:

```prisma
model Product {
  id          String  @id @default(cuid())
  // BEFORE:
  // name        String?
  // description String?

  // AFTER:
  name        Json?   @default("{}")   // { "en": "Plan", "mn": "Төлөвлөгөө" }
  description Json?   @default("{}")   // { "en": "Full access", "mn": "Бүрэн хандалт" }

  code        String? @unique
  unitPrice   Float?  @default(0)
  status      String? @default("active")
  // ... rest unchanged

  @@schema("erxes")
  @@map("products")
}
```

In PostgreSQL this becomes a `jsonb` column — indexable, queryable, and schema-flexible. Adding a new language requires zero migrations.

### What gets stored

```json
{
  "id": "clx1abc2d0001",
  "code": "PROD-A",
  "unitPrice": 49.99,
  "name": {
    "en": "Premium Workspace Plan",
    "mn": "Ажлын байрны дээд зэрэглэлийн багц"
  },
  "description": {
    "en": "Unlimited access to all features.",
    "mn": "Бүх боломжуудыг хязгааргүй ашиглах эрх."
  }
}
```

---

## 4. Language Propagation Through the Stack

Apollo Router already propagates ALL headers. We just need to:

### A. Frontend: Send the language header

```typescript
// frontend/core-ui/src/providers/apollo-provider/apolloClient.ts

import { i18nInstance } from '~/i18n';

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    'x-language': i18nInstance.language || 'en',
  },
}));
```

### B. Shared Utils: Extract language from headers

```typescript
// erxes-api-shared/src/utils/headers/language.ts
// Follows the existing pattern of extractUserFromHeader, extractCPUserFromHeader

export const extractLanguageFromHeader = (
  headers: Record<string, string | string[] | undefined>
): string => {
  return (
    (headers['x-language'] as string) ||
    (headers['accept-language'] as string)?.split(',')[0]?.split('-')[0] ||
    'en'
  );
};
```

### C. Context: Add language to `generateApolloContext`

```typescript
// erxes-api-shared/src/utils/apollo/utils.ts
// In generateApolloContext, where user/cpUser/clientPortal are already extracted:

import { extractLanguageFromHeader } from '../headers/language';

// Inside the context builder:
const language = extractLanguageFromHeader(req.headers);

const context = {
  user,
  cpUser,
  clientPortal,
  subdomain,
  language,  // NEW — every resolver gets this
  // ...existing fields
};
```

### D. Type: Extend `IMainContext`

```typescript
// erxes-api-shared/src/core-types/index.ts

export interface IMainContext {
  subdomain: string;
  user?: IUserDocument;
  language: string;  // NEW
  // ...existing fields
}
```

**Since every plugin uses `startPlugin()` → `generateApolloContext()`, every subgraph gets `context.language` automatically. Zero plugin changes needed for this step.**

---

## 5. Translation Resolution: Shared Resolver Helpers

### Core helpers (in `erxes-api-shared`)

```typescript
// erxes-api-shared/src/utils/localization.ts

/**
 * Resolves a localized JSONB field to a single string.
 * Fallback chain: requested language → 'en' → first available value → ''
 * 
 * Also handles backward compatibility with plain strings
 * (for un-migrated records or non-localized fields).
 */
export const resolveLocalized = (
  field: Record<string, string> | string | null | undefined,
  language: string
): string => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[language] || field['en'] || Object.values(field)[0] || '';
};

/**
 * Generates GraphQL type-level field resolvers that automatically
 * resolve localized JSONB fields based on context.language.
 *
 * @param fieldNames - Array of field names containing localized JSONB data
 * @returns Object of field resolvers to spread into your type resolver
 *
 * @example
 * // In resolver file:
 * export default {
 *   Query: { ... },
 *   Mutation: { ... },
 *   Product: localizedFieldResolvers(['name', 'description']),
 * };
 */
export const localizedFieldResolvers = (fieldNames: string[]) => {
  const resolvers: Record<string, Function> = {};

  for (const fieldName of fieldNames) {
    resolvers[fieldName] = (
      parent: any,
      _args: any,
      context: { language: string }
    ) => resolveLocalized(parent[fieldName], context.language);
  }

  return resolvers;
};
```

### What happens at query time

```
Client sends:
  Header: x-language: mn
  Query: { products { name description unitPrice } }

Prisma returns raw row:
  { name: { en: "Plan", mn: "Төлөвлөгөө" }, description: {...}, unitPrice: 49.99 }

Product.name field resolver (from localizedFieldResolvers) runs:
  resolveLocalized(parent.name, "mn")  →  "Төлөвлөгөө"

Client receives:
  { name: "Төлөвлөгөө", description: "...", unitPrice: 49.99 }
```

---

## 6. GraphQL Schema: Resolved vs Raw

For **read-only consumer views**, the GraphQL type uses `String` and the field resolver translates automatically.

For **admin CRUD forms** that need the full translation dictionary, expose raw JSONB alongside:

```graphql
type Product {
  _id: String!
  code: String
  unitPrice: Float

  # Auto-resolved to user's language (via localizedFieldResolvers)
  name: String
  description: String

  # Raw JSONB for admin translation forms
  nameLocales: JSON
  descriptionLocales: JSON
}
```

Resolver:

```typescript
Product: {
  ...localizedFieldResolvers(['name', 'description']),

  // Pass-through raw JSONB for admin forms
  nameLocales: (parent) => parent.name,
  descriptionLocales: (parent) => parent.description,
},
```

---

## 7. Static UI Translations: Move to Database

### New Prisma models

```prisma
model Translation {
  id        String   @id @default(cuid())
  namespace String                          // e.g. "automations", "common"
  language  String                          // e.g. "en", "mn"
  key       String                          // e.g. "unsaved-changes-title"
  value     String
  updatedAt DateTime @updatedAt
  updatedBy String?

  @@unique([namespace, language, key])
  @@index([namespace, language])
  @@schema("erxes")
  @@map("translations")
}

model Language {
  id          String   @id @default(cuid())
  code        String   @unique              // "en", "mn", "es"
  name        String                        // "English", "Mongolian"
  isActive    Boolean  @default(true)
  isDefault   Boolean  @default(false)
  createdAt   DateTime @default(now())

  @@schema("erxes")
  @@map("languages")
}
```

### Gateway endpoint change

Replace the static file-serving endpoint in `gateway/src/main.ts`:

```typescript
app.get('/locales/:lng/:ns.json', async (req, res) => {
  const { lng, ns } = req.params;

  const entries = await prisma.translation.findMany({
    where: { language: lng, namespace: ns },
    select: { key: true, value: true },
  });

  const result: Record<string, string> = {};
  for (const entry of entries) {
    result[entry.key] = entry.value;
  }

  res.set('Cache-Control', 'public, max-age=300');
  res.json(result);
});
```

### Seed migration

```typescript
async function seedTranslations() {
  const count = await prisma.translation.count();
  if (count > 0) return;

  for (const lang of ['en', 'mn']) {
    const localeDir = path.join(__dirname, `./locales/${lang}`);
    if (!fs.existsSync(localeDir)) continue;

    for (const file of fs.readdirSync(localeDir)) {
      const ns = path.basename(file, '.json');
      const data = JSON.parse(fs.readFileSync(path.join(localeDir, file), 'utf-8'));

      const docs = Object.entries(data).map(([key, value]) => ({
        namespace: ns,
        language: lang,
        key,
        value: value as string,
      }));

      await prisma.translation.createMany({ data: docs, skipDuplicates: true });
    }
  }
}
```

---

## 8. Frontend: `useLocalize` Hook

For cases where raw JSONB is fetched client-side (admin forms, inline editing):

```typescript
import { useTranslation } from 'react-i18next';

export const useLocalize = () => {
  const { i18n } = useTranslation();

  return (field: Record<string, string> | string | null | undefined): string => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[i18n.language] || field['en'] || Object.values(field)[0] || '';
  };
};
```

---

## 9. Translation Management Module (Settings)

### Route & Module Structure

```
frontend/core-ui/src/modules/settings/translations/
├── TranslationsPage.tsx
├── components/
│   ├── LanguageSettings.tsx
│   ├── StaticTranslationEditor.tsx
│   └── DynamicTranslationStatus.tsx
├── graphql/
│   ├── queries.ts
│   └── mutations.ts
├── hooks/
│   ├── useLanguages.ts
│   └── useTranslationEntries.ts
└── constants.ts
```

### Features

1. **Language Settings**: Add/remove/enable/disable languages. Stored in `Language` table.
2. **Static Translation Editor**: Namespace-filtered grid: `key | English | Mongolian | ...`. Inline editing. Filter by missing translations.
3. **Dynamic Translation Status**: Which models have localized fields, coverage percentage per language.

---

## 10. Plugin Developer Contract

A third-party plugin developer does **exactly 3 things**:

### Step 1: Prisma Schema

```prisma
model Ticket {
  id          String  @id @default(cuid())
  title       Json?   @default("{}")    // localized JSONB
  description Json?   @default("{}")    // localized JSONB
  priority    Int?
  
  @@schema("erxes")
  @@map("tickets")
}
```

### Step 2: GraphQL Type

```graphql
type Ticket {
  _id: String!
  title: String
  description: String
  priority: Int
}
```

### Step 3: Resolver (one line)

```typescript
import { localizedFieldResolvers } from 'erxes-api-shared/utils';

export default {
  Query: { /* ... */ },
  Mutation: { /* ... */ },
  Ticket: localizedFieldResolvers(['title', 'description']),
};
```

**That's it.** No gateway config. No UI registration. No translation file management.

### For Static UI Strings in Plugins

```typescript
import { useTranslation } from 'react-i18next';
const { t } = useTranslation('myPluginNamespace');
```

Plugin provides a seed file for the `translations` table on install, or admin adds entries via the Translation Manager UI.

---

## 11. Phased Implementation Plan

### Phase 1: Foundation (Shared Helpers + Language Propagation)

| Action | File | Description |
|:---|:---|:---|
| Create | `erxes-api-shared/src/utils/localization.ts` | `resolveLocalized()` + `localizedFieldResolvers()` |
| Create | `erxes-api-shared/src/utils/headers/language.ts` | `extractLanguageFromHeader()` |
| Modify | `erxes-api-shared/src/utils/index.ts` | Export new helpers |
| Modify | `erxes-api-shared/src/utils/apollo/utils.ts` | Add `language` to `generateApolloContext` |
| Modify | `erxes-api-shared/src/core-types/index.ts` | Add `language: string` to `IMainContext` |
| Modify | `frontend/.../apolloClient.ts` | Add `x-language` header to Apollo link |

### Phase 2: Translation Storage (Prisma Models + Gateway)

| Action | File | Description |
|:---|:---|:---|
| Modify | `erxes-api-shared/prisma/schema.prisma` | Add `Translation` and `Language` models |
| Run | `npx prisma migrate dev` | Generate PostgreSQL migration |
| Create | `core-api/src/modules/translations/` | `loadPrismaTranslations`, GraphQL schema, resolvers |
| Modify | `core-api/src/connectionResolvers.ts` | Register `Translations` + `Languages` models |
| Modify | `core-api/src/apollo/schema/schema.ts` | Include translation schema |
| Modify | `gateway/src/main.ts` | Replace static file endpoint with Prisma query |
| Create | Seed script | Migrate existing JSON files into `translations` table |

### Phase 3: Frontend Translation Manager

| Action | File | Description |
|:---|:---|:---|
| Create | `core-ui/src/modules/settings/translations/` | Full module (components, hooks, graphql) |
| Modify | `SettingsRoutes.tsx` | Add `/settings/translations` route |
| Modify | `SettingsSidebar.tsx` | Add sidebar entry |
| Modify | `core-ui/src/i18n/config.ts` | Fetch `supportedLngs` dynamically from API |

### Phase 4: Pilot Migration (Products)

| Action | File | Description |
|:---|:---|:---|
| Modify | `erxes-api-shared/prisma/schema.prisma` | Change Product `name`/`description` from `String?` to `Json?` |
| Run | `npx prisma migrate dev` | Generate migration |
| Create | Data migration script | `UPDATE products SET name = jsonb_build_object('en', name)` |
| Modify | Product resolvers | Add `Product: localizedFieldResolvers(['name', 'description'])` |
| Modify | Product frontend forms | Add multi-language input component |

### Phase 5: Documentation + Tests

| Action | File | Description |
|:---|:---|:---|
| Create | `docs/translation-guide.md` | Plugin developer guide |
| Create | Tests for `resolveLocalized` | Edge cases, backward compat |
| Create | Tests for `localizedFieldResolvers` | Context handling |

---

## 12. Migration Strategy for Existing Data

When converting `Product.name` from `String?` to `Json?`:

```sql
-- PostgreSQL migration
UPDATE products
SET name = jsonb_build_object('en', name)
WHERE name IS NOT NULL
  AND pg_typeof(name) = 'text'::regtype;
```

Safe because:
- `resolveLocalized()` handles plain strings (returns as-is) — backward compatible
- Migration runs incrementally, no downtime
- Un-migrated records continue to work

---

## 13. Summary: What Each Role Touches

| Role | What They Do | Effort |
|:---|:---|:---|
| **Core Team (once)** | Build shared helpers, language propagation, Prisma models, Translation Manager UI | High (one-time) |
| **Plugin Developer** | `Json?` in Prisma schema, `String` in GraphQL, `localizedFieldResolvers([...])` in resolver | 3 lines |
| **Admin User** | Use Translation Manager to add languages, edit strings, check coverage | Zero code |
| **End User** | Pick language in settings; everything auto-resolves | Zero code |
