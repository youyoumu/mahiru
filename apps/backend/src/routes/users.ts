import { createApp } from "#/app";
import { getUser } from "#/lib/discordRest";
import { createRoute, z } from "@hono/zod-openapi";

const ResponseSchema = z.object({
  accent_color: z.number().nullable().optional(),
  avatar: z.string().nullable(),
  avatar_decoration: z.string().nullable().optional(),
  avatar_decoration_data: z.object({}).nullable().optional(),
  banner: z.string().nullable().optional(),
  bot: z.boolean().optional(),
  discriminator: z.string(),
  email: z.string().nullable().optional(),
  flags: z.number().optional(),
  global_name: z.string().nullable(),
  id: z.string(),
  locale: z.string().optional(),
  mfa_enabled: z.boolean().optional(),
  premium_type: z.number().optional(),
  public_flags: z.number().optional(),
  system: z.boolean().optional(),
  username: z.string(),
  verified: z.boolean().optional(),
});

const ParamsSchema = z.object({
  discord_user_id: z.string(),
});

const routeMe = createRoute({
  method: "get",
  path: "/me",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ResponseSchema,
        },
      },
      description: "Current user data",
    },
  },
});

const routeUserId = createRoute({
  method: "get",
  path: "/:discord_user_id",
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ResponseSchema,
        },
      },
      description: "User data",
    },
  },
});

const app = createApp();

app.openapi(routeMe, async (c) => {
  const { discord_user_id } = c.get("jwtPayload");
  const user = await getUser({ discord_user_id });
  return c.json(user, 200);
});

app.openapi(routeUserId, async (c) => {
  const { discord_user_id } = ParamsSchema.parse(c.req.param());
  const user = await getUser({ discord_user_id });
  return c.json(user, 200);
});

export { app as usersApp };
