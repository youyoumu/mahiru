import { env } from "#/env";

export const webUrl = new URL(env.DEV ? env.WEB_URL_DEV : env.WEB_URL);
