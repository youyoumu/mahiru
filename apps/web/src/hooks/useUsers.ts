import { hc } from "#/lib/hc";
import { useQuery } from "@tanstack/react-query";

export function useUser({ discord_user_id }: { discord_user_id: string }) {
  return useQuery({
    queryKey: ["discord-user", { discord_user_id }],
    async queryFn() {
      const res = await hc().users[":discord_user_id"].$get({
        param: {
          discord_user_id,
        },
      });
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();

      return data;
    },
  });
}
