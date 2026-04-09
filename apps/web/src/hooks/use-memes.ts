import { api } from "#/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useMemes({ t }: { t?: string }) {
  return useQuery({
    queryKey: ["memes"],
    async queryFn() {
      const res = await api.memes.$get({ query: { t } });
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();

      return data;
    },
  });
}
