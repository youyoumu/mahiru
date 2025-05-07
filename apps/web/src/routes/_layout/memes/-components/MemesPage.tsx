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
import type { ReactNode } from "react";

export default function MemesPage() {
  const { data: memes = [] } = useMemes();
  console.log("DEBUG[342]: memes=", memes);
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
            <CardContent>{processValue(meme.value)}</CardContent>
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

function processValue(value: string): ReactNode {
  const isUrl = value.startsWith("http://") || value.startsWith("https://");

  if (!isUrl) return value;

  const isImage = /\.(png|jpe?g|gif|webp|bmp|svg)(\?.*)?$/i.test(value);

  if (isImage) {
    return <img src={value} alt="Image" />;
  } else {
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
}
