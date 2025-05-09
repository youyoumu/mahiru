import { useCurrentUser } from "#/hooks/useCurrentUser";
import { Link } from "@tanstack/react-router";

export default function HomePage() {
  const { data: currentUser, isLoading: L1 } = useCurrentUser();

  const isNotLogin = !currentUser && !L1;

  return (
    <div className="h-svh flex flex-col ">
      <div className="h-16 flex justify-center bg-slate-700">
        <div className="max-w-7xl grow justify-between flex items-center px-4">
          <div></div>
          {!isNotLogin && (
            <Link className="text-secondary" to="/memes">
              Memes
            </Link>
          )}
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto p-4 flex flex-col items-center justify-center grow">
        <img src="/azusa.webp" />
        {isNotLogin && (
          <div className="w-64 text-muted-foreground">
            You're not logged in. To get started, use the{" "}
            <span className="bg-muted border rounded-sm px-0.5">login</span>{" "}
            command from the Mahiru bot.
          </div>
        )}
      </div>
    </div>
  );
}
