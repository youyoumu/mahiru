import { createFileRoute } from "@tanstack/react-router";

import { client } from "@repo/utils";

export const Route = createFileRoute("/")({
  component: () => <div></div>,
});
