import type { ReactNode } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { Toaster } from "#/components/ui/sonner";
import { useRemoveTokenToCookie } from "#/hooks/use-auth";
import { useCurrentUser } from "#/hooks/use-current-user";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { cva } from "class-variance-authority";
import { LogOut } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: currentUser, isLoading: L1 } = useCurrentUser();
  const isNotLogin = !currentUser && !L1;
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate: logout } = useRemoveTokenToCookie();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: async () => {
        await navigate({ to: "/" });
        await queryClient.invalidateQueries();
      },
    });
  };

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
      <div className="flex flex-col min-h-screen bg-polkadot">
        <div className="h-16 bg-neutral-50 flex justify-center border-b fixed top-0 shrink-0 w-full z-10">
          <div className="max-w-7xl grow justify-center flex items-center px-4 relative">
            <a
              href="https://github.com/youyoumu/mahiru"
              target="_blank"
              className="text-3xl font-bold text-primary-foreground cursor-pointer absolute left-4"
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
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar className="size-10 cursor-pointer">
                      <AvatarImage
                        src={`https://cdn.discordapp.com/avatars/${currentUser?.id}/${currentUser?.avatar}`}
                      />
                      <AvatarFallback className="bg-primary-foreground text-primary">
                        {currentUser?.username?.[0] ?? "A"}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      variant="destructive"
                      className="cursor-pointer"
                      onClick={handleLogout}
                    >
                      <LogOut className="size-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
