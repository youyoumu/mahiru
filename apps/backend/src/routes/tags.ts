import type { DB } from "#/lib/db";
import type { JwtPayload } from "#/lib/jwt";

import { env } from "#/env";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { zSelectTags } from "@repo/db";
import { verify } from "hono/jwt";

const zRes = z.array(zSelectTags);

const zQuery = z.object({
  t: z.string().optional(),
});

const zDecodedPayload = z.object({
  tag_ids: z.array(z.number()),
  exp: z.number(),
});

export const tags = new OpenAPIHono<{
  Variables: { jwtPayload: JwtPayload; ctx: { oneTimeTokens: Map<string, string>; db: DB } };
}>().openapi(
  createRoute({
    method: "get",
    path: "/",
    request: { query: zQuery },
    responses: {
      200: {
        content: { "application/json": { schema: zRes } },
        description: "Tags key and value",
      },
    },
  }),
  async (c) => {
    const { db } = c.get("ctx");
    const { discord_user_id } = c.get("jwtPayload");
    const { t: tagIdsToken } = c.req.valid("query");
    let decoded;
    try {
      decoded = await verify(tagIdsToken ?? "", env.SECRET_KEY, { alg: "HS256" });
    } catch {
      decoded = null;
    }

    const parsedDecodedPayload = zDecodedPayload.safeParse(decoded);
    let tag_ids: number[] = [];
    if (parsedDecodedPayload.success) {
      tag_ids = parsedDecodedPayload.data.tag_ids;
    }

    const tags = await db.query.tags.findMany({
      where: {
        OR: [{ discord_user_id }, { id: { in: tag_ids } }],
      },
    });

    return c.json(tags, 200);
  },
);
