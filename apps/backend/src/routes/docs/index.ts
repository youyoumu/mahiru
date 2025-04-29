import app from "#/app";
import { Scalar } from "@scalar/hono-api-reference";

app.get("/docs", Scalar({ url: "/openapi" }));
