import { z } from "zod";

export type EmbedInfo =
  | { type: "image"; url: URL; isDiscordCdn: boolean }
  | { type: "imgur"; url: URL }
  | { type: "youtube"; url: URL }
  | { type: "twitter"; url: URL }
  | { type: "tenor"; url: URL; tenorId: string }
  | { type: "none"; url: URL };

export function parseEmbedUrl(value: string): EmbedInfo | null {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  const pathnameSplit = url.pathname.split("/");
  const lastPathname = pathnameSplit[pathnameSplit.length - 1];

  const isImage = lastPathname
    ? /\.(png|jpe?g|gif|webp|bmp|svg)(\?.*)?$/i.test(lastPathname)
    : false;

  if (isImage) {
    const isDiscordCdn =
      url.hostname === "media.discordapp.net" || url.hostname === "cdn.discordapp.com";
    return { type: "image", url, isDiscordCdn };
  }

  const isImgur = url.hostname === "imgur.com" && pathnameSplit.length === 2;
  if (isImgur) {
    return { type: "imgur", url };
  }

  const isYoutube =
    url.hostname === "www.youtube.com" && pathnameSplit.length === 2 && lastPathname === "watch";
  if (isYoutube) {
    return { type: "youtube", url };
  }

  const isTwitter =
    (url.hostname === "x.com" || url.hostname === "twitter.com") && pathnameSplit[2] === "status";
  if (isTwitter) {
    return { type: "twitter", url };
  }

  const pathname2Split = pathnameSplit[2]?.split("-");
  const tenorId = pathname2Split?.[pathname2Split.length - 1];
  const tenorIdSchema = z.string().regex(/^\d+$/);
  const parsedTenorId = tenorIdSchema.safeParse(tenorId);

  const isTenor =
    url.hostname === "tenor.com" && pathnameSplit.length === 3 && parsedTenorId.success;

  if (isTenor && parsedTenorId.success) {
    return { type: "tenor", url, tenorId: parsedTenorId.data };
  }

  return { type: "none", url };
}
