import { useMemes } from "#/hooks/useMemes";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";
import { Button } from "#/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { memo, useDeferredValue, useState } from "react";
import { useDiscordCdn } from "#/hooks/useProxy";
import ReactPlayer from "react-player";
import ImageWithFallback from "#/routes/-components/ImageWithFallback";
import { Textarea } from "#/components/ui/textarea";
import { XEmbed, YouTubeEmbed } from "react-social-media-embed";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import fuzzysort from "fuzzysort";
import { getRouteApi } from "@tanstack/react-router";
import { useUser } from "#/hooks/useUsers";
import { digits, pipe, safeParse, string } from "valibot";
import { useTenorPost } from "#/hooks/useTenor";

export default function MemesPage() {
  const form = useForm({
    defaultValues: {
      searchText: "",
    },
  });

  const searchText = form.watch("searchText");
  const defferedSearchText = useDeferredValue(searchText);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-4">
      <Form {...form}>
        <FormField
          control={form.control}
          name="searchText"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="search" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
      <Memes searchText={defferedSearchText} />
    </div>
  );
}

const Memes = memo(function ({ searchText }: { searchText: string }) {
  const routeApi = getRouteApi("/_layout/memes/");
  const { token } = routeApi.useSearch();
  const { data: memes = [] } = useMemes({ meme_ids_token: token });

  const filteredMemes = fuzzysort
    .go(searchText, memes, {
      keys: ["value", "key"],
      all: !searchText,
    })
    .map((result) => result.obj);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredMemes.map((meme) => (
        <Card key={meme.id} className="max-h-[420px]">
          <CardHeader>
            <div className="flex items-center justify-between gap-1">
              <CardTitle>{meme.key}</CardTitle>

              <Copy
                className="w-5 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(meme.key);
                  toast(
                    <div>
                      <div>Copied key to clipboard:</div>
                      <div className="text-muted-foreground">{meme.key}</div>
                    </div>,
                  );
                }}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-h-64 overflow-auto">
              <Embed value={meme.value} />
            </div>
          </CardContent>
          <CardFooter className="grow items-end">
            <div className="flex gap-2 justify-between grow items-end">
              <div className="text-muted-foreground">
                <DiscordUsername discord_user_id={meme.discord_user_id} />
              </div>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(meme.value);
                  toast(
                    <div>
                      <div>Copied value to clipboard:</div>
                      <div className="text-muted-foreground">{meme.value}</div>
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
    return (
      <Textarea
        value={value}
        className="max-h-64 resize-none bg-secondary"
        readOnly
      />
    );
  }

  const pathnameSplit = url.pathname.split("/");
  const lastPathname = pathnameSplit[pathnameSplit.length - 1];

  const isImage = lastPathname
    ? /\.(png|jpe?g|gif|webp|bmp|svg)(\?.*)?$/i.test(lastPathname)
    : false;

  if (isImage) {
    const isDiscordCdn =
      url.hostname === "media.discordapp.net" ||
      url.hostname === "cdn.discordapp.com";
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
    url.hostname === "www.youtube.com" &&
    pathnameSplit.length === 2 &&
    lastPathname === "watch";
  if (isYoutube) {
    return (
      <div>
        <YouTubeEmbed url={url.href} width="100%" height="210px" />
        <ALink url={value} />
      </div>
    );
  }

  const isTwitter =
    (url.hostname === "x.com" || url.hostname === "twitter.com") &&
    pathnameSplit[2] === "status";
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
  const tenorIdSchema = pipe(string(), digits());
  const parsedTenorId = safeParse(tenorIdSchema, tenorId);

  const isTenor =
    url.hostname === "tenor.com" &&
    pathnameSplit.length === 3 &&
    parsedTenorId.success;

  if (isTenor) {
    return (
      <div>
        <TenorEmbed post_id={parsedTenorId.output} />
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
          url={urlCopy.href}
          playing
          loop
          playsinline
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
      url={post?.media_formats.webm.url}
      playing
      loop
      playsinline
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
