import ImageWithFallback from "#/components/pages/ImageWithFallback";
import { Textarea } from "#/components/ui/textarea";
import { useDiscordCdn } from "#/hooks/use-proxy";
import { useTenorPost } from "#/hooks/use-tenor";
import { useState } from "react";
import ReactPlayer from "react-player";
import { XEmbed, YouTubeEmbed } from "react-social-media-embed";
import { z } from "zod";

export function Embed({ value }: { value: string }) {
  let url;
  try {
    url = new URL(value);
  } catch {
    return <Textarea value={value} className="max-h-64 resize-none bg-secondary" readOnly />;
  }

  const pathnameSplit = url.pathname.split("/");
  const lastPathname = pathnameSplit[pathnameSplit.length - 1];

  const isImage = lastPathname
    ? /\.(png|jpe?g|gif|webp|bmp|svg)(\?.*)?$/i.test(lastPathname)
    : false;

  if (isImage) {
    const isDiscordCdn =
      url.hostname === "media.discordapp.net" || url.hostname === "cdn.discordapp.com";
    if (isDiscordCdn) return <ProxyCdnImage url={url.href} />;
    return (
      <div>
        <ImageWithFallback url={url.href} />
        <a href={value} className="line-clamp-1" target="_blank">
          {value}
        </a>
      </div>
    );
  }

  const isImgur = url.hostname === "imgur.com" && pathnameSplit.length === 2;
  if (isImgur) {
    return <EmbedImgur url={url} />;
  }

  const isYoutube =
    url.hostname === "www.youtube.com" && pathnameSplit.length === 2 && lastPathname === "watch";
  if (isYoutube) {
    return (
      <div>
        <YouTubeEmbed url={url.href} width="100%" height="210px" />
        <ALink url={value} />
      </div>
    );
  }

  const isTwitter =
    (url.hostname === "x.com" || url.hostname === "twitter.com") && pathnameSplit[2] === "status";
  if (isTwitter) {
    return (
      <div>
        <XEmbed url={url.href} width="100%" height="230px" />
        <ALink url={value} />
      </div>
    );
  }

  const pathname2Split = pathnameSplit[2]?.split("-");
  const tenorId = pathname2Split?.[pathname2Split.length - 1];
  const tenorIdSchema = z.string().regex(/^\d+$/);
  const parsedTenorId = tenorIdSchema.safeParse(tenorId);

  const isTenor =
    url.hostname === "tenor.com" && pathnameSplit.length === 3 && parsedTenorId.success;

  if (isTenor && parsedTenorId.success) {
    return (
      <div>
        <TenorEmbed post_id={parsedTenorId.data} />
        <ALink url={value} />
      </div>
    );
  }

  return <ALink url={value} />;
}

function ProxyCdnImage({ url }: { url: string }) {
  const { data } = useDiscordCdn({ url });
  const newUrl = data?.refreshed_url;
  return (
    <div>
      <ImageWithFallback url={newUrl} />
      <ALink url={url} />
    </div>
  );
}

function EmbedImgur({ url }: { url: URL }) {
  const [suffix, setSuffix] = useState<".mp4" | ".jpeg">(".mp4");
  const urlCopy = new URL(url.href);
  urlCopy.hostname = "i.imgur.com";
  urlCopy.pathname = url.pathname + suffix;

  if (suffix === ".mp4")
    return (
      <div>
        <ReactPlayer
          src={urlCopy.href}
          playing
          loop
          playsInline
          muted
          controls
          onError={() => {
            setSuffix(".jpeg");
          }}
          width="100%"
          height="100%"
        />

        <ALink url={url.href} />
      </div>
    );

  return (
    <div>
      <ImageWithFallback url={urlCopy.href} />
      <ALink url={url.href} />
    </div>
  );
}

function TenorEmbed({ post_id }: { post_id: string }) {
  const { data: post } = useTenorPost({ post_id });

  return (
    <ReactPlayer
      src={post?.media_formats.webm.url}
      playing
      loop
      playsInline
      muted
      controls
      width="100%"
      height="100%"
    />
  );
}

function ALink({ url }: { url: string }) {
  return (
    <a href={url} className="line-clamp-1 break-words" target="_blank">
      {url}
    </a>
  );
}
