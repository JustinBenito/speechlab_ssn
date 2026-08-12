import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { PageHeroImage } from "@/components/PageHeroImage";
import { demos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Demos — Speech Lab, SSN",
  description: "Live speech technology demos from Speech Lab, SSN College of Engineering.",
};

export default function DemosPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-4xl px-6">
        <PageHeroImage src="/demos.png" alt="Speech Lab demos" />

        <Reveal className="mt-10">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
            Demos
          </p>
        </Reveal>
        <Reveal index={1}>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Try the systems, live.
          </h1>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-6 max-w-2xl text-base text-neutral-600">
            These demos are hosted separately from this site and require a stable, high-speed
            connection to work properly.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {demos.map((demo, i) => (
            <Reveal
              key={demo.title}
              index={i}
              className="flex flex-col rounded-2xl border border-neutral-200 p-8"
            >
              <h2 className="font-display text-lg font-medium text-neutral-900">{demo.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                {demo.description}
              </p>
              <div className="mt-6">
                <Button href={demo.href} variant="accent" external>
                  Launch demo
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
