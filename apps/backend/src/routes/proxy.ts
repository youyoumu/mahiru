import { env } from "#/env";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

const zQuery = z.object({
  url: z.string(),
});

const zRes = z.object({
  refreshed_url: z.string(),
});

function parseValidURL(str: string): URL | null {
  try {
    return new URL(str);
  } catch {
    return null;
  }
}

async function refreshDiscordUrl(url: string): Promise<string | null> {
  const response = await fetch("https://discord.com/api/v9/attachments/refresh-urls", {
    method: "POST",
    headers: {
      Authorization: env.DISCORD_USER_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ attachment_urls: [url] }),
  });

  if (!response.ok) return null;

  const data = await response.json();
  const refreshedUrl = data?.refreshed_urls?.[0]?.refreshed;
  return refreshedUrl || null;
}

export const proxy = new OpenAPIHono().openapi(
  createRoute({
    method: "get",
    path: "/discord-cdn",
    request: { query: zQuery },
    responses: {
      200: {
        content: { "application/json": { schema: zRes } },
        description: "New cdn link",
      },
      400: {
        description: "Invalid URL",
      },
      500: {
        description: "Failed to refresh URL",
      },
    },
  }),
  async (c) => {
    const { url } = zQuery.parse(c.req.query());

    const parsedUrl = parseValidURL(decodeURIComponent(url));

    if (!parsedUrl) return c.json({ error: "Invalid URL" }, 400);

    try {
      const refreshedUrl = await refreshDiscordUrl(parsedUrl.href);
      if (refreshedUrl) {
        return c.json({ refreshed_url: refreshedUrl }, 200);
      } else {
        return c.json({ error: "Failed to refresh URL" }, 500);
      }
    } catch (error) {
      if (error instanceof Error) return c.json({ error: error.message }, 500);
      return c.json({ error: "Internal server error" }, 500);
    }
  },
);
