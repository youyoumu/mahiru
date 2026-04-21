import { Button } from "#/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "#/components/ui/card";
import { Field, FieldLabel } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { useTags } from "#/hooks/use-tags";
import { useUser } from "#/hooks/use-users";
import { cn } from "#/lib/utils";
import { getRouteApi } from "@tanstack/react-router";
import fuzzysort from "fuzzysort";
import { Copy } from "lucide-react";
import { memo, useState } from "react";
import { toast } from "sonner";

import { Embed } from "./Embed";

export default function TagsPage() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="pt-16 min-h-screen">
      <div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="tag-search" className="text-primary-foreground">
            Search
          </FieldLabel>
          <Input
            id="tag-search"
            placeholder="..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Field>
        <TagsGrid searchText={searchText} />
      </div>
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
    <div
      className={cn("grid gap-4", {
        "grid-cols-[repeat(auto-fit,minmax(240px,1fr))]": filteredTags.length >= 4,
        "grid-cols-[repeat(auto-fit,minmax(240px,320px))]": filteredTags.length < 4,
      })}
    >
      {filteredTags.map((tag) => (
        <Card key={tag.id} size="sm" className="max-w-sm">
          <CardHeader>
            <div className="flex items-center justify-between gap-1">
              <CardTitle className="normal-case">{tag.key}</CardTitle>
              <Copy
                className="w-4 cursor-pointer text-muted-foreground"
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
            <div>
              <Embed value={tag.value} />
            </div>
          </CardContent>
          <CardFooter className="grow items-end">
            <div className="flex gap-2 justify-between grow items-end">
              <div className="text-muted-foreground text-xs">
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

function DiscordUsername({ discord_user_id }: { discord_user_id: string }) {
  const { data: user } = useUser({ discord_user_id });
  return user?.username;
}
