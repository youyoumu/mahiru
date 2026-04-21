import { api } from "#/lib/api";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

export async function writeTokenToCookie({ t }: { t: string }) {
  const res = await api.auth.sign_in.$post({ json: { t } });
  if (!res.ok) return false;
  const { token } = await res.json();
  Cookies.set("token", token);
  return true;
}

export function useWriteTokenToCookie() {
  return useMutation({
    mutationFn: writeTokenToCookie,
  });
}

export function useRemoveTokenToCookie() {
  return useMutation({
    mutationFn: async () => {
      Cookies.remove("token");
    },
  });
}
