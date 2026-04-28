import { OpenAPIHono } from "@hono/zod-openapi";

export const root = new OpenAPIHono();

root.get("/", (c) => c.redirect("/docs"));
