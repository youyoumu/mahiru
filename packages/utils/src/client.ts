import { hc } from "hono/client";
import { type AppType } from "../../../apps/backend/src";

const client = hc<AppType>("http://localhost:8100");

export { client };
