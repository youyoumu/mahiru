import { env } from "#/env";
import { createJwtToken } from "#/lib/jwt";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

const zReq = z.object({
  one_time_token: z.string().optional(),
  secret_key: z.string().optional(),
});

const zRes = z.object({
  token: z.string(),
});

export const auth = new OpenAPIHono<{
  Variables: { ctx: { oneTimeTokens: Map<string, string> } };
}>().openapi(
  createRoute({
    method: "post",
    path: "/sign_in",
    request: {
      body: { content: { "application/json": { schema: zReq } } },
    },
    responses: {
      200: { content: { "application/json": { schema: zRes } }, description: "JWT token" },
      401: { description: "Invalid credentials" },
    },
  }),
  async (c) => {
    const { oneTimeTokens } = c.get("ctx");
    const { one_time_token, secret_key } = c.req.valid("json");

    if (secret_key) {
      if (secret_key !== env.ADMIN_KEY) {
        return c.json({ error: "Invalid secret key" }, 401);
      }

      const token = await createJwtToken({
        discord_user_id: "doesntmatter",
        secret_key,
      });
      return c.json({ token }, 200);
    }

    const discord_user_id = oneTimeTokens.get(one_time_token ?? "");
    if (discord_user_id) {
      oneTimeTokens.delete(one_time_token ?? "");
      const token = await createJwtToken({
        discord_user_id,
        secret_key,
      });

      return c.json({ token }, 200);
    }

    return c.json({ error: "invalid one time token" }, 401);
  },
);
