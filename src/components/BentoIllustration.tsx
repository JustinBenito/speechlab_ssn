"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

function hash(seed: number, i: number) {
  const x = Math.sin(seed * 137 + i * 9301 + 1) * 43758.5453;
  return x - Math.floor(x);
}

function Bars({
  count = 22,
  seed = 1,
  className = "",
}: {
  count?: number;
  seed?: number;
  className?: string;
}) {
  const heights = useMemo(
    () => Array.from({ length: count }, (_, i) => 0.25 + hash(seed, i) * 0.75),
    [count, seed]
  );
  return (
    <div className={`flex h-full items-end gap-[3px] ${className}`}>
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-accent-400/70"
          animate={{ scaleY: [h * 0.4, h, h * 0.5, h * 0.85, h * 0.4] }}
          transition={{
            duration: 1.6 + (i % 5) * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.03,
          }}
          style={{ height: "100%", transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}

function CrossfadeWords({ a, b }: { a: string; b: string }) {
  const times = [0, 0.4, 0.5, 0.9, 1];
  return (
    <div className="relative h-5 w-full">
      <motion.span
        className="font-display absolute inset-0 flex items-center text-sm text-neutral-700"
        animate={{ opacity: [1, 1, 0, 0, 1] }}
        transition={{ duration: 4, times, repeat: Infinity }}
      >
        {a}
      </motion.span>
      <motion.span
        className="font-display absolute inset-0 flex items-center text-sm text-neutral-700"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 4, times, repeat: Infinity }}
      >
        {b}
      </motion.span>
    </div>
  );
}

function TypingLine({ text }: { text: string }) {
  return (
    <div className="font-display flex h-5 items-center text-sm text-neutral-700">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 3,
            times: [0, 0.08, 0.85, 1],
            repeat: Infinity,
            delay: i * 0.09,
            repeatDelay: 0.6,
          }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </div>
  );
}

export function BentoIllustration({ tag }: { tag: string }) {
  switch (tag) {
    case "ASR":
      return (
        <div className="flex h-16 flex-col justify-between">
          <Bars count={26} seed={1} className="h-9" />
          <TypingLine text="ஒலியை உரையாக..." />
        </div>
      );
    case "TTS":
      return (
        <div className="flex h-16 flex-col justify-between">
          <CrossfadeWords a="Speech" b="பேச்சு" />
          <Bars count={26} seed={2} className="h-9" />
        </div>
      );
    case "MT":
      return (
        <div className="flex h-16 items-center gap-3">
          <CrossfadeWords a="സംസാരം" b="Speech" />
          <motion.span
            className="font-display shrink-0 text-accent-500"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            &rarr;
          </motion.span>
        </div>
      );
    case "ISL":
      return (
        <div className="flex h-16 items-center gap-4">
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-9 w-9 shrink-0 text-accent-500"
            animate={{ rotate: [0, -12, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M7 12V6a1.5 1.5 0 0 1 3 0v5-3a1.5 1.5 0 0 1 3 0v3-2a1.5 1.5 0 0 1 3 0v3.5c0 3-2 5.5-5.5 5.5S6 16 6 13v-2a1.3 1.3 0 0 1 2.6-.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
          <motion.span
            className="font-display text-sm text-neutral-700"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.6, times: [0, 0.2, 0.8, 1], repeat: Infinity }}
          >
            Sign &rarr; Speech
          </motion.span>
        </div>
      );
    default:
      return null;
  }
}
