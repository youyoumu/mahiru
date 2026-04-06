import { createEnv } from "@t3-oss/env-core";
import path from "node:path";
import { loadEnvFile } from "node:process";
import { string } from "valibot";

loadEnvFile(path.join(import.meta.dirname, "../.env"));

export const env = createEnv({
  server: {
    DATABASE_URL: string(),
  },

  clientPrefix: "PUBLIC_",

  client: {},

  runtimeEnv: process.env,

  emptyStringAsUndefined: true,
});
