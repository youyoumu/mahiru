import createClient from "openapi-fetch";
import type { paths } from "./open-webui";
import { env } from "#/env";

export const openWebuiClient = createClient<paths>({
  baseUrl: env.OPEN_WEBUI_URL,
  headers: {
    Authorization: "Bearer " + env.OPEN_WEBUI_TOKEN,
  },
});
