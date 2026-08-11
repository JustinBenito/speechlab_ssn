import type { ReactNode } from "react";
import { expertise } from "@/lib/data";
import { Reveal } from "./Reveal";
import { BentoIllustration } from "./BentoIllustration";

const icons: Record<string, ReactNode> = {
  ASR: (
    <path d="M4 10v4M8 6v12M12 3v18M16 6v12M20 10v4" strokeLinecap="round" />
  ),
  TTS: (
    <>
      <path d="M4 9v6h4l5 5V4L8 9H4Z" strokeLinejoin="round" />
      <path d="M17 8a5 5 0 0 1 0 8" strokeLinecap="round" />
    </>
  ),
  MT: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  ISL: (
    <path
      d="M7 12V6a1.5 1.5 0 0 1 3 0v5-3a1.5 1.5 0 0 1 3 0v3-2a1.5 1.5 0 0 1 3 0v3.5c0 3-2 5.5-5.5 5.5S6 16 6 13v-2a1.3 1.3 0 0 1 2.6-.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

function ExpertiseIcon({ tag }: { tag: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-5 w-5"
    >
      {icons[tag]}
    </svg>
  );
}

const spans = ["md:col-span-2", "", "", "md:col-span-2"];

export function Expertise() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
          Research
        </p>
      </Reveal>
      <Reveal index={1}>
        <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          What we work on
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[240px]">
        {expertise.map((item, i) => (
          <Reveal
            key={item.title}
            index={i}
            className={`group flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-neutral-300 hover:shadow-[0_4px_16px_-4px_rgba(15,23,42,0.08)] ${spans[i] ?? ""}`}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
              <ExpertiseIcon tag={item.tag} />
            </div>
            <span className="font-display mt-4 text-xs uppercase tracking-[0.15em] text-neutral-400">
              {item.tag}
            </span>
            <h3 className="font-display mt-2 text-lg font-medium text-neutral-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {item.description}
            </p>
            <div className="mt-auto pt-4">
              <BentoIllustration tag={item.tag} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
