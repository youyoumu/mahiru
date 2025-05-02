import { hc } from "#/lib/hc";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

export async function writeTokenToCookie({
  one_time_token,
}: {
  one_time_token: string;
}) {
  const res = await hc().auth.sign_in.$post({ json: { one_time_token } });

  if (!res.ok) throw new Error("failed to sign in");

  const { token } = await res.json();
  Cookies.set("token", token);
  return { token };
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
