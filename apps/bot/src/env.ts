import { createEnv } from "@t3-oss/env-core";
import path from "node:path";
import { loadEnvFile } from "node:process";
import { z } from "zod";

try {
  loadEnvFile(path.join(import.meta.dirname, "../.env"));
} catch {}

const zCommaSeparatedString = z
  .string()
  .transform((input) => input.split(",").map((s) => s.trim()));

export const env = createEnv({
  server: {
    DEV: z.stringbool().optional(),
    DEV_GUILD_ID: z.string().optional(),
    DISCORD_TOKEN: z.string(),
    CLIENT_ID: z.string(),
    BOT_NAME: z.string(),
    DATABASE_URL: z.url(),
    DRIZZLE_DIR: z.string().optional(),
    ADMIN_KEY: z.string(),
    BE_URL: z.url(),
    WEB_URL: z.url(),
    OPEN_WEBUI_URL: z.url(),
    OPEN_WEBUI_TOKEN: z.string(),
    DISABLE_EMBEDS: z.stringbool(),
    GUILD_WHITELIST: zCommaSeparatedString,
    CHATBOT_LISTEN_CHANNEL_WHITELIST: zCommaSeparatedString,
    CHATBOT_MODELS: zCommaSeparatedString.refine(
      (models) => models.length > 0,
      "CHATBOT_MODELS must have at least 1 model",
    ),
  },

  clientPrefix: "PUBLIC_",
  client: {},
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
