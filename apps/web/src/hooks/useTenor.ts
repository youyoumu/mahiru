import { hc } from "#/lib/hc";
import { useQuery } from "@tanstack/react-query";

export function useTenorPost({ post_id }: { post_id: string }) {
  return useQuery({
    queryKey: ["tenor-post", { post_id }],
    async queryFn() {
      const res = await hc().tenor[":post_id"].$get({ param: { post_id } });
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();

      return data;
    },
    select(data) {
      const post = data.results.find((data) => data.id === post_id);
      return post;
    },
  });
}
