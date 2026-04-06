import { createEnv } from "@t3-oss/env-core";
import path from "node:path";
import { loadEnvFile } from "node:process";
import { pipe, string, transform } from "valibot";

loadEnvFile(path.join(import.meta.dirname, "../.env"));

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
