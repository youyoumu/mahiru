import type { JwtPayload } from "#/lib/jwt";

import { env } from "#/env";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import db, { selectMemesSchema } from "@repo/db";
import { verify } from "hono/jwt";

const zRes = z.array(selectMemesSchema);

const zQuery = z.object({
  meme_ids_token: z.string().optional(),
});

const zDecodedPayload = z.object({
  meme_ids: z.array(z.number()),
  exp: z.number(),
});

export const memes = new OpenAPIHono<{ Variables: { jwtPayload: JwtPayload } }>().openapi(
  createRoute({
    method: "get",
    path: "/",
    request: { query: zQuery },
    responses: {
      200: {
        content: { "application/json": { schema: zRes } },
        description: "Memes key and value",
      },
    },
  }),
  async (c) => {
    const { discord_user_id } = c.get("jwtPayload");
    const { meme_ids_token } = c.req.valid("query");
    let decoded;
    try {
      decoded = await verify(meme_ids_token ?? "", env.SECRET_KEY, { alg: "HS256" });
    } catch {
      decoded = null;
    }

    const parsedDecodedPayload = zDecodedPayload.safeParse(decoded);
    let meme_ids: number[] = [];
    if (parsedDecodedPayload.success) {
      meme_ids = parsedDecodedPayload.data.meme_ids;
    }

    const memes = await db.query.meme.findMany({
      where: (fields, { eq, or, inArray }) => {
        return or(eq(fields.discord_user_id, discord_user_id), inArray(fields.id, meme_ids));
      },
    });

    return c.json(memes, 200);
  },
);
