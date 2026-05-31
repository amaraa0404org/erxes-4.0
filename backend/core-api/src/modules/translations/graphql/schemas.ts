export const types = `
  type TranslationEntry {
    _id: String!
    clientPortalId: String
    namespace: String!
    language: String!
    key: String!
    value: String!
    updatedAt: Date
    updatedBy: String
  }

  type TranslationListResponse {
    list: [TranslationEntry]
    totalCount: Int
  }

  type LanguageEntry {
    _id: String!
    code: String!
    name: String!
    isActive: Boolean
    isDefault: Boolean
  }

  input TranslationInput {
    clientPortalId: String
    namespace: String!
    language: String!
    key: String!
    value: String!
  }

  input TranslationBulkInput {
    clientPortalId: String
    namespace: String!
    language: String!
    entries: [TranslationKeyValue!]!
  }

  input TranslationKeyValue {
    key: String!
    value: String!
  }

  input LanguageInput {
    code: String!
    name: String!
    isActive: Boolean
    isDefault: Boolean
  }
`;

export const queries = `
  translationEntries(clientPortalId: String, namespace: String, language: String, searchValue: String, page: Int, perPage: Int): TranslationListResponse
  languages(isActive: Boolean): [LanguageEntry]
`;

export const mutations = `
  translationUpsert(input: TranslationInput!): TranslationEntry
  translationBulkUpsert(input: TranslationBulkInput!): JSON
  translationRemove(_id: String!): JSON
  languageAdd(input: LanguageInput!): LanguageEntry
  languageEdit(_id: String!, input: LanguageInput!): LanguageEntry
  languageRemove(_id: String!): JSON
`;
