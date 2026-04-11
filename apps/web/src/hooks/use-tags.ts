import { api } from "#/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useTags({ t }: { t?: string }) {
  return useQuery({
    queryKey: ["tags", t],
    async queryFn() {
      const res = await api.tags.$get({ query: { t } });
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();

      return data;
    },
  });
}
