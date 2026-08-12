import type { ReactNode } from "react";
import { expertise } from "@/lib/data";
import { Reveal } from "./Reveal";

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

function ExpertiseIcon({ tag, className }: { tag: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className ?? "h-5 w-5"}
    >
      {icons[tag]}
    </svg>
  );
}

type Variant = "light" | "dark" | "accent";

const variants: Variant[] = ["light", "dark", "accent", "light"];
const spans = ["md:col-span-2", "", "", "md:col-span-2"];

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const shellByVariant: Record<Variant, string> = {
  light:
    "border border-white ring-1 ring-neutral-200/70 bg-gradient-to-br from-white to-accent-50/50 hover:ring-neutral-300",
  dark: "border border-white/10 bg-neutral-900 hover:border-white/20",
  accent:
    "border border-white/10 bg-gradient-to-br from-accent-600 to-accent-700 hover:from-accent-500 hover:to-accent-700",
};

const iconByVariant: Record<Variant, string> = {
  light: "bg-accent-50 text-accent-600",
  dark: "bg-white/10 text-white",
  accent: "bg-white/15 text-white",
};

const tagByVariant: Record<Variant, string> = {
  light: "text-neutral-400",
  dark: "text-white/40",
  accent: "text-white/60",
};

const titleByVariant: Record<Variant, string> = {
  light: "text-neutral-900",
  dark: "text-white",
  accent: "text-white",
};

const descByVariant: Record<Variant, string> = {
  light: "text-neutral-600",
  dark: "text-neutral-400",
  accent: "text-white/75",
};

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

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[220px]">
        {expertise.map((item, i) => {
          const variant = variants[i] ?? "light";
          return (
            <Reveal
              key={item.title}
              index={i}
              className={`group relative flex flex-col overflow-hidden rounded-2xl p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(15,23,42,0.12)] ${shellByVariant[variant]} ${spans[i] ?? ""}`}
            >
              {variant === "light" && (
                <div
                  className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
                  style={gridBg}
                />
              )}

              <div className="relative">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconByVariant[variant]}`}
                >
                  <ExpertiseIcon tag={item.tag} />
                </div>
                <span
                  className={`font-display mt-4 block text-xs uppercase tracking-[0.15em] ${tagByVariant[variant]}`}
                >
                  {item.tag}
                </span>
                <h3
                  className={`font-display mt-2 text-lg font-medium ${titleByVariant[variant]}`}
                >
                  {item.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${descByVariant[variant]}`}>
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
