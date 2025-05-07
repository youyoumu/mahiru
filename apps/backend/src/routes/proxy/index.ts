import { createApp } from "#/app";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/valibot";
import { object, string } from "valibot";

const responseSchema = string();
const querySchema = object({
  url: string(),
});

const app = createApp();

const routeDiscordCdn = createApp().get(
  "/discord-cdn",
  describeRoute({
    description: "Refresh discord cdn link",
    responses: {
      200: {
        description: "New cdn link",
        content: {
          "application/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  validator("query", querySchema),
  async (c) => {
    const { url } = c.req.valid("query");
    console.log("DEBUG[343]: url=", url);
    return c.text(url);
  },
);

export default app.route("/", routeDiscordCdn);
