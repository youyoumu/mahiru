import { describe, expect, it } from "vitest";

import { parseEmbedUrl } from "./url";

describe("parseEmbedUrl", () => {
  it("should return null for invalid URLs", () => {
    expect(parseEmbedUrl("not-a-url")).toBeNull();
  });

  it("should detect images", () => {
    const pngResult = parseEmbedUrl("https://example.com/image.png");
    expect(pngResult).toEqual({
      type: "image",
      url: new URL("https://example.com/image.png"),
      isDiscordCdn: false,
    });

    const jpgResult = parseEmbedUrl("https://example.com/image.jpg?width=400");
    expect(jpgResult).toEqual({
      type: "image",
      url: new URL("https://example.com/image.jpg?width=400"),
      isDiscordCdn: false,
    });

    const webpResult = parseEmbedUrl("https://example.com/path/to/image.webp");
    expect(webpResult).toEqual({
      type: "image",
      url: new URL("https://example.com/path/to/image.webp"),
      isDiscordCdn: false,
    });
  });

  it("should detect Discord CDN images", () => {
    const mediaDiscordResult = parseEmbedUrl(
      "https://media.discordapp.net/attachments/123/456/image.png",
    );
    expect(mediaDiscordResult).toEqual({
      type: "image",
      url: new URL("https://media.discordapp.net/attachments/123/456/image.png"),
      isDiscordCdn: true,
    });

    const cdnDiscordResult = parseEmbedUrl(
      "https://cdn.discordapp.com/attachments/123/456/image.png",
    );
    expect(cdnDiscordResult).toEqual({
      type: "image",
      url: new URL("https://cdn.discordapp.com/attachments/123/456/image.png"),
      isDiscordCdn: true,
    });
  });

  it("should detect Imgur links", () => {
    const imgurResult = parseEmbedUrl("https://imgur.com/aBcDeFg");
    expect(imgurResult).toEqual({
      type: "imgur",
      url: new URL("https://imgur.com/aBcDeFg"),
    });
  });

  it("should detect YouTube watch links", () => {
    const youtubeResult = parseEmbedUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    expect(youtubeResult).toEqual({
      type: "youtube",
      url: new URL("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
    });
  });

  it("should detect Twitter/X status links", () => {
    const xResult = parseEmbedUrl("https://x.com/user/status/123456789");
    expect(xResult).toEqual({
      type: "twitter",
      url: new URL("https://x.com/user/status/123456789"),
    });

    const twitterResult = parseEmbedUrl("https://twitter.com/user/status/123456789");
    expect(twitterResult).toEqual({
      type: "twitter",
      url: new URL("https://twitter.com/user/status/123456789"),
    });
  });

  it("should detect Tenor links and extract ID", () => {
    const tenorResult = parseEmbedUrl("https://tenor.com/view/funny-cat-gif-12345678");
    expect(tenorResult).toEqual({
      type: "tenor",
      url: new URL("https://tenor.com/view/funny-cat-gif-12345678"),
      tenorId: "12345678",
    });
  });

  it("should return type 'none' for other valid URLs", () => {
    const noneResult = parseEmbedUrl("https://google.com");
    expect(noneResult).toEqual({
      type: "none",
      url: new URL("https://google.com"),
    });
  });
});
