import { createEnv } from "@t3-oss/env-core";
import { string } from "valibot";

export const env = createEnv({
  server: {
    DATABASE_URL: string(),
  },

  clientPrefix: "PUBLIC_",

  client: {},

  runtimeEnv: process.env,

  emptyStringAsUndefined: true,
});
