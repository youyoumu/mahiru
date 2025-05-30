import { createEnv } from "@t3-oss/env-core";
import { pipe, string, transform } from "valibot";

export const env = createEnv({
  server: {
    PORT: pipe(
      string(),
      transform((input) => Number(input)),
    ),
    SECRET_KEY: string(),
    DISCORD_TOKEN: string(),
    DISCORD_USER_TOKEN: string(),
    TENOR_KEY: string(),
  },

  clientPrefix: "PUBLIC_",

  client: {},

  runtimeEnv: process.env,

  emptyStringAsUndefined: true,
});
