import { useQuery } from '@apollo/client';
import { GET_TRANSLATION_ENTRIES } from '../graphql/queries';

export const useTranslationEntries = (variables: {
  clientPortalId?: string;
  namespace?: string;
  language?: string;
  searchValue?: string;
  page?: number;
  perPage?: number;
}) => {
  const { data, loading, refetch } = useQuery(GET_TRANSLATION_ENTRIES, {
    variables,
    fetchPolicy: 'network-only',
  });

  return {
    entries: data?.translationEntries?.list || [],
    totalCount: data?.translationEntries?.totalCount || 0,
    loading,
    refetch,
  };
};
