import { serve } from "@hono/node-server";

import app from "./app";
import { env } from "./env";
import { authSignInApp } from "./routes/auth.sign_in";
import { authTokenApp } from "./routes/auth.token";
import { healthApp } from "./routes/health";
import { indexApp } from "./routes/index";
import { memesApp } from "./routes/memes";
import { proxyApp } from "./routes/proxy";
import { tenorApp } from "./routes/tenor";
import { usersApp } from "./routes/users";

const port = env.PORT;
console.log(`Server is running on port http://localhost:${port}`);

app.doc("/openapi", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Mahiru API",
    description: "API for Mahiru",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: "Local server",
    },
  ],
});

app.route("/", healthApp);
app.route("/auth/token", authTokenApp);
app.route("auth/sign_in", authSignInApp);
app.route("/", indexApp);
app.route("/proxy", proxyApp);
app.route("/memes", memesApp);
app.route("/tenor", tenorApp);
app.route("/users", usersApp);

export type AppType = typeof app;

serve({
  fetch: app.fetch,
  port,
});
