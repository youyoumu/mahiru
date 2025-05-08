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
import { useState } from "react";
import { useDiscordCdn } from "#/hooks/useProxy";
import ReactPlayer from "react-player";
import { Image } from "antd";

export default function MemesPage() {
  const { data: memes = [] } = useMemes();
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {memes.map((meme) => (
          <Card key={meme.id}>
            <CardHeader>
              <div className="flex items-center justify-between gap-1">
                <CardTitle>{meme.key}</CardTitle>

                <Copy
                  className="w-4 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(meme.key);
                    toast(
                      <div>
                        <div>Copied key to clipboard:</div>
                        <div className="text-neutral-500">{meme.key}</div>
                      </div>,
                    );
                  }}
                />
              </div>
            </CardHeader>
            <CardContent>
              <Embed value={meme.value} />
            </CardContent>
            <CardFooter>
              <div className="flex gap-2 justify-end grow">
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(meme.value);
                    toast(
                      <div>
                        <div>Copied value to clipboard:</div>
                        <div className="text-neutral-500">{meme.value}</div>
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
    </div>
  );
}

function Embed({ value }: { value: string }) {
  let url;
  try {
    url = new URL(value);
  } catch {
    return <div>{value}</div>;
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
    return <img src={url.href} alt="Image" />;
  }

  const isImgur = url.hostname === "imgur.com" && pathnameSplit.length === 2;
  if (isImgur) {
    return <EmbedImgur url={url} />;
  }

  return (
    <a
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500"
    >
      {value}
    </a>
  );
}

function ProxyCdnImage({ url }: { url: string }) {
  const { data } = useDiscordCdn({ url });
  const newUrl = data?.refreshed_url;
  return <Image src={"asd"} fallback="/fallback.png" />;
}

function EmbedImgur({ url }: { url: URL }) {
  const [suffix, setSuffix] = useState<".mp4" | ".jpeg">(".mp4");
  const urlCopy = new URL(url.href);
  urlCopy.hostname = "i.imgur.com";
  urlCopy.pathname = url.pathname + suffix;

  if (suffix === ".mp4")
    return (
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
    );

  return <img src={url.href} alt="Image" />;
}
