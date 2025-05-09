import { hc } from "#/lib/hc";
import { useQuery } from "@tanstack/react-query";

export function useMemes({ meme_ids_token }: { meme_ids_token?: string }) {
  return useQuery({
    queryKey: ["memes"],
    async queryFn() {
      const res = await hc().memes.$get({ query: { meme_ids_token } });
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();

      return data;
    },
  });
}
