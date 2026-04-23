import { healthcheck } from "#/utils/healthcheck";
import { serve } from "@hono/node-server";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import { logger } from "hono/logger";

import type { Ctx } from "./lib/ctx";
import type { JwtPayload } from "./lib/jwt";

import { env } from "./env";
import { createDb, type DB } from "./lib/db";
import * as routes from "./routes";

if (process.argv.includes("--healthcheck")) {
  await healthcheck();
}

const ctx: Ctx = {
  oneTimeTokens: new Map(),
  tagListTokens: new Map(),
  db: createDb(),
  discordCdnCache: new Map(),
  discordCdnCacheTimeout: new Map(),
};

const port = env.PORT;
console.log(`Server is running on port http://localhost:${port}`);

const app = new OpenAPIHono<{
  Variables: {
    jwtPayload: JwtPayload;
    ctx: { oneTimeTokens: Map<string, string>; tagListTokens: Map<string, number[]>; db: DB };
  };
}>()
  .doc("/openapi", {
    openapi: "3.0.0",
    info: {
      version: "0.0.0",
      title: "Mahiru API",
    },
  })
  .use(cors())
  .use(logger())
  .use("*", async (c, next) => {
    c.set("ctx", ctx);
    await next();
  })
  .use("*", async (c, next) => {
    const path = c.req.path;
    const publicPaths = ["/", "/health", "/auth/sign_in", "/docs", "/openapi"];
    if (publicPaths.includes(path)) return next();
    return jwt({ secret: env.SECRET_KEY, alg: "HS256" })(c, next);
  })
  .use("/admin/*", async (c, next) => {
    const { role } = c.get("jwtPayload");
    if (role !== "admin") return c.json({ error: "Unauthorized" }, 401);
    await next();
  })
  // Public routes
  .route("/", routes.root)
  .route("/health", routes.health)
  .route("/auth", routes.auth)
  .route("/docs", routes.docs)
  // Protected routes
  .route("/admin", routes.admin)
  .route("/proxy", routes.proxy)
  .route("/tags", routes.tags)
  .route("/tenor", routes.tenor)
  .route("/users", routes.users);

export type AppType = typeof app;

serve({
  fetch: app.fetch,
  port,
});
