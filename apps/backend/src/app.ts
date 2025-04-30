import { Hono } from "hono";
import { jwt } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";
import { env } from "./env";
import type { JwtPayload } from "./lib/jwt";

const app = new Hono<{ Variables: JwtVariables<JwtPayload> }>();

app.use(
  "/auth/token",
  jwt({
    secret: env.SECRET_KEY,
  }),
);

export default app;
