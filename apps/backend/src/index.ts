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
  // Public routes
  .route("/", routes.root)
  .route("/health", routes.health)
  .route("/auth", routes.auth)
  .route("/docs", routes.docs)
  .use("*", async (c, next) => {
    const path = c.req.path;
    const publicPaths = ["/", "/health", "/auth/sign_in", "/docs", "/openapi"];
    if (publicPaths.includes(path)) return next();
    return jwt({ secret: env.SECRET_KEY, alg: "HS256" })(c, next);
  })
  // Protected routes
  .route("/admin", routes.admin)
  .route("/proxy", routes.proxy)
  .route("/memes", routes.memes)
  .route("/tenor", routes.tenor)
  .route("/users", routes.users);

export type AppType = typeof app;

serve({
  fetch: app.fetch,
  port,
});
