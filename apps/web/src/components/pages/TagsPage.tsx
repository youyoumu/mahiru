import type { Tag } from "@repo/db";

import { Button } from "#/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "#/components/ui/card";
import { Field, FieldLabel } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { useTags } from "#/hooks/use-tags";
import { useUser } from "#/hooks/use-users";
import { getRouteApi } from "@tanstack/react-router";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import fuzzysort from "fuzzysort";
import { Copy } from "lucide-react";
import { memo, useDeferredValue, useLayoutEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Embed } from "./Embed";

export default function TagsPage() {
  const [searchText, setSearchText] = useState("");
  const deferredSearchText = useDeferredValue(searchText);

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
        <TagsGrid searchText={deferredSearchText} />
      </div>
    </div>
  );
}

const TagsGrid = memo(function ({ searchText }: { searchText: string }) {
  const routeApi = getRouteApi("/_layout/tags");
  const { t } = routeApi.useSearch();
  const { data: tags = [] } = useTags({ t });

  // TODO: reset to 1 for prod
  const repeatArray = (arr: typeof tags, n: number) => Array.from({ length: n }, () => arr).flat();
  const repeatCount = 1;
  const filteredTags = fuzzysort
    .go(searchText, repeatArray(tags, repeatCount), {
      keys: ["value", "key"],
      all: !searchText,
    })
    .map((result) => result.obj);

  const containerRef = useRef<HTMLDivElement>(null);
  const [lanes, setLanes] = useState(1);
  useLayoutEffect(() => {
    const updateLanes = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        if (width >= 1280) setLanes(5);
        else if (width >= 1024) setLanes(4);
        else if (width >= 768) setLanes(3);
        else if (width >= 640) setLanes(2);
        else if (width >= 320) setLanes(2);
        else setLanes(1);
      }
    };

    updateLanes();
    window.addEventListener("resize", updateLanes);
    return () => window.removeEventListener("resize", updateLanes);
  }, []);

  const [offsetTop, setOffsetTop] = useState(0);
  useLayoutEffect(() => {
    if (containerRef.current) {
      setOffsetTop(containerRef.current.offsetTop);
    }
  }, []);

  const virtualizer = useWindowVirtualizer({
    count: filteredTags.length,
    estimateSize: () => 400,
    useAnimationFrameWithResizeObserver: true,
    lanes,
    laneAssignmentMode: "measured",
    scrollMargin: offsetTop,
    overscan: 10,
    gap: 12,
    //NOTE: https://github.com/TanStack/virtual/issues/659
    measureElement: (element, _entry, instance) => {
      const direction = instance.scrollDirection;
      if (direction === "forward" || direction === null) {
        // Allow remeasuring when scrolling down or direction is null
        return element.getBoundingClientRect().height;
      } else {
        // When scrolling up, use cached measurement to prevent stuttering
        const indexKey = Number(element.getAttribute("data-index"));
        const cachedMeasurement = instance.measurementsCache[indexKey]?.size;
        return cachedMeasurement || element.getBoundingClientRect().height;
      }
    },
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: `${virtualizer.getTotalSize()}px`,
      }}
    >
      {virtualizer.getVirtualItems().map((virtualItem) => {
        const tag = filteredTags[virtualItem.index];
        if (!tag) return null;
        return (
          <div
            key={virtualItem.key}
            data-index={virtualItem.index}
            ref={virtualizer.measureElement}
            style={{
              position: "absolute",
              top: 0,
              left: `calc(${(virtualItem.lane * 100) / lanes}% + 6px)`,
              width: `calc(${100 / lanes}% - 12px)`,
              willChange: "transform",
              transform: `translateY(${virtualItem.start - virtualizer.options.scrollMargin}px)`,
            }}
          >
            <TagCard tag={tag} />
          </div>
        );
      })}
    </div>
  );
});

async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text);
  toast(
    <div>
      <div>Copied to clipboard:</div>
      <div className="text-muted-foreground truncate max-w-xs">{text}</div>
    </div>,
  );
}

function TagCard({ tag }: { tag: Tag }) {
  return (
    <Card size="sm" className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-1">
          <CardTitle className="normal-case break-all">{tag.key}</CardTitle>
          <Copy
            className="w-4 shrink-0 cursor-pointer text-muted-foreground"
            onClick={() => copyToClipboard(tag.key)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <Embed value={tag.value} />
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2 justify-between items-center w-full">
            <div className="text-muted-foreground text-xs truncate">
              <DiscordUsername discord_user_id={tag.discord_user_id} />
            </div>
            <Button
              size="sm"
              variant="outline"
              className="shrink-0"
              onClick={() => copyToClipboard(tag.value)}
            >
              Copy value
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function DiscordUsername({ discord_user_id }: { discord_user_id: string }) {
  const { data: user } = useUser({ discord_user_id });
  return user?.username;
}
