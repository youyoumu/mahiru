import { createApp } from "#/app";
import { tokenStorage } from "#/lib/tokenStorage";
import { createRoute, z } from "@hono/zod-openapi";

const RequestSchema = z.object({
  discord_user_id: z.string(),
});

const ResponseSchema = z.object({
  discord_user_id: z.string(),
  one_time_token: z.string(),
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
      description: "One time token for login for the provided user_id",
    },
    401: {
      description: "Unauthorized",
    },
  },
});

const app = createApp();

app.openapi(route, async (c) => {
  const { admin } = c.get("jwtPayload");
  const { discord_user_id } = await c.req.valid("json");

  if (!admin) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const one_time_token = crypto.randomUUID();
  tokenStorage.set(one_time_token, discord_user_id);
  return c.json(
    {
      discord_user_id,
      one_time_token,
    },
    200,
  );
});

export { app as authTokenApp };
