import { hc } from "#/lib/hc";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const discordCdnQueryOptions = ({ url }: { url: string }) =>
  queryOptions({
    queryKey: ["discord-cdn", { url }],
    queryFn: async () => {
      const res = await hc().proxy["discord-cdn"].$get({
        query: {
          url,
        },
      });
      if (!res.ok) throw new Error("failed to get new cdn url");

      return await res.json();
    },
  });

export function useDiscordCdn({ url }: { url: string }) {
  return useQuery({
    ...discordCdnQueryOptions({ url }),
  });
}
