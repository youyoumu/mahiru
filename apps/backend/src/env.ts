import { createEnv } from "@t3-oss/env-core";
import path from "node:path";
import { loadEnvFile } from "node:process";
import { z } from "zod";

loadEnvFile(path.join(import.meta.dirname, "../.env"));

export const env = createEnv({
  server: {
    PORT: z.string().transform((input) => Number(input)),
    SECRET_KEY: z.string(),
    DISCORD_TOKEN: z.string(),
    DISCORD_USER_TOKEN: z.string(),
    TENOR_KEY: z.string(),
  },
  clientPrefix: "PUBLIC_",
  client: {},
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
