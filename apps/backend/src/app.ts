import { Hono } from "hono";
import { jwt } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";
import { env } from "./env";
import type { JwtPayload } from "./lib/jwt";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

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
