import type { JwtVariables } from "hono/jwt";

import { Hono } from "hono";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import { logger } from "hono/logger";

import type { JwtPayload } from "./lib/jwt";

import { env } from "./env";

export function createApp() {
  return new Hono<{ Variables: JwtVariables<JwtPayload> }>();
}

const app = createApp();

app.use(cors());

app.use(logger());

app.use(
  "/auth/token",
  jwt({
    secret: env.SECRET_KEY,
  }),
);

app.use(
  "/memes/*",
  jwt({
    secret: env.SECRET_KEY,
  }),
);

app.use(
  "/users/*",
  jwt({
    secret: env.SECRET_KEY,
  }),
);

export default app;
