import type { ReactNode } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { useCurrentUser } from "#/hooks/useCurrentUser";
import { Toaster } from "#/components/ui/sonner";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: currentUser } = useCurrentUser();
  return (
    <div className="h-svh w-screen">
      <div className="h-16 bg-amber-100 flex justify-center border-b">
        <div className="max-w-7xl grow justify-end flex items-center px-4">
          {currentUser && (
            <Avatar>
              <AvatarImage
                src={`https://cdn.discordapp.com/avatars/${currentUser?.id}/${currentUser?.avatar}`}
              />
              <AvatarFallback>
                {currentUser?.username?.[0] ?? "A"}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>

      {children}

      <Toaster />
    </div>
  );
}
