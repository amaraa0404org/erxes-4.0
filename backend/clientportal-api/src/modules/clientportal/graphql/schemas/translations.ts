export const types = `
  type CPLanguage {
    code: String!
    name: String!
  }
`;

export const queries = `
  cpTranslations(language: String!, namespace: String!): JSON
  cpLanguages: [CPLanguage!]!
`;

export const mutations = ``;
