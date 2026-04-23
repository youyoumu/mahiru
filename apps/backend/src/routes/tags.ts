import type { Variables } from "#/lib/ctx";

import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { zSelectTags } from "@repo/db";

const zRes = z.array(zSelectTags);

const zQuery = z.object({
  t: z.string().optional(),
});

export const tags = new OpenAPIHono<{ Variables: Variables }>().openapi(
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
    const { db, tagListTokens } = c.get("ctx");
    const { discord_user_id } = c.get("jwtPayload");
    const { t: tagListToken } = c.req.valid("query");
    const tag_ids = tagListToken ? (tagListTokens.get(tagListToken) ?? []) : [];

    const tags = await db.query.tags.findMany({
      where: {
        OR: [{ discord_user_id }, { id: { in: tag_ids } }],
      },
    });

    return c.json(tags, 200);
  },
);
