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

                <Copy className="w-4 cursor-pointer" />
              </div>
            </CardHeader>
            <CardContent>{meme.value}</CardContent>
            <CardFooter>
              <div className="flex gap-2 justify-end grow">
                <Button>Copy value</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
