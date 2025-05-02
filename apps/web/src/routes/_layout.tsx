import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Layout from "./-components/Layout";
import { currentUserQueryOptions } from "#/hooks/useCurrentUser";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
  async beforeLoad({ context: { queryClient } }) {
    try {
      await queryClient.fetchQuery({
        ...currentUserQueryOptions,
      });
    } catch {
      throw redirect({ to: "/" });
    }
  },
});

function RouteComponent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
