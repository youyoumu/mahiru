import type { JwtPayload } from "#/lib/jwt";

import { env } from "#/env";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import db, { selectMemesSchema } from "@repo/db";
import { sign, verify } from "hono/jwt";

const zRes = z.array(selectMemesSchema);

const zQuery = z.object({
  meme_ids_token: z.string().optional(),
});

const zReqToken = z.object({
  meme_ids: z.array(z.number()),
});

const zResToken = z.object({
  token: z.string(),
});

const zDecodedPayload = z.object({
  meme_ids: z.array(z.number()),
  exp: z.number(),
});

export const memes = new OpenAPIHono<{ Variables: { jwtPayload: JwtPayload } }>()
  .openapi(
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
  )
  .openapi(
    createRoute({
      method: "post",
      path: "/token",
      request: {
        body: { content: { "application/json": { schema: zReqToken } } },
      },
      responses: {
        200: {
          content: { "application/json": { schema: zResToken } },
          description: "Token to get list of memes",
        },
        401: { description: "Unauthorized" },
      },
    }),
    async (c) => {
      const { admin } = c.get("jwtPayload");
      if (!admin) return c.json({ error: "Unauthorized" }, 401);
      const { meme_ids } = c.req.valid("json");

      const payload = {
        meme_ids,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      };
      const token = await sign(payload, env.SECRET_KEY);

      return c.json({ token }, 200);
    },
  );
