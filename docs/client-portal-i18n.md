# Client Portal Internationalization (i18n) Integration Guide

This guide explains how to fetch and integrate dynamic, admin-managed translations from the erxes database in Client Portal frontends.

---

## 1. Dynamic vs Static UI Strings

In erxes, Client Portal translations are split into a hybrid model:
1. **Dynamic Database-Backed Translations**: Admin-managed via the erxes **Settings → Translations** panel. They are loaded dynamically by client applications so admins can change portal languages and UI text without requiring a developer to redeploy code.
2. **Dynamic Entity Fields**: Localized fields on entities (like products, categories, or tags) are stored directly inside the record using PostgreSQL `JSONB` format and automatically resolved to the user's language by the GraphQL subgraph gateway.

---

## 2. Fetching Translations via REST API

The `clientportal-api` exposes a REST endpoint that is compatible with any frontend framework or library (e.g., `i18next`, `vue-i18n`, raw `fetch`).

### Endpoint Details

*   **URL Format**: `/translations/:lng/:ns.json`
*   **Method**: `GET`
*   **Headers**:
    *   `x-portal-token`: **Required**. The unique token of your Client Portal workspace.
*   **URL Parameters**:
    *   `:lng`: The target language code (e.g. `en`, `mn`, `fr`).
    *   `:ns`: The translation namespace (e.g. `portal`, `common`).

### Resolution Fallback Chain

When you request a translation from the endpoint:
1. It looks up portal-specific overrides (`clientPortalId = 'your_portal_id'`).
2. If keys are missing, it falls back to portal global defaults (`clientPortalId = null`).
3. If still missing, it falls back to your configured fallback language.

This allows admins to set global default translations once, then override specific strings for your specific portal (e.g., custom login titles or welcome messages).

---

## 3. Integration Examples

### A. React & `i18next-http-backend`

Configure `i18next` in your Client Portal application to pull translations directly from the erxes backend:

```typescript
import i18n from 'i18n';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['portal', 'common'],
    defaultNS: 'portal',
    backend: {
      loadPath: 'https://api.your-erxes.com/translations/{{lng}}/{{ns}}.json',
      customHeaders: {
        'x-portal-token': 'YOUR_CLIENT_PORTAL_TOKEN_HERE',
      },
    },
  });

export default i18n;
```

### B. Standard JavaScript/TypeScript Fetch

```typescript
async function loadPortalTranslations(lang: string, namespace: string) {
  const response = await fetch(
    `https://api.your-erxes.com/translations/${lang}/${namespace}.json`,
    {
      headers: {
        'x-portal-token': 'YOUR_CLIENT_PORTAL_TOKEN_HERE',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to load translations');
  }

  const translations = await response.json();
  return translations; // Returns key-value object
}

// Example usage:
// loadPortalTranslations('mn', 'portal').then(t => console.log(t.login_button));
```

---

## 4. Querying Active Languages

To render a language switcher in your Client Portal, fetch the list of active, admin-enabled languages from the backend:

*   **Endpoint**: `/translations/languages`
*   **Method**: `GET`
*   **Headers**: None required.
*   **Response Format**:

```json
[
  {
    "code": "en",
    "name": "English"
  },
  {
    "code": "mn",
    "name": "Mongolian"
  }
]
```
