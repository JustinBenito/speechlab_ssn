import Image from "next/image";
import { expertise } from "@/lib/data";
import { Reveal } from "./Reveal";

// Positions (% of the illustration's own box) and rotation for the flag
// emoji scattered across the "Language & Translation" card, lifted 1:1 from
// the Figma source (Frame 654 / Group 19, 385x192 box).
const flags: { emoji: string; x: number; y: number; rotate: number }[] = [
  { emoji: "🇮🇳", x: 49.87, y: 81.42, rotate: 0 },
  { emoji: "🇺🇸", x: 33.8, y: 82.54, rotate: -83 },
  { emoji: "🇷🇺", x: 38.73, y: 59.59, rotate: -40 },
  { emoji: "🇦🇩", x: 49.87, y: 49.65, rotate: 0 },
  { emoji: "🇦🇷", x: 61.06, y: 59.58, rotate: 51 },
  { emoji: "🇧🇩", x: 66.02, y: 82.03, rotate: 89 },
  { emoji: "🇧🇻", x: 77.4, y: 99.65, rotate: 106 },
  { emoji: "🇦🇹", x: 78.7, y: 72.57, rotate: 81 },
  { emoji: "🇦🇪", x: 72.21, y: 45.49, rotate: 52 },
  { emoji: "🇯🇵", x: 59.82, y: 26.89, rotate: 25 },
  { emoji: "🇨🇳", x: 45.24, y: 24.2, rotate: -7 },
  { emoji: "🇰🇷", x: 30.89, y: 37.12, rotate: -35 },
  { emoji: "🇧🇳", x: 22.67, y: 61.78, rotate: -65 },
  { emoji: "🇱🇰", x: 21.37, y: 92.51, rotate: -95 },
];

// Per-card layout: where it sits in the 3-col desktop grid, and its mobile
// aspect ratio (matched to the exported illustration's own viewBox).
const layout = [
  { grid: "md:col-start-1 md:col-span-2 md:row-start-1", aspect: "aspect-[33/8]" },
  { grid: "md:col-start-3 md:row-start-1 md:row-span-2", aspect: "aspect-[387/520]" },
  { grid: "md:col-start-1 md:row-start-2", aspect: "aspect-[385/192]" },
  { grid: "md:col-start-2 md:row-start-2", aspect: "aspect-[385/192]" },
  { grid: "md:col-start-1 md:col-span-3 md:row-start-3", aspect: "aspect-[33/8]" },
];

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

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:[grid-template-rows:repeat(3,minmax(300px,auto))]">
        {expertise.map((item, i) => {
          const { grid, aspect } = layout[i] ?? layout[0];
          const isLanguageCard = item.tag === "MT";

          return (
            <Reveal
              key={item.title}
              index={i}
              className={`group relative flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_24px_-8px_rgba(15,23,42,0.12)] ${grid}`}
            >
              <div
                className={`relative min-h-0 shrink-0 overflow-hidden bg-[#FDFDFD] ${aspect} md:aspect-auto md:flex-1`}
                style={{ containerType: "inline-size" }}
              >
                {item.illustration && (
                  <Image
                    src={item.illustration}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                )}
                {isLanguageCard &&
                  flags.map((f, fi) => (
                    <span
                      key={fi}
                      aria-hidden
                      className="pointer-events-none absolute select-none leading-none"
                      style={{
                        left: `${f.x}%`,
                        top: `${f.y}%`,
                        fontSize: "5.2cqw",
                        transform: `translate(-50%, -50%) rotate(${f.rotate}deg)`,
                      }}
                    >
                      {f.emoji}
                    </span>
                  ))}
              </div>

              <div className="relative shrink-0 bg-white p-5">
                <h3 className="font-display text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500">
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
