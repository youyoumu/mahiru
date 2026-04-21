import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import TagsPage from "#/components/pages/TagsPage";

export const Route = createFileRoute("/_layout/tags")({
  validateSearch: z.object({ t: z.string().optional() }),
  component: TagsPage,
});