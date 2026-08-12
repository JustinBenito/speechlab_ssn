"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroCategories } from "@/lib/data";

function hashRandom(seed: number, i: number) {
  const x = Math.sin(seed * 137 + i * 9301 + 1) * 43758.5453;
  return x - Math.floor(x);
}

function AudioVisualizer({ seed }: { seed: number }) {
  const bars = useMemo(
    () => Array.from({ length: 28 }, (_, i) => 0.25 + hashRandom(seed, i) * 0.75),
    [seed]
  );

  return (
    <div className="flex h-14 items-end gap-[3px]">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-white/80"
          initial={{ scaleY: 0.3 }}
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

export function CategoryTabs() {
  const [active, setActive] = useState(0);
  const current = heroCategories[active];

  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-neutral-100 p-1.5">
          {heroCategories.map((cat, i) => {
            const isActive = i === active;
            return (
              <button
                key={cat.tag}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="font-display relative rounded-full px-4 py-2 text-sm transition-colors duration-200"
              >
                {isActive && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_-2px_rgba(15,23,42,0.25)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive ? "font-medium text-accent-700" : "text-neutral-500 hover:text-neutral-800"
                  }`}
                >
                  {cat.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mt-8 h-[22rem] overflow-hidden rounded-2xl md:h-[26rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600 via-accent-500 to-accent-800">
          <div className="absolute -left-10 -top-16 h-56 w-56 rounded-full bg-accent-300/40 blur-3xl" />
          <div className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-accent-200/30 blur-3xl" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.tag}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-3 flex flex-col justify-between overflow-hidden rounded-xl border border-white/25 bg-white/10 p-5 backdrop-blur-xl md:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-display inline-block rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium text-white">
                  {current.tag}
                </span>
                <h3 className="font-display mt-3 text-base font-medium text-white md:text-lg">
                  {current.label}
                </h3>
                <p className="mt-1.5 max-w-sm text-sm text-white/75">{current.blurb}</p>
              </div>
              <span className="font-display hidden shrink-0 rounded-full border border-white/25 px-2.5 py-1 text-xs text-white/70 sm:inline-block">
                {String(active + 1).padStart(2, "0")} / {String(heroCategories.length).padStart(2, "0")}
              </span>
            </div>

            <AudioVisualizer seed={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
