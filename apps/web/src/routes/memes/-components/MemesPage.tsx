import { useMemes } from "#/hooks/useMemes";

export default function MemesPage() {
  const { data: memes } = useMemes();
  console.log("DEBUG[313]: memes=", memes);
  return <div>MemesPage</div>;
}
