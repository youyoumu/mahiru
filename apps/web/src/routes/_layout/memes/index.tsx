import { createFileRoute } from "@tanstack/react-router";
import MemesPage from "./-components/MemesPage";
import { object, optional, string } from "valibot";

export const Route = createFileRoute("/_layout/memes/")({
  validateSearch: object({
    token: optional(string()),
  }),
  component: MemesPage,
});
