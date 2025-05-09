import { createEnv } from "@t3-oss/env-core";
import { boolean, string } from "valibot";

export const env = createEnv({
  shared: {
    PROD: boolean(),
    DEV: boolean(),
  },
  clientPrefix: "VITE_",

  client: {
    VITE_BE_URL: string(),
    VITE_BE_URL_DEV: string(),
  },
  runtimeEnv: import.meta.env,

  emptyStringAsUndefined: true,
});
