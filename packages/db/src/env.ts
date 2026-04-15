import { createEnv } from "@t3-oss/env-core";
import path from "node:path";
import { loadEnvFile } from "node:process";
import { z } from "zod";

try {
  loadEnvFile(path.join(__dirname, "../.env"));
} catch {}

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
  },

  clientPrefix: "PUBLIC_",
  client: {},
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
