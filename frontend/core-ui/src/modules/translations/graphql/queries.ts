import { gql } from '@apollo/client';

export const GET_TRANSLATION_ENTRIES = gql`
  query translationEntries(
    $clientPortalId: String
    $namespace: String
    $language: String
    $searchValue: String
    $page: Int
    $perPage: Int
  ) {
    translationEntries(
      clientPortalId: $clientPortalId
      namespace: $namespace
      language: $language
      searchValue: $searchValue
      page: $page
      perPage: $perPage
    ) {
      list {
        _id
        clientPortalId
        namespace
        language
        key
        value
        updatedAt
        updatedBy
      }
      totalCount
    }
  }
`;

export const GET_LANGUAGES = gql`
  query languages($isActive: Boolean) {
    languages(isActive: $isActive) {
      _id
      code
      name
      isActive
      isDefault
    }
  }
`;
