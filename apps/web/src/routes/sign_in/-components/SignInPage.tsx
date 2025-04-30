import { useWriteTokenToCookie } from "#/hooks/useAuth";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export default function SignInPage() {
  const routeApi = getRouteApi("/sign_in/");
  const once = useRef(false);
  const { one_time_token } = routeApi.useSearch();

  const { mutateAsync: writeTokenToCookie } = useWriteTokenToCookie();

  useEffect(() => {
    if (once.current) return;
    once.current = true;
    writeTokenToCookie(
      { one_time_token },
      {
        onSuccess({ token }) {
          console.log("success", token);
        },
        onError() {
          console.log("error");
        },
      },
    );
  }, []);

  return "hello";
}
