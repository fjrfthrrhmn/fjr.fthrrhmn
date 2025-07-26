import { getLayard } from "@/services/layard";
import { useQuery } from "@tanstack/react-query";

export function useLanyardActivity (){
  const { data, ...rest } = useQuery({
    queryKey: ['layard', 'activity'],
    queryFn: async () => getLayard()
  })

  return {
    data: data?.data,
    discordUser: data?.data.discord_user,
    activities: data?.data.activities,
    ...rest,
  };
}