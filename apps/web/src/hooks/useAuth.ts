import { hc } from "#/lib/hc";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

export function useWriteTokenToCookie() {
  useMutation({
    mutationFn: async ({ one_time_token }: { one_time_token: string }) => {
      const res = await hc().auth.sign_in.$post({ json: { one_time_token } });
      if (res.ok) {
        const { token } = await res.json();
        Cookies.set("token", token);
      }
    },
  });
}

export function useRemoveTokenToCookie() {
  useMutation({
    mutationFn: async () => {
      Cookies.remove("token");
    },
  });
}
