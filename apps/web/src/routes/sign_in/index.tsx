import { writeTokenToCookie } from "#/hooks/use-auth";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

import SignInPage from "./-components/SignInPage";

export const Route = createFileRoute("/sign_in/")({
  validateSearch: z.object({
    one_time_token: z.string(),
  }),
  component: SignInPage,
  loaderDeps({ search: { one_time_token } }) {
    return { one_time_token };
  },
  async loader({ deps: { one_time_token } }) {
    await writeTokenToCookie({ one_time_token });
    throw redirect({ to: "/memes" });
  },
});
