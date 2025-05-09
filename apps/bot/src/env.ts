import { createEnv } from "@t3-oss/env-core";
import { boolean, pipe, string, transform, unknown } from "valibot";

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
  },

  clientPrefix: "PUBLIC_",

  client: {},

  runtimeEnv: process.env,

  emptyStringAsUndefined: true,
});
