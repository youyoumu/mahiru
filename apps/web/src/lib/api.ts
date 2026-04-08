import type { AppType } from "@repo/backend";

import { env } from "#/env";
import { hc } from "hono/client";
import Cookies from "js-cookie";

export const api = hc<AppType>(env.VITE_BE_URL, {
  headers: () => ({
    Authorization: `Bearer ${Cookies.get("token")}`,
  }),
});
