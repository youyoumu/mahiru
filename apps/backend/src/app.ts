import { Hono } from "hono";

import index from "./routes";
import docs from "./routes/docs";
import openapi, { configureOpenAPI } from "./routes/openapi";

const routes = [index, docs, openapi];

const app = new Hono();

configureOpenAPI(app);

for (const route of routes) {
  app.route("/", route);
}

export default app;
