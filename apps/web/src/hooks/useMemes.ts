import { hc } from "#/lib/hc";
import { useQuery } from "@tanstack/react-query";

export function useMemes() {
  return useQuery({
    queryKey: ["memes"],
    async queryFn() {
      const res = await hc().memes.$get();
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();

      return data;
    },
  });
}
