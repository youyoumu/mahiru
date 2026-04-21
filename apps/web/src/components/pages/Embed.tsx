import ImageWithFallback from "#/components/pages/ImageWithFallback";
import { Textarea } from "#/components/ui/textarea";
import { useDiscordCdn } from "#/hooks/use-proxy";
import { useTenorPost } from "#/hooks/use-tenor";
import { useState } from "react";
import ReactPlayer from "react-player";
import { XEmbed, YouTubeEmbed } from "react-social-media-embed";
import { z } from "zod";

export function Embed({ value }: { value: string }) {
  let url: URL;
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
      <EmbedWithLink url={value}>
        <ImageWithFallback url={url.href} />
      </EmbedWithLink>
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
      <EmbedWithLink url={value}>
        <YouTubeEmbed url={url.href} width="100%" height="210px" />
      </EmbedWithLink>
    );
  }

  const isTwitter =
    (url.hostname === "x.com" || url.hostname === "twitter.com") && pathnameSplit[2] === "status";
  if (isTwitter) {
    return (
      <EmbedWithLink url={value}>
        <XEmbed url={url.href} width="100%" height="230px" />
      </EmbedWithLink>
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
      <EmbedWithLink url={value}>
        <TenorEmbed post_id={parsedTenorId.data} />
      </EmbedWithLink>
    );
  }

  return <MarqueeLink url={value} />;
}

function ProxyCdnImage({ url }: { url: string }) {
  const { data } = useDiscordCdn({ url });
  const newUrl = data?.refreshed_url;
  return (
    <EmbedWithLink url={url}>
      <ImageWithFallback url={newUrl} />
    </EmbedWithLink>
  );
}

function EmbedImgur({ url }: { url: URL }) {
  const [suffix, setSuffix] = useState<".mp4" | ".jpeg">(".mp4");
  const urlCopy = new URL(url.href);
  urlCopy.hostname = "i.imgur.com";
  urlCopy.pathname = url.pathname + suffix;

  if (suffix === ".mp4")
    return (
      <EmbedWithLink url={url.href}>
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
      </EmbedWithLink>
    );

  return (
    <EmbedWithLink url={url.href}>
      <ImageWithFallback url={urlCopy.href} />
    </EmbedWithLink>
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

function MarqueeLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      className="block overflow-hidden whitespace-nowrap text-sm text-primary-foreground"
      target="_blank"
    >
      <div className="animate-marquee inline-block">
        <span className="pr-4">{url}</span>
        <span className="pr-4">{url}</span>
      </div>
    </a>
  );
}

function EmbedWithLink({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div>{children}</div>
      <MarqueeLink url={url} />
    </div>
  );
}
