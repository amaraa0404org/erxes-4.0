import { useQuery } from '@apollo/client';
import { GET_LANGUAGES } from '../graphql/queries';

export const useLanguages = (isActive?: boolean) => {
  const { data, loading, refetch } = useQuery(GET_LANGUAGES, {
    variables: { isActive },
  });

  return {
    languages: data?.languages || [],
    loading,
    refetch,
  };
};
