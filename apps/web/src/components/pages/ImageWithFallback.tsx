import { sample } from "es-toolkit";
import {
  Bird,
  Cat,
  Dog,
  Fish,
  type LucideIcon,
  Rabbit,
  Snail,
  Squirrel,
  Turtle,
} from "lucide-react";
import { useState } from "react";

const ANIMALS: LucideIcon[] = [Bird, Cat, Dog, Fish, Rabbit, Snail, Squirrel, Turtle];

export default function ImageWithFallback({ url }: { url: string | undefined }) {
  const [error, setError] = useState(false);
  const [AnimalIcon] = useState(() => sample(ANIMALS));

  if (error || !url) {
    return (
      <div className="flex h-[210px] w-full items-center justify-center bg-secondary">
        <AnimalIcon className="size-12 text-muted-foreground" />
      </div>
    );
  }

  return (
    <img
      width="100%"
      height="210px"
      className="object-contain"
      src={url}
      onError={() => {
        setError(true);
      }}
    />
  );
}
