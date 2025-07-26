import { getContributionsGithub } from '@/services/github';
import { useQuery } from '@tanstack/react-query';

// hooks for fetch contributions from github
export function useContributions(username: string) {
  const { data, ...rest } = useQuery({
    queryKey: ['contributions', username],
    queryFn: () => getContributionsGithub(username),
  });

  return {
    total: data?.total,
    contributions: data?.contributions || [],
    ...rest,
  };
}
