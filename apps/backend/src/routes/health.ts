import { createApp } from "#/app";
import { createRoute, z } from "@hono/zod-openapi";

const ResponseSchema = z.object({
  ok: z.boolean(),
});

const route = createRoute({
  method: "get",
  path: "/",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ResponseSchema,
        },
      },
      description: "OK",
    },
  },
});

const app = createApp();

app.openapi(route, (c) => {
  return c.json({ ok: true }, 200);
});

export { app as healthApp };
