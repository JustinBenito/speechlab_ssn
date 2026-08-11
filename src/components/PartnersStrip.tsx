import Image from "next/image";
import { funders } from "@/lib/data";

export function PartnersStrip() {
  const items = [...funders, ...funders];

  return (
    <section className="border-y border-neutral-200 bg-neutral-50/60 py-8">
      <p className="mx-auto mb-6 max-w-6xl px-6 text-xs uppercase tracking-[0.2em] text-neutral-400">
        Funded &amp; supported by
      </p>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 whitespace-nowrap">
          {items.map((funder, i) =>
            funder.logo ? (
              <div
                key={`${funder.name}-${i}`}
                title={funder.name}
                className="flex h-9 w-28 shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                <Image
                  src={funder.logo}
                  alt={funder.name}
                  width={112}
                  height={36}
                  className="h-full w-auto object-contain"
                />
              </div>
            ) : (
              <div
                key={`${funder.name}-${i}`}
                title={funder.name}
                className="flex h-9 shrink-0 items-center rounded-md border border-neutral-300 px-3 text-sm font-semibold tracking-wide text-neutral-400 transition-colors duration-300 hover:border-accent-300 hover:text-accent-700"
              >
                {funder.initials}
              </div>
            )
          )}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-50 to-transparent" />
      </div>
    </section>
  );
}
