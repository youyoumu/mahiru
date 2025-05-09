import { useCurrentUser } from "#/hooks/useCurrentUser";
import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <LoveEmojiBubbles />
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

const LoveEmojiBubbles = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [emojis, setEmojis] = useState<
    {
      id: string;
      x: number;
      y: number;
    }[]
  >([]);

  return (
    <div
      ref={parentRef}
      className="relative group cursor-grab"
      onMouseMove={(e) => {
        const bounds = parentRef.current?.getBoundingClientRect();
        if (!bounds) return;

        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        if (y > 90) return;
        if (x < 50) return;

        const newEmoji = {
          id: crypto.randomUUID(),
          x: 0 + Math.random() * 200,
          y: 0 + Math.random() * 50,
        };
        const randomNumber = Math.random();
        if (randomNumber > 0.05) return;
        setEmojis((prev) => [...prev, newEmoji]);
        setTimeout(() => {
          setEmojis((prev) => prev.filter((emoji) => emoji.id !== newEmoji.id));
        }, 1000);
      }}
    >
      <img src="/azusa.webp" className="size-64" />
      <AnimatePresence>
        {emojis.map((emoji) => (
          <motion.div
            key={emoji.id}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -50 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute text-3xl"
            style={{ top: emoji.y, left: emoji.x }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
