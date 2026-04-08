import type { JWTPayload } from "hono/utils/jwt/types";

import { env } from "#/env";
import { sign } from "hono/jwt";

export type JwtPayload = JWTPayload & {
  discord_user_id: string;
  role: "admin" | "user";
};

export async function createJwtToken({
  discord_user_id,
  secret_key,
}: {
  discord_user_id: string;
  secret_key?: string;
}) {
  const seconds = {
    now: Math.floor(Date.now() / 1000),
    "30 days": 60 * 60 * 24 * 30,
  };
  const exp = secret_key === env.SECRET_KEY ? undefined : seconds.now + seconds["30 days"];
  const payload: JwtPayload = {
    discord_user_id,
    role: secret_key === env.SECRET_KEY ? "admin" : "user",
    exp,
  };
  const token = await sign(payload, env.SECRET_KEY);
  return token;
}
