import type { Variables } from "#/lib/ctx";

import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

const zAuthTokenReq = z.object({
  discord_user_id: z.string(),
});

const zAuthTokenRes = z.object({
  discord_user_id: z.string(),
  one_time_token: z.string(),
});

const zTagTokenReq = z.object({
  tag_ids: z.array(z.number()),
});

const zTagTokenRes = z.object({
  token: z.string(),
});

export const admin = new OpenAPIHono<{ Variables: Variables }>()
  .openapi(
    createRoute({
      method: "post",
      path: "/auth/token",
      request: {
        body: { content: { "application/json": { schema: zAuthTokenReq } } },
      },
      responses: {
        200: {
          content: { "application/json": { schema: zAuthTokenRes } },
          description: "One time token for login for the provided user_id",
        },
        401: { description: "Unauthorized" },
      },
    }),
    async (c) => {
      const { oneTimeTokens } = c.get("ctx");
      const { discord_user_id } = c.req.valid("json");

      const one_time_token = crypto.randomUUID();
      oneTimeTokens.set(one_time_token, discord_user_id);
      return c.json({ discord_user_id, one_time_token }, 200);
    },
  )
  .openapi(
    createRoute({
      method: "post",
      path: "/tags/token",
      request: {
        body: { content: { "application/json": { schema: zTagTokenReq } } },
      },
      responses: {
        200: {
          content: { "application/json": { schema: zTagTokenRes } },
          description: "Token to get list of tags",
        },
        401: { description: "Unauthorized" },
      },
    }),
    async (c) => {
      const { tag_ids } = c.req.valid("json");
      const { tagListTokens } = c.get("ctx");

      const token = crypto.randomUUID();
      tagListTokens.set(token, tag_ids);

      return c.json({ token }, 200);
    },
  );
