import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";

export const docs = new OpenAPIHono().get("/", Scalar({ url: "/openapi" }));
