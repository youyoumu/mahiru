import { createApp } from "#/app";
import { Scalar } from "@scalar/hono-api-reference";

export default createApp().get("/", Scalar({ url: "/openapi" }));
