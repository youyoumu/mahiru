import { serve } from "@hono/node-server";

import app from "./app";
import { env } from "./env";
import index from "./routes";
import authSignIn from "./routes/auth.sign_in";
import authToken from "./routes/auth.token";
import docs from "./routes/docs";
import health from "./routes/health";
import memes from "./routes/memes";
import openapi from "./routes/openapi";
import proxy from "./routes/proxy";
import tenor from "./routes/tenor";
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
  .route("/proxy", proxy)
  .route("/tenor", tenor)
  .route("/health", health);

serve({
  fetch: route.fetch,
  port,
});

export type AppType = typeof route;
