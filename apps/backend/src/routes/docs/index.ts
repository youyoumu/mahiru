import { Scalar } from "@scalar/hono-api-reference";
import app from "../../app";

app.get("/docs", Scalar({ url: "/openapi" }));
