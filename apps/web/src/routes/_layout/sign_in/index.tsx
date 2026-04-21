import { writeTokenToCookie } from "#/hooks/use-auth";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/_layout/sign_in/")({
  validateSearch: z.object({
    t: z.string(),
  }),
  component: () => null,
  loaderDeps({ search: { t } }) {
    return { t };
  },
  async beforeLoad({ search: { t } }) {
    const success = await writeTokenToCookie({ t });
    if (success) throw redirect({ to: "/tags" });
    throw redirect({ to: "/" });
  },
});
