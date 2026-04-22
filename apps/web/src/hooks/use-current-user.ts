import { api } from "#/lib/api";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { delay } from "es-toolkit";

export const currentUserQueryOptions = queryOptions({
  queryKey: ["current-user"],
  queryFn: async () => {
    await delay(2000);
    const res = await api.users.me.$get();
    if (res.status === 401) return null;
    if (!res.ok) throw new Error("failed to get current user");

    return await res.json();
  },
});

export function useCurrentUser() {
  return useQuery({
    ...currentUserQueryOptions,
  });
}
