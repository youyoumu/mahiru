import { getRouteApi } from "@tanstack/react-router";

export default function SignInPage() {
  const routeApi = getRouteApi("/sign_in/");
  const { one_time_token } = routeApi.useSearch();
  console.log("DEBUG[302]: one_time_token=", one_time_token);
  return "hello";
}
