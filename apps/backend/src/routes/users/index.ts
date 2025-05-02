import { createApp } from "#/app";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/valibot";
import { object, string } from "valibot";

const responseSchema = object({
  name: string(),
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
  (c) => {
    console.log("DEBUG[31asd]: discord_user_id=");
    const { discord_user_id } = c.get("jwtPayload");
    console.log("DEBUG[31asd]: discord_user_id=", discord_user_id);
    return c.json({ namee: "asd" });
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
    console.log("DEBUG[315]: user_id=", user_id);
    return c.json({ namee: "asd" });
  },
);

export default app.route("/", routeMe).route("/", routeUserId);
