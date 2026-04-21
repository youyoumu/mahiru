import type { ReactNode } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { Toaster } from "#/components/ui/sonner";
import { useCurrentUser } from "#/hooks/use-current-user";
import { Link } from "@tanstack/react-router";
import { cva } from "class-variance-authority";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: currentUser, isLoading: L1 } = useCurrentUser();
  const isNotLogin = !currentUser && !L1;
  console.log("DEBUG[1978]: isNotLogin=", isNotLogin);

  const link = cva(
    [
      "text-lg font-medium text-primary-foreground/70 data-[status=active]:text-primary-foreground data-[status=active]:border-b-2 border-primary-foreground transition-colors",
    ],
    {
      variants: {
        disabled: {
          true: "opacity-50 cursor-not-allowed",
          false: "cursor-pointer",
        },
      },
      defaultVariants: {
        disabled: false,
      },
    },
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="h-16 bg-neutral-50 flex justify-center border-b fixed top-0 shrink-0 w-full z-10">
          <div className="max-w-7xl grow justify-center flex items-center px-4 relative">
            <a
              href="https://github.com/youyoumu/mahiru"
              target="_blank"
              className="text-2xl font-medium text-primary-foreground cursor-pointer absolute left-4"
            >
              Mahiru
            </a>
            <div className="flex items-center gap-4">
              <Link className={link()} to="/">
                Home
              </Link>
              <Link className={link({ disabled: isNotLogin })} to="/tags" disabled={isNotLogin}>
                Tags
              </Link>
            </div>
            {currentUser && (
              <div className="flex items-center gap-4 absolute right-4">
                <div className="text-primary-foreground">{currentUser?.username}</div>
                <Avatar className="size-10">
                  <AvatarImage
                    src={`https://cdn.discordapp.com/avatars/${currentUser?.id}/${currentUser?.avatar}`}
                  />
                  <AvatarFallback className="bg-primary-foreground text-primary">
                    {currentUser?.username?.[0] ?? "A"}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        </div>
        {children}
      </div>
      <Toaster />
    </>
  );
}
