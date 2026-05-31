# erxes Plugin Translation & Localization Guide

This guide describes how core and plugin developers should implement internationalization (i18n) for internal erxes UIs and dynamic localized database entities (using Postgres `JSONB`).

---

## 1. Static UI Strings (File-Based i18n)

Internal erxes core and plugin UIs stay **file-based** (developer-controlled, version-controlled, zero DB dependencies).

### Developer Workflow
1. Use `useTranslation` hook from `react-i18next` inside React components.
2. Store your translations inside locales directory in `gateway`:
   - `/backend/gateway/src/locales/en/myPlugin.json`
   - `/backend/gateway/src/locales/mn/myPlugin.json`

### Example Code

```tsx
import { useTranslation } from 'react-i18next';

export const MyPluginSettings = () => {
  const { t } = useTranslation('myPlugin');

  return (
    <div>
      <h3>{t('settings.title')}</h3>
      <button>{t('settings.save_button')}</button>
    </div>
  );
};
```

---

## 2. Localized Database Entities (JSONB)

Entities whose data is consumed by both internal erxes admins and external Client Portal users (like Products, Categories, Custom Fields, and Tags) should support multi-language translation. These fields are stored dynamically as `JSONB` in the database.

Applying localization to a database field takes only **3 simple steps**:

### Step 1: Define Field as JSON in Prisma

Inside your `schema.prisma` file, change your field type to `Json?` and set its default to an empty JSON object:

```prisma
model MyEntity {
  id          String   @id @default(uuid())
  title       Json?    @default("{}") // Stores e.g. { "en": "Draft", "mn": "Ноорог" }
  description Json?    @default("{}")
  createdAt   DateTime @default(now())

  @@map("my_entities")
}
```

### Step 2: Keep Field as String in GraphQL Schema

Do **not** change the GraphQL schema type to JSON! Keep it as a `String`. This ensures the gateway and frontend receive a plain string resolved automatically based on the user's requested language.

```graphql
type MyEntity {
  _id: String!
  title: String
  description: String
}
```

### Step 3: Spread `localizedFieldResolvers` in Resolver

Import and spread the `localizedFieldResolvers` helper from `erxes-api-shared/utils` into your custom resolver. The helper automatically extracts the language context header (`x-language`) and returns the translated string matching the requested language (falling back to English or the first available value).

```typescript
import { localizedFieldResolvers } from 'erxes-api-shared/utils';

export default {
  ...localizedFieldResolvers(['title', 'description']),
  
  // Your other custom resolvers go here
  customRelation: async (entity, _args, context) => {
    // ...
  }
};
```

---

## 3. How Language Context Propagation Works

1. **Frontend Request**: The client frontend automatically attaches the `x-language` header to all Apollo/HTTP requests containing the user's current i18n language code.
2. **Context Enrichment**: The `generateApolloContext` function in `erxes-api-shared` extracts the `x-language` header (falling back to `accept-language` or `'en'`) and sets it as `context.language` on the GraphQL context object (`IMainContext`).
3. **Automatic Resolution**: The resolver helper calls `resolveLocalized(parent.title, context.language)` to resolve the correct text drop-in replacement.
