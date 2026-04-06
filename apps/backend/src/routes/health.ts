import { createApp } from "#/app";
import { describeRoute } from "hono-openapi";
import { resolver } from "hono-openapi/valibot";
import { boolean, object, type InferOutput } from "valibot";

const responseSchema = object({
  ok: boolean(),
});

const app = createApp();

const route = createApp().get(
  "/",
  describeRoute({
    description: "Check if the service is alive",
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  async (c) => c.json<InferOutput<typeof responseSchema>>({ ok: true }),
);

export default app.route("/", route);
