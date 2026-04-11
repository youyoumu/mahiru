import { writeTokenToCookie } from "#/hooks/use-auth";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

import SignInPage from "./-components/SignInPage";

export const Route = createFileRoute("/sign_in/")({
  validateSearch: z.object({
    t: z.string(),
  }),
  component: SignInPage,
  loaderDeps({ search: { t } }) {
    return { t };
  },
  async loader({ deps: { t } }) {
    await writeTokenToCookie({ t });
    throw redirect({ to: "/tags" });
  },
});
