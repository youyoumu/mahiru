import { serve } from "@hono/node-server";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import { logger } from "hono/logger";

import { env } from "./env";
import * as routes from "./routes";

const port = env.PORT;
console.log(`Server is running on port http://localhost:${port}`);

const app = new OpenAPIHono()
  .doc("/openapi", {
    openapi: "3.0.0",
    info: {
      version: "0.0.0",
      title: "Mahiru API",
    },
  })
  .use(cors())
  .use(logger())
  .use("/auth/token", jwt({ secret: env.SECRET_KEY, alg: "HS256" }))
  .use("/memes/*", jwt({ secret: env.SECRET_KEY, alg: "HS256" }))
  .use("/users/*", jwt({ secret: env.SECRET_KEY, alg: "HS256" }))
  .route("/", routes.health)
  .route("/auth/token", routes.authToken)
  .route("/auth/sign_in", routes.authSignIn)
  .route("/", routes.root)
  .route("/proxy", routes.proxy)
  .route("/memes", routes.memes)
  .route("/tenor", routes.tenor)
  .route("/users", routes.users)
  .route("/docs", routes.docs);

export type AppType = typeof app;

serve({
  fetch: app.fetch,
  port,
});
