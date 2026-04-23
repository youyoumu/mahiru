import type { createDb } from "./db";
import type { JwtPayload } from "./jwt";

export type Ctx = {
  oneTimeTokens: Map<string, string>;
  tagListTokens: Map<string, number[]>;
  db: ReturnType<typeof createDb>;
  discordCdnCache: Map<string, string>;
  discordCdnCacheTimeout: Map<string, ReturnType<typeof setTimeout>>;
};

export type Variables = {
  jwtPayload: JwtPayload;
  ctx: Ctx;
};
