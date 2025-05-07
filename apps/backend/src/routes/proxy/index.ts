import { createApp } from "#/app";
import { env } from "#/env";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/valibot";
import { object, string } from "valibot";

const responseSchema = object({
  refreshed_url: string(),
});
const querySchema = object({
  url: string(),
});

const app = createApp();

function parseValidURL(str: string): URL | null {
  try {
    return new URL(str);
  } catch {
    return null;
  }
}

async function refreshDiscordUrl(url: string): Promise<string | null> {
  const response = await fetch(
    "https://discord.com/api/v9/attachments/refresh-urls",
    {
      method: "POST",
      headers: {
        Authorization: env.DISCORD_USER_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ attachment_urls: [url] }),
    },
  );

  if (!response.ok) return null;

  const data = await response.json();
  const refreshedUrl = data?.refreshed_urls?.[0]?.refreshed;
  return refreshedUrl || null;
}

const routeDiscordCdn = createApp().get(
  "/discord-cdn",
  describeRoute({
    description: "Refresh discord cdn link",
    responses: {
      200: {
        description: "New cdn link",
        content: {
          "application/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  validator("query", querySchema),
  async (c) => {
    const { url } = c.req.valid("query");

    const parsedUrl = parseValidURL(decodeURIComponent(url));

    if (!parsedUrl) return c.json({ error: "Invalid URL" }, 400);

    try {
      const refreshedUrl = await refreshDiscordUrl(parsedUrl.href);
      if (refreshedUrl) {
        return c.json({ refreshed_url: refreshedUrl });
      } else {
        return c.json({ error: "Failed to refresh URL" }, 500);
      }
    } catch (error) {
      if (error instanceof Error) return c.json({ error: error.message }, 500);
      return c.body(null, 500);
    }
  },
);

export default app.route("/", routeDiscordCdn);
