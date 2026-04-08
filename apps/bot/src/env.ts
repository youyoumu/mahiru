import { createEnv } from "@t3-oss/env-core";
import path from "node:path";
import { loadEnvFile } from "node:process";
import { z } from "zod";

loadEnvFile(path.join(import.meta.dirname, "../.env"));

export const env = createEnv({
  server: {
    DISCORD_TOKEN: z.string(),
    CLIENT_ID: z.string(),
    GUILD_ID: z.string(),
    DATABASE_URL: z.string(),
    ADMIN_KEY: z.string(),
    DEV: z.string().transform((input) => !!Number(input)),
    PROD: z.string().transform((input) => !!Number(input)),
    BE_URL: z.string(),
    WEB_URL_DEV: z.string(),
    WEB_URL: z.string(),
    OPEN_WEBUI_URL: z.url(),
    OPEN_WEBUI_TOKEN: z.string(),
    FORCE_CHATBOT_CHANNEL_ID: z
      .string()
      .transform((input) => input.split(",").map((s) => s.trim())),
  },

  clientPrefix: "PUBLIC_",
  client: {},
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
