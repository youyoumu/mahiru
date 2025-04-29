import { Hono } from "hono";
import { describeRoute, openAPISpecs } from "hono-openapi";
import { resolver, validator } from "hono-openapi/valibot";
import { object, string } from "valibot";
import { Scalar } from "@scalar/hono-api-reference";

const app = new Hono();

const responseSchema = object({
  name: string(),
});

const querySchema = object({
  name: string(),
});

app.get(
  "/",
  describeRoute({
    description: "Say hello to the user",
    responses: {
      200: {
        description: "Successful greeting response",
        content: {
          "text/plain": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  validator("query", querySchema),
  (c) => {
    const query = c.req.valid("query");
    return c.text(`Hello ${query?.name ?? "Hono"}!`);
  },
);

app.get(
  "/openapi",
  openAPISpecs(app, {
    documentation: {
      info: {
        title: "Hono",
        version: "1.0.0",
        description: "API for greeting users",
      },
      servers: [
        {
          url: "http://localhost:8100",
          description: "Local server",
        },
      ],
    },
  }),
);

app.get("/docs", Scalar({ url: "/openapi" }));

export default app;
