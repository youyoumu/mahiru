import type { AppType } from "@repo/backend";

import { env } from "#/env";
import { hc as honoClient } from "hono/client";
import Cookies from "js-cookie";

const beUrl = env.DEV ? env.VITE_BE_URL_DEV : env.VITE_BE_URL;

export const hc = () =>
  honoClient<AppType>(beUrl, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
