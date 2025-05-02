import { createApp } from "#/app";
import { getUser } from "#/lib/discordRest";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/valibot";
import { object, parse, string, type InferOutput } from "valibot";

const responseSchema = object({
  username: string(),
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
    console.log("DEBUG[318]: user=", user);
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
