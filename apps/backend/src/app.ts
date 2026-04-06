import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import { logger } from "hono/logger";

import type { JwtPayload } from "./lib/jwt";

import { env } from "./env";

export function createApp() {
  return new OpenAPIHono<{ Variables: { jwtPayload: JwtPayload } }>();
}

const app = createApp();

app.use(cors());

app.use(logger());

app.use(
  "/auth/token",
  jwt({
    secret: env.SECRET_KEY,
    alg: "HS256",
  }),
);

app.use(
  "/memes/*",
  jwt({
    secret: env.SECRET_KEY,
    alg: "HS256",
  }),
);

app.use(
  "/users/*",
  jwt({
    secret: env.SECRET_KEY,
    alg: "HS256",
  }),
);

export default app;
