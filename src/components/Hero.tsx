"use client";

import { useRef } from "react";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { FlapText } from "./FlapText";
import { AnimatedCounter } from "./AnimatedCounter";
import { CategoryTabs } from "./CategoryTabs";
import { ParticleImage } from "./ParticleImage";
import { stats, contactUrl } from "@/lib/data";

const HERO_PARTICLE_IMAGE =
  "https://ik.imagekit.io/syustaging/SYU_PREPROD/LOGO_bPTbtlWjuK.webp?tr=w-3840";

export function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
            Speech Lab &middot; SSN College of Engineering
          </p>
        </Reveal>

        <div ref={textRef} className="relative">
          <div className="pointer-events-auto absolute top-0 right-0 hidden h-72 w-102 lg:block xl:h-[26rem] xl:w-[26rem]">
            <ParticleImage
              image={HERO_PARTICLE_IMAGE}
              className="h-full w-full"
              revealRef={textRef}
            />
          </div>

          <h1 className="font-display mt-6 max-w-3xl text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl">
            <FlapText text="Frontier speech & language research, from India." delay={0.2} />
          </h1>

          <Reveal index={2}>
            <p className="mt-6 max-w-xl text-lg text-neutral-600">
              Built on sovereign speech technology since 2008 &mdash; delivering
              impact through ASR, TTS, translation, and assistive voice systems
              for Indian languages.
            </p>
          </Reveal>

          <Reveal index={3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href={contactUrl} variant="accent" external>
                Get in touch
              </Button>
              <Button href="/#research" variant="ghost">
                Explore our research
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal index={4}>
          <div className="mt-20 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-8 md:p-12">
            <p className="font-display mb-5 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Explore by category
            </p>
            <CategoryTabs />

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-semibold text-neutral-900 md:text-3xl">
                    <AnimatedCounter value={s.value} />
                  </div>
                  <div className="mt-1 text-sm text-neutral-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
