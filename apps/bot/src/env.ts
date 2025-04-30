import { createEnv } from "@t3-oss/env-core";
import { string } from "valibot";

export const env = createEnv({
  server: {
    DISCORD_TOKEN: string(),
    CLIENT_ID: string(),
    GUILD_ID: string(),
    DATABASE_URL: string(),
    SECRET_KEY: string(),
  },

  clientPrefix: "PUBLIC_",

  client: {},

  runtimeEnv: process.env,

  emptyStringAsUndefined: true,
});
