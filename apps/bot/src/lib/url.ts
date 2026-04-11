import { env } from "#/env";

export function getLoginUrl(token: string) {
  const url = new URL(env.WEB_URL);
  url.pathname = "/sign_in";
  url.searchParams.set("t", token);
  return url.toString();
}

export function getTagsUrl(token: string) {
  const url = new URL(env.WEB_URL);
  url.pathname = "/tags";
  url.searchParams.set("t", token);
  return url.toString();
}
