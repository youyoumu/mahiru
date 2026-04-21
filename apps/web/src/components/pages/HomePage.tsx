import { useCurrentUser } from "#/hooks/use-current-user";
import { sample } from "es-toolkit";
import { useRef, useState, type MouseEvent, type TouchEvent } from "react";

export default function HomePage() {
  const { data: currentUser, isLoading: L1 } = useCurrentUser();

  const isNotLogin = !currentUser && !L1;

  return (
    <div className="flex flex-col pt-16 min-h-screen">
      <div className="w-full max-w-7xl mx-auto p-4 flex flex-col items-center justify-center grow gap-4">
        <HomePicture />
        {isNotLogin && (
          <div className="w-72 text-muted-foreground">
            You're not logged in. To get started, use the{" "}
            <span className="bg-muted border rounded-xs px-0.5">login</span> command from the Mahiru
            bot.
          </div>
        )}
      </div>
    </div>
  );
}

const imgSources = [
  "https://i.pinimg.com/236x/70/e4/26/70e426177f4323a7f6c2eeef570d6e8f.jpg",
  "https://i.pinimg.com/236x/ef/70/2d/ef702de6cb091cef76b5524f1b7485cd.jpg",
  "https://i.pinimg.com/236x/2e/96/4e/2e964eba4ac6261d5159227058c996a0.jpg",
  "https://i.pinimg.com/236x/ce/bf/97/cebf97b030c7b2ad08191317f949ee41.jpg",
];

const quotes = [
  "You're hopeless without me.",
  "I'll take care of you, just for today.",
  "The angel next door is spoiling you.",
  "I'm not an angel, you know.",
  "If you're okay with me being the one...",
  "You really are a good person, Amane-kun.",
  "I want to stay by your side.",
  "Don't catch a cold, okay?",
  "I'll be the one to see you at your worst.",
];

const HomePicture = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [src] = useState(sample(imgSources));
  const [quote] = useState(sample(quotes));
  const [emojis, setEmojis] = useState<
    { id: string; x: number; y: number; size: number; rotation: number }[]
  >([]);

  function handleMove(
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent> | TouchEvent<HTMLDivElement>,
  ) {
    const bounds = parentRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const isTouch = e.type === "touchmove";
    const clientX = isTouch
      ? ((e as TouchEvent).touches[0]?.clientX ?? 0)
      : (e as MouseEvent<HTMLDivElement, globalThis.MouseEvent>).clientX;
    const clientY = isTouch
      ? ((e as TouchEvent).touches[0]?.clientY ?? 0)
      : (e as MouseEvent<HTMLDivElement, globalThis.MouseEvent>).clientY;

    const x = clientX - bounds.left;
    const y = clientY - bounds.top;

    // Detect "patting" on the head (top 30% of the image)
    const relativeY = y / bounds.height;
    if (relativeY > 0.4) return;

    // Only spawn occasionally to avoid clutter, but enough to feel responsive
    if (Math.random() > 0.1) return;

    const newEmoji = {
      id: crypto.randomUUID(),
      // Spawn slightly offset from cursor for a "burst" feel
      x: x + (Math.random() - 0.5) * 40,
      y: y + (Math.random() - 0.5) * 40,
      size: 0.8 + Math.random() * 0.7, // Random sizes
      rotation: (Math.random() - 0.5) * 45, // Random tilt
    };

    setEmojis((prev) => [...prev, newEmoji]);
    setTimeout(() => {
      setEmojis((prev) => prev.filter((emoji) => emoji.id !== newEmoji.id));
    }, 1000);
  }

  return (
    <div
      ref={parentRef}
      className="relative group cursor-grab flex flex-col items-center gap-2 select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <div className="text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-6">
        <span className="text-sm italic text-muted-foreground font-medium">"{quote}"</span>
      </div>
      <img src={src} className="border-4 border-white shadow-sm" />
      {emojis.map((emoji) => (
        <FloatingHeart key={emoji.id} {...emoji} />
      ))}
    </div>
  );
};

function FloatingHeart({
  x,
  y,
  size,
  rotation,
}: {
  x: number;
  y: number;
  size: number;
  rotation: number;
}) {
  return (
    <div
      className="absolute pointer-events-none animate-float-heart"
      style={{
        top: y,
        left: x,
      }}
    >
      <div
        style={{
          transform: `scale(${size}) rotate(${rotation}deg)`,
        }}
        className="text-3xl filter drop-shadow-md"
      >
        ❤️
      </div>
    </div>
  );
}
