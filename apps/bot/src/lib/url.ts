import { env } from "#/env";

export function getLoginUrl(token: string) {
  const url = new URL(env.WEB_URL);
  url.pathname = "/sign_in";
  url.searchParams.set("t", token);
  return url.toString();
}

export function getListUrl(token: string) {
  const url = new URL(env.WEB_URL);
  url.pathname = "/memes";
  url.searchParams.set("t", token);
  return url.toString();
}
