"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { recentHighlights, recentYearsCount } from "@/lib/publications";

function DotIcon({ active }: { active: boolean }) {
  return (
    <span className="grid shrink-0 grid-cols-2 gap-1">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
            active ? "bg-accent-600" : "bg-neutral-300"
          }`}
        />
      ))}
    </span>
  );
}

export function RecentPublications() {
  const [active, setActive] = useState(0);
  const current = recentHighlights[active];
  const next = recentHighlights[(active + 1) % recentHighlights.length];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 px-8 py-14 md:px-14 md:py-20">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
                Publications
              </p>
              <h2 className="font-display mt-6 text-2xl font-semibold leading-snug tracking-tight text-neutral-900 md:text-3xl">
                Two years of published research.
              </h2>
              <p className="mt-4 max-w-md text-neutral-600">
                {recentYearsCount} papers since the start of 2025 alone &mdash; spanning
                sign language recognition, dysarthric speech, and whisper-to-speech
                conversion.
              </p>

              <div className="mt-8">
                <Button href="/publications" variant="primary">
                  Read all publications
                </Button>
              </div>

              <ul className="mt-14 border-t border-neutral-200">
                {recentHighlights.map((item, i) => {
                  const isActive = i === active;
                  return (
                    <li key={item.title} className="border-b border-neutral-200">
                      <button
                        onClick={() => setActive(i)}
                        className="flex w-full items-center gap-3 py-4 text-left"
                      >
                        <DotIcon active={isActive} />
                        <span
                          className={`text-sm transition-colors duration-300 ${
                            isActive ? "font-medium text-neutral-900" : "text-neutral-400"
                          }`}
                        >
                          {item.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative h-[28rem] md:h-[34rem]">
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-2 rounded-2xl border border-neutral-200 bg-white/70 px-8 py-6 [transform:rotate(-2deg)]"
              >
                <span className="font-display text-sm text-neutral-400">{next.title}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 14, rotate: -1 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 top-14 bottom-0 flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.25)]"
                >
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="rounded-full bg-accent-50 px-2.5 py-1 font-medium text-accent-700">
                      {current.year}
                    </span>
                    <span>{current.venue}</span>
                  </div>
                  <h3 className="font-display mt-4 text-lg font-medium text-neutral-900">
                    {current.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {current.citation}
                  </p>
                  <div className="mt-auto flex items-end justify-between border-t border-neutral-100 pt-6">
                    <span className="font-display text-7xl leading-none text-neutral-100">
                      &ldquo;
                    </span>
                    <span className="font-display text-xs uppercase tracking-[0.2em] text-neutral-300">
                      Speech Lab
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
