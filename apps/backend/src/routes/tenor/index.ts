import { createApp } from "#/app";
import { env } from "#/env";
import { describeRoute } from "hono-openapi";
import { resolver } from "hono-openapi/valibot";
import {
  array,
  boolean,
  number,
  object,
  parse,
  string,
  type InferOutput,
} from "valibot";

const tenorApiUrl = new URL("https://tenor.googleapis.com");
tenorApiUrl.pathname = "/v2/posts";
tenorApiUrl.searchParams.set("key", env.TENOR_KEY);
tenorApiUrl.searchParams.set("media_filter", "webm");

const mediaFormatSchema = object({
  url: string(),
  duration: number(),
  preview: string(),
  dims: array(number()),
  size: number(),
});

const resultSchema = object({
  id: string(),
  title: string(),
  media_formats: object({
    webm: mediaFormatSchema,
  }),
  created: number(),
  content_description: string(),
  itemurl: string(),
  url: string(),
  tags: array(string()),
  flags: array(string()),
  hasaudio: boolean(),
  content_description_source: string(),
});

const responseSchema = object({
  results: array(resultSchema),
});

const app = createApp();

const routeView = createApp().get(
  "/:post_id",
  describeRoute({
    description: "Get detail of tenor post",
    responses: {
      200: {
        description: "Tenor post detail",
        content: {
          "application/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  async (c) => {
    const { post_id } = c.req.param();

    const newUrl = new URL(tenorApiUrl);
    newUrl.searchParams.set("ids", post_id);

    const res = await fetch(newUrl);
    let data;
    if (res.ok) {
      data = await res.json();
    }

    return c.json<InferOutput<typeof responseSchema>>(
      parse(responseSchema, data),
    );
  },
);

export default app.route("/", routeView);
