import type { JwtPayload } from "#/lib/jwt";

import { tokenStorage } from "#/lib/tokenStorage";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

const zReq = z.object({
  discord_user_id: z.string(),
});

const zRes = z.object({
  discord_user_id: z.string(),
  one_time_token: z.string(),
});

export const authToken = new OpenAPIHono<{ Variables: { jwtPayload: JwtPayload } }>().openapi(
  createRoute({
    method: "post",
    path: "/",
    request: {
      body: { content: { "application/json": { schema: zReq } } },
    },
    responses: {
      200: {
        content: { "application/json": { schema: zRes } },
        description: "One time token for login for the provided user_id",
      },
      401: { description: "Unauthorized" },
    },
  }),
  async (c) => {
    const { admin } = c.get("jwtPayload");
    if (!admin) return c.json({ error: "Unauthorized" }, 401);

    const { discord_user_id } = c.req.valid("json");

    const one_time_token = crypto.randomUUID();
    tokenStorage.set(one_time_token, discord_user_id);
    return c.json({ discord_user_id, one_time_token }, 200);
  },
);
