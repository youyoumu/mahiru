import { createFileRoute } from "@tanstack/react-router";
import MemesPage from "./-components/MemesPage";

export const Route = createFileRoute("/memes/")({
  component: MemesPage,
});
