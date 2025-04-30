import "dotenv/config";
import { serve } from "@hono/node-server";

import app from "./app";
import index from "./routes";
import docs from "./routes/docs";
import openapi from "./routes/openapi";
import authToken from "./routes/auth/token";
import authSignIn from "./routes/auth/sign_in/";

import { env } from "./env";

const port = env.PORT;
console.log(`Server is running on port http://localhost:${port}`);

const route = app
  .route("/", index)
  .route("/docs", docs)
  .route("/openapi", openapi)
  .route("auth/token", authToken)
  .route("auth/sign_in", authSignIn);

serve({
  fetch: route.fetch,
  port,
});

export type AppType = typeof route;
