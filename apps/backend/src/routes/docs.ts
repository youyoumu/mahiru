import { createApp } from "#/app";
import { Scalar } from "@scalar/hono-api-reference";

const docsRoute = createApp().get("/", Scalar({ url: "/openapi" }));

export { docsRoute };
