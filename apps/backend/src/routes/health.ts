import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

const zRes = z.object({
  ok: z.boolean(),
});

export const health = new OpenAPIHono().openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: { "application/json": { schema: zRes } },
        description: "OK",
      },
    },
  }),
  (c) => {
    return c.json({ ok: true }, 200);
  },
);
