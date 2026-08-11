import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHeroImage } from "@/components/PageHeroImage";
import { activities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Activities — Speech Lab, SSN",
  description:
    "Workshops, winter schools, and internships hosted by Speech Lab, SSN College of Engineering.",
};

export default function ActivitiesPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-4xl px-6">
        <PageHeroImage alt="Speech Lab activities" />

        <Reveal className="mt-10">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
            Activities
          </p>
        </Reveal>
        <Reveal index={1}>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Workshops, schools, and internships.
          </h1>
        </Reveal>

        <div className="mt-16 space-y-16">
          <div>
            <Reveal>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-accent-700">
                HTS Workshop
              </h2>
            </Reveal>
            {activities.workshops.map((item, i) => (
              <Reveal key={item.title} index={i + 1} className="mt-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-medium text-neutral-900">
                    {item.title}
                  </h3>
                  <span className="text-sm text-neutral-400">{item.date}</span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="border-t border-neutral-200 pt-16">
            <Reveal>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-accent-700">
                Winter School
              </h2>
            </Reveal>
            <Reveal index={1} className="mt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-medium text-neutral-900">
                  {activities.wissap.title}
                </h3>
                <span className="text-sm text-neutral-400">{activities.wissap.date}</span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
                {activities.wissap.description}
              </p>
            </Reveal>
          </div>

          <div className="border-t border-neutral-200 pt-16">
            <Reveal>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-accent-700">
                Internships
              </h2>
            </Reveal>
            <div className="mt-5 space-y-8">
              {activities.internships.map((item, i) => (
                <Reveal key={item.title} index={i + 1}>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-base font-medium text-neutral-900">
                      {item.title}
                    </h3>
                    <span className="text-sm text-neutral-400">{item.date}</span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-16">
            <Reveal>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-accent-700">
                Other Workshops
              </h2>
            </Reveal>
            <div className="mt-5 divide-y divide-neutral-200">
              {activities.otherWorkshops.map((item, i) => (
                <Reveal key={item.title} index={i % 4} className="py-5">
                  <h3 className="font-display text-base font-medium text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    {item.coordinators} &middot; {item.venue} &middot; {item.date}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
