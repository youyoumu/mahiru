import { createFileRoute, redirect } from "@tanstack/react-router";
import { object, string } from "valibot";
import SignInPage from "./-components/SignInPage";
import { writeTokenToCookie } from "#/hooks/useAuth";

export const Route = createFileRoute("/sign_in/")({
  validateSearch: object({
    one_time_token: string(),
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
