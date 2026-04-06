import { createApp } from "#/app";
import { env } from "#/env";
import { createRoute, z } from "@hono/zod-openapi";

const MediaFormatSchema = z.object({
  url: z.string(),
  duration: z.number(),
  preview: z.string(),
  dims: z.array(z.number()),
  size: z.number(),
});

const ResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  media_formats: z.object({
    webm: MediaFormatSchema,
  }),
  created: z.number(),
  content_description: z.string(),
  itemurl: z.string(),
  url: z.string(),
  tags: z.array(z.string()),
  flags: z.array(z.string()),
  hasaudio: z.boolean(),
  content_description_source: z.string(),
});

const ResponseSchema = z.object({
  results: z.array(ResultSchema),
});

const route = createRoute({
  method: "get",
  path: "/:post_id",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ResponseSchema,
        },
      },
      description: "Tenor post detail",
    },
  },
});

const tenorApiUrl = new URL("https://tenor.googleapis.com");
tenorApiUrl.pathname = "/v2/posts";
tenorApiUrl.searchParams.set("key", env.TENOR_KEY);
tenorApiUrl.searchParams.set("media_filter", "webm");

const app = createApp();

app.openapi(route, async (c) => {
  const { post_id } = c.req.param();

  const newUrl = new URL(tenorApiUrl);
  newUrl.searchParams.set("ids", post_id);

  const res = await fetch(newUrl);
  let data;
  if (res.ok) {
    data = await res.json();
  }

  return c.json(ResponseSchema.parse(data), 200);
});

export { app as tenorApp };
