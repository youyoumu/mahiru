import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  shared: {
    PROD: z.boolean(),
    DEV: z.boolean(),
  },
  client: {
    VITE_BE_URL: z.url(),
  },
  clientPrefix: "VITE_",
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
