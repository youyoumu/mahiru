import type { ReactNode } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { useCurrentUser } from "#/hooks/useCurrentUser";
import { Toaster } from "#/components/ui/sonner";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: currentUser } = useCurrentUser();
  return (
    <div className="h-svh">
      <div className="h-16 bg-orange-200 flex justify-center border-b">
        <div className="max-w-7xl grow justify-end flex items-center px-4">
          {currentUser && (
            <div className="flex items-center gap-4">
              <div className="text-primary-foreground">
                {currentUser?.username}
              </div>
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

      <Toaster />
    </div>
  );
}
