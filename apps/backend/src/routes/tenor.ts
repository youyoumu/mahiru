import { env } from "#/env";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

const zMediaFormat = z.object({
  url: z.string(),
  duration: z.number(),
  preview: z.string(),
  dims: z.array(z.number()),
  size: z.number(),
});

const zResult = z.object({
  id: z.string(),
  title: z.string(),
  media_formats: z.object({
    webm: zMediaFormat,
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

const zRes = z.object({
  results: z.array(zResult),
});

const tenorApiUrl = new URL("https://tenor.googleapis.com");
tenorApiUrl.pathname = "/v2/posts";
tenorApiUrl.searchParams.set("key", env.TENOR_KEY);
tenorApiUrl.searchParams.set("media_filter", "webm");

export const tenor = new OpenAPIHono().openapi(
  createRoute({
    method: "get",
    path: "/:post_id",
    responses: {
      200: {
        content: { "application/json": { schema: zRes } },
        description: "Tenor post detail",
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

    return c.json(zRes.parse(data), 200);
  },
);
