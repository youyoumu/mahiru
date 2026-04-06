import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import MemesPage from "./-components/MemesPage";

export const Route = createFileRoute("/_layout/memes/")({
  validateSearch: z.object({
    token: z.string().optional(),
  }),
  component: MemesPage,
});
