import type { paths } from "#/types/open-webui-openapi";

import { env } from "#/env";
import createClient from "openapi-fetch";

export const openWebuiClient = createClient<paths>({
  baseUrl: env.OPEN_WEBUI_URL,
  headers: {
    Authorization: "Bearer " + env.OPEN_WEBUI_TOKEN,
  },
});
