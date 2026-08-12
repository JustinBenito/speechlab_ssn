import { mission, vision } from "@/lib/data";
import { Reveal } from "./Reveal";
import { AsciiCursor } from "./AsciiCursor";
import { HighlightedText } from "./HighlightedText";

const HIGHLIGHT_PHRASE = "reduce communication barriers";

export function Thesis() {
  return (
    <section id="thesis" className="relative overflow-hidden border-y border-neutral-200 bg-neutral-50/60">
      <AsciiCursor />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
                Our thesis
              </p>
            </Reveal>
            <Reveal index={1}>
              <p className="font-display mt-6 text-2xl font-medium leading-snug tracking-tight text-neutral-900 md:text-3xl">
                &ldquo;<HighlightedText text={vision} phrase={HIGHLIGHT_PHRASE} />&rdquo;
              </p>
            </Reveal>
          </div>

          <ul className="space-y-8">
            {mission.map((item, i) => (
              <Reveal as="li" key={item} index={i} className="flex gap-5">
                <span className="font-display text-sm text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-neutral-700">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
