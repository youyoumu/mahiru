import { createFileRoute } from "@tanstack/react-router";
import { object, optional, string } from "valibot";

import MemesPage from "./-components/MemesPage";

export const Route = createFileRoute("/_layout/memes/")({
  validateSearch: object({
    token: optional(string()),
  }),
  component: MemesPage,
});
