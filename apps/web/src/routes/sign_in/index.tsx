import { createFileRoute } from "@tanstack/react-router";
import { object, string } from "valibot";
import SignInPage from "./-components/SignInPage";

export const Route = createFileRoute("/sign_in/")({
  validateSearch: object({
    one_time_token: string(),
  }),
  component: SignInPage,
});
