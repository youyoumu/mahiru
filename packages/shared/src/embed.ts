export type EmbedFieldValue = string | string[] | null;

export interface DOMParserLike {
  parseFromString(html: string, mimeType: "text/html"): DocumentLike;
}

export interface DocumentLike {
  head: HeadLike | null;
  querySelector(selector: "head"): HeadLike | null;
}

export interface HeadLike {
  querySelectorAll(selector: "meta" | "link"): Iterable<ElementLike>;
}

export interface ElementLike {
  getAttributeNames(): string[];
  getAttribute(name: string): string | null;
}

export interface EmbedVideoInfo {
  stream: string | null;
  streamContentType: string | null;
  ogVideo: string | null;
  ogVideoSecureUrl: string | null;
  width: string | null;
  height: string | null;
  type: string | null;
}

export interface EmbedOEmbedInfo {
  href: string | null;
  type: string | null;
  title: string | null;
  authorName: string | null;
  authorUrl: string | null;
  providerName: string | null;
  providerUrl: string | null;
}

export interface EmbedInfo {
  canonicalUrl: string | null;
  title: string | null;
  description: string | null;
  siteName: string | null;
  twitterCard: string | null;
  twitterSite: string | null;
  twitterCreator: string | null;
  themeColor: EmbedFieldValue;
  image: string | null;
  video: EmbedVideoInfo;
  refresh: string | null;
  refreshRedirectUrl: string | null;
  oembed: EmbedOEmbedInfo | null;
  meta: Record<string, EmbedFieldValue>;
  links: Array<Record<string, string>>;
}

export function parseEmbedHtml(html: string, parser: DOMParserLike = getDOMParser()): EmbedInfo {
  const document = parser.parseFromString(html, "text/html");
  const head = document.head ?? document.querySelector("head");

  const meta: Record<string, EmbedFieldValue> = Object.create(null);
  const links: Array<Record<string, string>> = [];

  if (head) {
    for (const element of head.querySelectorAll("meta")) {
      const attrs = collectAttributes(element);
      const key = attrs.property ?? attrs.name ?? attrs["http-equiv"];
      const value = attrs.content ?? attrs.href ?? null;
      if (!key) continue;
      if (meta[key] === undefined) {
        meta[key] = value;
      } else if (Array.isArray(meta[key])) {
        meta[key].push(value ?? "");
      } else {
        meta[key] = [meta[key] ?? "", value ?? ""];
      }
    }

    for (const element of head.querySelectorAll("link")) {
      links.push(collectAttributes(element));
    }
  }

  const alternateOembed = links.find(
    (tag) => tag.rel?.split(/\s+/).includes("alternate") && tag.type === "application/json+oembed",
  );

  const refresh = getMetaValue(meta["refresh"]);
  const oembedUrl = alternateOembed?.href ? new URL(alternateOembed.href) : null;
  const oembed = alternateOembed
    ? {
        href: alternateOembed.href ?? null,
        type: alternateOembed.type ?? null,
        title: alternateOembed.title ?? null,
        authorName: oembedUrl?.searchParams.get("author") ?? null,
        authorUrl: buildStatusUrl(oembedUrl),
        providerName: oembedUrl?.searchParams.get("provider") ?? null,
        providerUrl: buildStatusUrl(oembedUrl),
      }
    : null;

  return {
    canonicalUrl: getMetaValue(meta["og:url"]),
    title: getMetaValue(meta["og:title"]) ?? getMetaValue(meta["twitter:title"]),
    description: getMetaValue(meta["og:description"]),
    siteName: getMetaValue(meta["og:site_name"]),
    twitterCard: getMetaValue(meta["twitter:card"]),
    twitterSite: getMetaValue(meta["twitter:site"]),
    twitterCreator: getMetaValue(meta["twitter:creator"]),
    themeColor: meta["theme-color"] ?? null,
    image: getMetaValue(meta["og:image"]) ?? getMetaValue(meta["twitter:image"]),
    video: {
      stream: getMetaValue(meta["twitter:player:stream"]),
      streamContentType: getMetaValue(meta["twitter:player:stream:content_type"]),
      ogVideo: getMetaValue(meta["og:video"]),
      ogVideoSecureUrl: getMetaValue(meta["og:video:secure_url"]),
      width: getMetaValue(meta["twitter:player:width"]) ?? getMetaValue(meta["og:video:width"]),
      height: getMetaValue(meta["twitter:player:height"]) ?? getMetaValue(meta["og:video:height"]),
      type: getMetaValue(meta["og:video:type"]),
    },
    refresh,
    refreshRedirectUrl: parseRefresh(refresh),
    oembed,
    meta,
    links,
  };
}

function collectAttributes(element: ElementLike) {
  const attributes: Record<string, string> = Object.create(null);
  for (const name of element.getAttributeNames()) {
    const value = element.getAttribute(name);
    if (value === null) continue;
    attributes[name.toLowerCase()] = value;
  }
  return attributes;
}

function getMetaValue(value: EmbedFieldValue | undefined): string | null {
  if (typeof value === "string") return value;
  return null;
}

function parseRefresh(refresh: string | null): string | null {
  if (!refresh) return null;
  const match = refresh.match(/url\s*=\s*(.+)$/i);
  return match?.[1]?.trim() ?? null;
}

function getDOMParser(): DOMParserLike {
  const DOMParserCtor = globalThis.DOMParser;
  if (!DOMParserCtor) {
    throw new Error("DOMParser is not available; pass one to parseEmbedHtml(html, parser).");
  }
  return new DOMParserCtor();
}

function buildStatusUrl(url: URL | null): string | null {
  if (!url) return null;
  const status = url.searchParams.get("status");
  const author = url.searchParams.get("author");
  if (!status || !author) return null;
  return `https://x.com/${author}/status/${status}`;
}
