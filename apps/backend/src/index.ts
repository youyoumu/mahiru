import "dotenv/config";
import { serve } from "@hono/node-server";

import app from "./app";
import index from "./routes";
import docs from "./routes/docs";
import openapi from "./routes/openapi";
import memes from "./routes/memes";
import authToken from "./routes/auth/token";
import authSignIn from "./routes/auth/sign_in/";
import proxy from "./routes/proxy";

import { env } from "./env";
import users from "./routes/users";

const port = env.PORT;
console.log(`Server is running on port http://localhost:${port}`);

export const route = app
  .route("/", index)
  .route("/docs", docs)
  .route("/openapi", openapi)
  .route("/memes", memes)
  .route("/users", users)
  .route("auth/token", authToken)
  .route("auth/sign_in", authSignIn)
  .route("/proxy", proxy);

serve({
  fetch: route.fetch,
  port,
});

export type AppType = typeof route;
