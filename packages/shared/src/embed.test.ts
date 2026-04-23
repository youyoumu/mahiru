import { readFile } from "node:fs/promises";
import { DOMParser as LinkedomDOMParser } from "linkedom";
import { describe, expect, test } from "vitest";

import { parseEmbedHtml } from "./embed";

describe("parseEmbedHtml", () => {
  test("extracts open graph and oembed data from the sample HTML", async () => {
    const html = await readFile(new URL("./embed.html", import.meta.url), "utf8");
    const embed = parseEmbedHtml(html, new LinkedomDOMParser());

    expect(embed).toMatchObject({
      canonicalUrl: "https://x.com/Peach_Fightr/status/1932418871723758039",
      title: "Momoi Saiba Official (@Peach_Fightr)",
      description: "What has Alice been watching?!",
      siteName: "CunnyX",
      twitterCard: "player",
      twitterSite: "@Peach_Fightr",
      twitterCreator: "@Peach_Fightr",
      themeColor: "#6dc4f0",
      image:
        "https://pbs.twimg.com/ext_tw_video_thumb/1932418848168509440/pu/img/g0KTc8oJPQapQRAY.jpg",
      refresh: "0;url=https://x.com/Peach_Fightr/status/1932418871723758039",
      refreshRedirectUrl: "https://x.com/Peach_Fightr/status/1932418871723758039",
      oembed: {
        href: "https://cunnyx.com/owoembed?text=What%20has%20Alice%20been%20watching%3F!&status=1932418871723758039&author=Peach_Fightr&provider=%F0%9F%92%AC%2015%20%20%20%F0%9F%94%81%20131%20%20%20%E2%9D%A4%EF%B8%8F%20911%20%20%20%F0%9F%91%81%EF%B8%8F%2021.0K",
        type: "application/json+oembed",
        title: "Momoi Saiba Official",
        authorName: "Peach_Fightr",
        authorUrl: "https://x.com/Peach_Fightr/status/1932418871723758039",
        providerName: "💬 15   🔁 131   ❤️ 911   👁️ 21.0K",
        providerUrl: "https://x.com/Peach_Fightr/status/1932418871723758039",
      },
    });

    expect(embed.video).toMatchObject({
      stream:
        "https://video.twimg.com/ext_tw_video/1932418848168509440/pu/vid/avc1/360x640/osfYIBO48KfalOdv.mp4?tag=12",
      streamContentType: "video/mp4",
      ogVideo:
        "https://video.twimg.com/ext_tw_video/1932418848168509440/pu/vid/avc1/360x640/osfYIBO48KfalOdv.mp4?tag=12",
      ogVideoSecureUrl:
        "https://video.twimg.com/ext_tw_video/1932418848168509440/pu/vid/avc1/360x640/osfYIBO48KfalOdv.mp4?tag=12",
      width: "360",
      height: "640",
      type: "video/mp4",
    });
  });
});
