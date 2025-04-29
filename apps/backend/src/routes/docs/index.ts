import { Hono } from "hono";
import { Scalar } from "@scalar/hono-api-reference";

const app = new Hono();

app.get("/docs", Scalar({ url: "/openapi" }));

export default app;
