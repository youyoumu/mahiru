import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

const zRes = z.object({
  name: z.string(),
});

const zQuery = z.object({
  name: z.string(),
});

export const root = new OpenAPIHono().openapi(
  createRoute({
    method: "get",
    path: "/",
    request: { query: zQuery },
    responses: {
      200: {
        content: { "application/json": { schema: zRes } },
        description: "Successful greeting response",
      },
    },
  }),
  (c) => {
    const { name } = c.req.valid("query");
    return c.json({ name }, 200);
  },
);
