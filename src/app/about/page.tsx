import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHeroImage } from "@/components/PageHeroImage";
import { about, vision, mission, researchAreas, people, contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — Speech Lab, SSN",
  description:
    "Speech Lab at SSN College of Engineering: our history, vision, mission, and research areas in speech and language technology.",
};

export default function AboutPage() {
  return (
    <div className="pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-4xl px-6">
        <PageHeroImage alt="Speech Lab, SSN College of Engineering" />

        <Reveal index={1} className="mt-10">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
            About Us
          </p>
        </Reveal>
        <Reveal index={2}>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Speech &amp; language research at SSN, since {about.founded}.
          </h1>
        </Reveal>
        <Reveal index={3}>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
            {about.intro}
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-4xl px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
                Vision
              </p>
            </Reveal>
            <Reveal index={1}>
              <p className="font-display mt-6 text-xl font-medium leading-snug tracking-tight text-neutral-900 md:text-2xl">
                &ldquo;{vision}&rdquo;
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
                Mission
              </p>
            </Reveal>
            <ul className="mt-6 space-y-6">
              {mission.map((item, i) => (
                <Reveal as="li" key={item} index={i + 1} className="flex gap-4">
                  <span className="font-display text-sm text-accent-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-neutral-700">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-4xl px-6">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
            Research Areas
          </p>
        </Reveal>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {researchAreas.map((area, i) => (
            <Reveal
              key={area}
              index={i % 6}
              as="li"
              className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-accent-300 hover:text-accent-700"
            >
              {area}
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-20 max-w-4xl border-t border-neutral-200 px-6 pt-16">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
            Contact Us
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {people.heads.map((head, i) => (
            <Reveal key={head.name} index={i}>
              <div className="font-display text-neutral-900">{head.name}</div>
              <div className="mt-1 text-sm text-neutral-500">{head.role}</div>
              <a
                href={`mailto:${head.email}`}
                className="mt-2 inline-block text-sm text-accent-700 underline decoration-accent-200 underline-offset-4 hover:text-accent-800"
              >
                {head.email}
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal index={2}>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-neutral-600">
            {contact.address}
            <br />
            Phone: {contact.phone}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
