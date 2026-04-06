import { createApp } from "#/app";
import { createRoute, z } from "@hono/zod-openapi";

const ResponseSchema = z.object({
  name: z.string(),
});

const QuerySchema = z.object({
  name: z.string(),
});

const route = createRoute({
  method: "get",
  path: "/",
  request: {
    query: QuerySchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ResponseSchema,
        },
      },
      description: "Successful greeting response",
    },
  },
});

const app = createApp();

app.openapi(route, (c) => {
  const { name } = QuerySchema.parse(c.req.query());
  return c.json({ name }, 200);
});

export { app as indexApp };
