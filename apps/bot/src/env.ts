import { createEnv } from "@t3-oss/env-core";
import { boolean, pipe, string, transform, unknown, url } from "valibot";

export const env = createEnv({
  server: {
    DISCORD_TOKEN: string(),
    CLIENT_ID: string(),
    GUILD_ID: string(),
    DATABASE_URL: string(),
    SECRET_KEY: string(),
    DEV: pipe(
      unknown(),
      transform((input) => !!Number(input)),
      boolean(),
    ),
    PROD: pipe(
      unknown(),
      transform((input) => !!Number(input)),
      boolean(),
    ),
    BE_URL: string(),
    WEB_URL_DEV: string(),
    WEB_URL: string(),
    OPEN_WEBUI_URL: pipe(string(), url()),
    OPEN_WEBUI_TOKEN: string(),
  },

  clientPrefix: "PUBLIC_",

  client: {},

  runtimeEnv: process.env,

  emptyStringAsUndefined: true,
});
