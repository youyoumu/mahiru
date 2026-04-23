import type { Variables } from "#/lib/ctx";

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

type DiscordRefreshResponse = {
  refreshed_urls?: Array<{
    original?: string;
    refreshed?: string;
  }>;
};

async function refreshDiscordUrls(urls: string[]): Promise<Map<string, string>> {
  const response = await fetch("https://discord.com/api/v9/attachments/refresh-urls", {
    method: "POST",
    headers: { Authorization: env.DISCORD_USER_TOKEN, "Content-Type": "application/json" },
    body: JSON.stringify({ attachment_urls: urls }),
  });

  if (!response.ok) return new Map();

  const data = (await response.json()) as DiscordRefreshResponse;
  const refreshedUrls = new Map<string, string>();

  for (const [index, item] of (data.refreshed_urls ?? []).entries()) {
    const original = item?.original ?? urls[index];
    const refreshed = item?.refreshed;
    if (original && refreshed) {
      refreshedUrls.set(original, refreshed);
    }
  }

  return refreshedUrls;
}

const SIX_HOURS = 1000 * 60 * 60 * 6;
const DISCORD_REFRESH_BATCH_WINDOW = 2000;

type DiscordRefreshResolver = (value: string | null) => void;

const discordRefreshQueue = new Map<string, DiscordRefreshResolver[]>();
let discordRefreshBatchTimeout: ReturnType<typeof setTimeout> | undefined;

function queueDiscordRefresh(url: string): Promise<string | null> {
  return new Promise((resolve) => {
    const resolvers = discordRefreshQueue.get(url);
    if (resolvers) {
      resolvers.push(resolve);
    } else {
      discordRefreshQueue.set(url, [resolve]);
    }

    if (discordRefreshBatchTimeout) return;

    discordRefreshBatchTimeout = setTimeout(() => {
      void flushDiscordRefreshQueue();
    }, DISCORD_REFRESH_BATCH_WINDOW);
  });
}

async function flushDiscordRefreshQueue() {
  const batch = new Map(discordRefreshQueue);
  discordRefreshQueue.clear();
  if (discordRefreshBatchTimeout) {
    clearTimeout(discordRefreshBatchTimeout);
    discordRefreshBatchTimeout = undefined;
  }

  if (batch.size === 0) return;

  try {
    const urls = [...batch.keys()];
    const refreshedUrls = await refreshDiscordUrls(urls);

    for (const [url, resolvers] of batch) {
      const refreshedUrl = refreshedUrls.get(url) ?? null;
      for (const resolve of resolvers) {
        resolve(refreshedUrl);
      }
    }
  } catch {
    for (const resolvers of batch.values()) {
      for (const resolve of resolvers) {
        resolve(null);
      }
    }
  }
}

export const proxy = new OpenAPIHono<{ Variables: Variables }>().openapi(
  createRoute({
    method: "get",
    path: "/discord-cdn",
    request: { query: zQuery },
    responses: {
      200: {
        content: { "application/json": { schema: zRes } },
        description: "New cdn link",
      },
      400: { description: "Invalid URL" },
      500: { description: "Failed to refresh URL" },
    },
  }),
  async (c) => {
    const { url } = c.req.valid("query");
    const discordCdnCache = c.get("ctx").discordCdnCache;
    const discordCdnCacheTimeout = c.get("ctx").discordCdnCacheTimeout;
    const parsedUrl = parseValidURL(decodeURIComponent(url));
    if (!parsedUrl) return c.json({ error: "Invalid URL" }, 400);

    try {
      const cached = discordCdnCache.get(parsedUrl.href);
      if (cached) return c.json({ refreshed_url: cached }, 200);

      const refreshedUrl = await queueDiscordRefresh(parsedUrl.href);
      if (refreshedUrl) {
        let timeout = discordCdnCacheTimeout.get(parsedUrl.href);
        if (timeout) clearTimeout(timeout);
        discordCdnCache.set(parsedUrl.href, refreshedUrl);
        timeout = setTimeout(() => discordCdnCache.delete(parsedUrl.href), SIX_HOURS);
        discordCdnCacheTimeout.set(parsedUrl.href, timeout);
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
