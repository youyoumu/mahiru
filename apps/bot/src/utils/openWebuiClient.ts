import { env } from "#/env";
import createClient from "openapi-fetch";

import type { paths } from "./open-webui";

export const openWebuiClient = createClient<paths>({
  baseUrl: env.OPEN_WEBUI_URL,
  headers: {
    Authorization: "Bearer " + env.OPEN_WEBUI_TOKEN,
  },
});
