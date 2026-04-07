import type { JwtPayload } from "#/lib/jwt";

import { getUser } from "#/lib/discordRest";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

const zRes = z.object({
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

const zParams = z.object({
  discord_user_id: z.string(),
});

export const users = new OpenAPIHono<{ Variables: { jwtPayload: JwtPayload } }>()
  .openapi(
    createRoute({
      method: "get",
      path: "/me",
      responses: {
        200: {
          content: { "application/json": { schema: zRes } },
          description: "Current user data",
        },
      },
    }),
    async (c) => {
      const { discord_user_id } = c.get("jwtPayload");
      const user = await getUser({ discord_user_id });
      return c.json(user, 200);
    },
  )
  .openapi(
    createRoute({
      method: "get",
      path: "/:discord_user_id",
      request: { params: zParams },
      responses: {
        200: { content: { "application/json": { schema: zRes } }, description: "User data" },
      },
    }),
    async (c) => {
      const { discord_user_id } = zParams.parse(c.req.param());
      const user = await getUser({ discord_user_id });
      return c.json(user, 200);
    },
  );
