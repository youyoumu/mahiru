import { api } from "#/lib/api";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const healthQueryOptions = queryOptions({
  queryKey: ["health"],
  queryFn: async () => {
    const res = await api.health.$get();
    if (res.status === 200) return true;
    return false;
  },
});

export function useHealth() {
  return useQuery({
    ...healthQueryOptions,
  });
}
