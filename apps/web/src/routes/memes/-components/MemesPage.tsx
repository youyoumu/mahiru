import { useCurrentUser } from "#/hooks/useCurrentUser";
import { useMemes } from "#/hooks/useMemes";

export default function MemesPage() {
  const { data: memes } = useMemes();
  const { data: currentUser } = useCurrentUser();
  console.log("DEBUG[316]: currentUser=", currentUser);
  console.log("DEBUG[313]: memes=", memes);
  return <div>MemesPage</div>;
}
