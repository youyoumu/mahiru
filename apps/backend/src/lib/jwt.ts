import { env } from "#/env";
import { sign } from "hono/jwt";

export type JwtPayload = {
  discord_user_id: string;
  admin: boolean;
  exp: number | undefined;
};

export async function createJwtToken({
  discord_user_id,
  secret_key,
}: {
  discord_user_id: string;
  secret_key?: string;
}) {
  const payload: JwtPayload = {
    discord_user_id,
    admin: secret_key === env.SECRET_KEY ? true : false,
    exp:
      secret_key === env.SECRET_KEY
        ? undefined
        : Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
  };
  const token = await sign(payload, env.SECRET_KEY);
  return token;
}
