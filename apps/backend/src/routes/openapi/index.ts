import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";

export function configureOpenAPI(app: Hono) {
  return app.get(
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
}

const app = configureOpenAPI(new Hono());
export default app;
