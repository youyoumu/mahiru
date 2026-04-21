import { currentUserQueryOptions } from "#/hooks/use-current-user";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import Layout from "./-components/Layout";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
  async beforeLoad({ context: { queryClient }, location }) {
    if (location.pathname === "/tags") {
      let currentUser;
      try {
        currentUser = await queryClient.fetchQuery({
          ...currentUserQueryOptions,
        });
      } catch {
        throw redirect({ to: "/" });
      }
      if (!currentUser) throw redirect({ to: "/" });
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
