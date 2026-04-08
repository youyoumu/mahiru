import type { AppType } from "@repo/backend";

import { env } from "#/env";
import { hc } from "hono/client";
import Cookies from "js-cookie";

const beUrl = env.DEV ? env.VITE_BE_URL_DEV : env.VITE_BE_URL;

export const api = hc<AppType>(beUrl, {
  headers: () => ({
    Authorization: `Bearer ${Cookies.get("token")}`,
  }),
});
