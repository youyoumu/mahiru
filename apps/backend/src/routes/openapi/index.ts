import app from "#/app";
import { openAPISpecs } from "hono-openapi";

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
