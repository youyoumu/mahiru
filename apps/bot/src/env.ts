import { createEnv } from "@t3-oss/env-core";
import path from "node:path";
import { loadEnvFile } from "node:process";
import { z } from "zod";

try {
  loadEnvFile(path.join(import.meta.dirname, "../.env"));
} catch {}

export const env = createEnv({
  server: {
    DISCORD_TOKEN: z.string(),
    CLIENT_ID: z.string(),
    DEV_GUILD_ID: z.string().optional(),
    DATABASE_URL: z.url(),
    ADMIN_KEY: z.string(),
    BE_URL: z.url(),
    WEB_URL: z.url(),
    OPEN_WEBUI_URL: z.url(),
    OPEN_WEBUI_TOKEN: z.string(),
    FORCE_CHATBOT_CHANNEL_ID: z
      .string()
      .transform((input) => input.split(",").map((s) => s.trim())),
    DISABLE_EMBEDS: z.stringbool(),
    CHATBOT_MODELS: z
      .string()
      .transform((input) => input.split(",").map((s) => s.trim()))
      .refine((models) => models.length > 0, "CHATBOT_MODELS must have at least 1 model"),
  },

  clientPrefix: "PUBLIC_",
  client: {},
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
