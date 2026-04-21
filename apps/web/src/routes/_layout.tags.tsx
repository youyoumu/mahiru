import TagsPage from "#/components/pages/TagsPage";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/_layout/tags")({
  validateSearch: z.object({ t: z.string().optional() }),
  component: TagsPage,
});
