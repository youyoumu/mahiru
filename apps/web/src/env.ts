import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  shared: {
    PROD: z.boolean(),
    DEV: z.boolean(),
  },
  clientPrefix: "VITE_",

  client: {
    VITE_BE_URL: z.string(),
    VITE_BE_URL_DEV: z.string(),
  },
  runtimeEnv: import.meta.env,

  emptyStringAsUndefined: true,
});
