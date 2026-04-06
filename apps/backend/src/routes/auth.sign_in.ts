import { createApp } from "#/app";
import { env } from "#/env";
import { createJwtToken } from "#/lib/jwt";
import { consumeToken } from "#/lib/tokenStorage";
import { createRoute, z } from "@hono/zod-openapi";

const RequestSchema = z.object({
  one_time_token: z.string().optional(),
  secret_key: z.string().optional(),
});

const ResponseSchema = z.object({
  token: z.string(),
});

const route = createRoute({
  method: "post",
  path: "/",
  request: {
    body: {
      content: {
        "application/json": {
          schema: RequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ResponseSchema,
        },
      },
      description: "JWT token",
    },
    401: {
      description: "Invalid credentials",
    },
  },
});

const app = createApp();

app.openapi(route, async (c) => {
  const { one_time_token, secret_key } = await c.req.valid("json");

  if (secret_key) {
    if (secret_key !== env.SECRET_KEY) {
      return c.json({ error: "Invalid secret key" }, 401);
    }

    const token = await createJwtToken({
      discord_user_id: "doesntmatter",
      secret_key,
    });
    return c.json({ token }, 200);
  }

  const discord_user_id = consumeToken(one_time_token ?? "");

  if (discord_user_id) {
    const token = await createJwtToken({
      discord_user_id,
      secret_key,
    });

    return c.json({ token }, 200);
  }

  return c.json({ error: "invalid one time token" }, 401);
});

export { app as authSignInApp };
