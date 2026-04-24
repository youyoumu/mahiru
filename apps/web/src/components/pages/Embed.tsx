import ImageWithFallback from "#/components/pages/ImageWithFallback";
import { useDiscordCdn } from "#/hooks/use-proxy";
import { useTenorPost } from "#/hooks/use-tenor";
import { parseEmbedUrl } from "#/lib/url";
import { cn } from "#/lib/utils";
import { parseTagSpintax } from "@repo/shared";
import { sample } from "es-toolkit";
import { useState } from "react";
import ReactPlayer from "react-player";
import { XEmbed, YouTubeEmbed } from "react-social-media-embed";

export function Embed(props: { value: string }) {
  const { attach, choose } = parseTagSpintax(props.value);
  const [chosenItem] = useState(() => sample(choose));

  const items: string[] = [];
  if (attach.length > 0) {
    items.push(...attach);
  }
  if (chosenItem) {
    items.push(chosenItem);
  }

  // If no tags were found, use the original value
  if (attach.length === 0 && !chosenItem) {
    items.push(props.value);
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <EmbedItem key={i} value={item} />
      ))}
    </div>
  );
}

function EmbedItem(props: { value: string }) {
  const { value } = props;
  const info = parseEmbedUrl(value);
  if (!info) {
    return <CodeBlock value={value} />;
  }

  const { type, url } = info;

  if (type === "image") {
    if (info.isDiscordCdn) return <ProxyCdnImage url={url.href} />;
    return (
      <EmbedWithLink url={value}>
        <ImageWithFallback url={url.href} />
      </EmbedWithLink>
    );
  }

  if (type === "video") {
    if (info.isDiscordCdn) return <ProxyCdnVideo url={url.href} />;
    return <EmbedVideo url={url} />;
  }

  if (type === "imgur") {
    return <EmbedImgur url={url} />;
  }

  if (type === "youtube") {
    return (
      <EmbedWithLink url={value}>
        <YouTubeEmbed url={url.href} width="100%" />
      </EmbedWithLink>
    );
  }

  if (type === "twitter") {
    return (
      <EmbedWithLink url={value}>
        <XEmbed url={url.href} width="100%" />
      </EmbedWithLink>
    );
  }

  if (type === "tenor") {
    return (
      <EmbedWithLink url={value}>
        <TenorEmbed post_id={info.tenorId} />
      </EmbedWithLink>
    );
  }

  return <CodeBlock value={value} isUrl />;
}

function CodeBlock({ value, isUrl }: { value: string; isUrl?: boolean }) {
  return (
    <pre
      className={cn(
        "max-h-64 overflow-auto border border-border bg-secondary p-2 font-mono text-sm whitespace-pre-wrap break-all text-foreground",
        {
          "text-primary-foreground": isUrl,
        },
      )}
    >
      {value}
    </pre>
  );
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

function ProxyCdnVideo({ url }: { url: string }) {
  const { data } = useDiscordCdn({ url });
  const newUrl = data?.refreshed_url;
  return (
    <EmbedWithLink url={url}>
      <ReactPlayer src={newUrl} playing={false} muted controls width="100%" height="100%" />
    </EmbedWithLink>
  );
}

function EmbedVideo({ url }: { url: URL }) {
  return (
    <EmbedWithLink url={url.href}>
      <ReactPlayer src={url.href} playing={false} muted controls width="100%" height="100%" />
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
