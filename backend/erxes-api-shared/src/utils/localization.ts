/**
 * Resolves a localized JSONB field to a single string.
 * Fallback chain: requested language → 'en' → first available value → ''
 *
 * Handles backward compatibility with plain strings
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
  const resolvers: Record<string, (parent: any, _args: any, context: { language: string }) => string> = {};

  for (const fieldName of fieldNames) {
    resolvers[fieldName] = (
      parent: any,
      _args: any,
      context: { language: string }
    ) => resolveLocalized(parent[fieldName], context.language);
  }

  return resolvers;
};
