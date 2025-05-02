import { createApp } from "#/app";
import { getUser } from "#/lib/discordRest";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/valibot";
import {
  boolean,
  nullable,
  number,
  object,
  optional,
  parse,
  string,
  type InferOutput,
} from "valibot";

const responseSchema = object({
  accent_color: optional(nullable(number())),
  avatar: nullable(string()),
  avatar_decoration: optional(nullable(string())),
  avatar_decoration_data: optional(nullable(object({}))),
  banner: optional(nullable(string())),
  bot: optional(boolean()),
  discriminator: string(),
  email: optional(nullable(string())),
  flags: optional(number()),
  global_name: nullable(string()),
  id: string(),
  locale: optional(string()),
  mfa_enabled: optional(boolean()),
  premium_type: optional(number()),
  public_flags: optional(number()),
  system: optional(boolean()),
  username: string(),
  verified: optional(boolean()),
});

const app = createApp();

const routeMe = createApp().get(
  "/me",
  describeRoute({
    description: "Get current user data",
    responses: {
      200: {
        description: "Current user data",
        content: {
          "application/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  async (c) => {
    const { discord_user_id } = c.get("jwtPayload");
    const user = await getUser({ discord_user_id });
    return c.json<InferOutput<typeof responseSchema>>(
      parse(responseSchema, user),
    );
  },
);

const routeUserId = createApp().get(
  "/:user_id",
  describeRoute({
    description: "Get user data",
    responses: {
      200: {
        description: "User data",
        content: {
          "application/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  validator("param", string()),
  (c) => {
    const { user_id } = c.req.param();
    return c.json({ name: "asd" });
  },
);

export default app.route("/", routeMe).route("/", routeUserId);
