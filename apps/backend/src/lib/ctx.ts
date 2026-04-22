import type { createDb } from "./db";

export type Ctx = {
  oneTimeTokens: Map<string, string>;
  db: ReturnType<typeof createDb>;
  discordCdnCache: Map<string, string>;
  discordCdnCacheTimeout: Map<string, ReturnType<typeof setTimeout>>;
};

export type Variables = {
  ctx: Ctx;
};
