import ImageWithFallback from "#/components/pages/ImageWithFallback";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "#/components/ui/card";
import { Field, FieldLabel } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { Textarea } from "#/components/ui/textarea";
import { useDiscordCdn } from "#/hooks/use-proxy";
import { useTags } from "#/hooks/use-tags";
import { useTenorPost } from "#/hooks/use-tenor";
import { useUser } from "#/hooks/use-users";
import { getRouteApi } from "@tanstack/react-router";
import fuzzysort from "fuzzysort";
import { Copy } from "lucide-react";
import { memo, useState } from "react";
import ReactPlayer from "react-player";
import { XEmbed, YouTubeEmbed } from "react-social-media-embed";
import { toast } from "sonner";
import { z } from "zod";

export default function TagsPage() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-4">
      <Field>
        <FieldLabel htmlFor="tag-search">Search</FieldLabel>
        <Input
          id="tag-search"
          placeholder="..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Field>
      <TagsGrid searchText={searchText} />
    </div>
  );
}

const TagsGrid = memo(function ({ searchText }: { searchText: string }) {
  const routeApi = getRouteApi("/_layout/tags");
  const { t } = routeApi.useSearch();
  const { data: tags = [] } = useTags({ t });

  const filteredTags = fuzzysort
    .go(searchText, tags, {
      keys: ["value", "key"],
      all: !searchText,
    })
    .map((result) => result.obj);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredTags.map((tag) => (
        <Card key={tag.id} className="max-h-[420px]">
          <CardHeader>
            <div className="flex items-center justify-between gap-1">
              <CardTitle>{tag.key}</CardTitle>

              <Copy
                className="w-5 cursor-pointer"
                onClick={async () => {
                  await navigator.clipboard.writeText(tag.key);
                  toast(
                    <div>
                      <div>Copied key to clipboard:</div>
                      <div className="text-muted-foreground">{tag.key}</div>
                    </div>,
                  );
                }}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-h-64 overflow-auto">
              <Embed value={tag.value} />
            </div>
          </CardContent>
          <CardFooter className="grow items-end">
            <div className="flex gap-2 justify-between grow items-end">
              <div className="text-muted-foreground">
                <DiscordUsername discord_user_id={tag.discord_user_id} />
              </div>
              <Button
                onClick={async () => {
                  await navigator.clipboard.writeText(tag.value);
                  toast(
                    <div>
                      <div>Copied value to clipboard:</div>
                      <div className="text-muted-foreground">{tag.value}</div>
                    </div>,
                  );
                }}
              >
                Copy value
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
});

function Embed({ value }: { value: string }) {
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

function DiscordUsername({ discord_user_id }: { discord_user_id: string }) {
  const { data: user } = useUser({ discord_user_id });
  return user?.username;
}

