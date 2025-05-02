import { hc } from "#/lib/hc";
import { useQuery } from "@tanstack/react-query";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: async () => {
      const res = await hc().users.me.$get();
      if (!res.ok) throw new Error("failed to get current user");

      return await res.json();
    },
  });
}
