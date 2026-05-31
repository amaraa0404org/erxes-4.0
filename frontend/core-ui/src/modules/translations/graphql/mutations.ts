import { gql } from '@apollo/client';

export const TRANSLATION_UPSERT = gql`
  mutation translationUpsert($input: TranslationInput!) {
    translationUpsert(input: $input) {
      _id
      clientPortalId
      namespace
      language
      key
      value
    }
  }
`;

export const TRANSLATION_BULK_UPSERT = gql`
  mutation translationBulkUpsert($input: TranslationBulkInput!) {
    translationBulkUpsert(input: $input)
  }
`;

export const TRANSLATION_REMOVE = gql`
  mutation translationRemove($_id: String!) {
    translationRemove(_id: $_id)
  }
`;

export const LANGUAGE_ADD = gql`
  mutation languageAdd($input: LanguageInput!) {
    languageAdd(input: $input) {
      _id
      code
      name
      isActive
      isDefault
    }
  }
`;

export const LANGUAGE_EDIT = gql`
  mutation languageEdit($_id: String!, $input: LanguageInput!) {
    languageEdit(_id: $_id, input: $input) {
      _id
      code
      name
      isActive
      isDefault
    }
  }
`;

export const LANGUAGE_REMOVE = gql`
  mutation languageRemove($_id: String!) {
    languageRemove(_id: $_id)
  }
`;
