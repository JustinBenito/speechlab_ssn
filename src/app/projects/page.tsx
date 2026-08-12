import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHeroImage } from "@/components/PageHeroImage";
import { projectsDetailed } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Speech Lab, SSN",
  description:
    "The full list of funded projects at Speech Lab, SSN: investigators, funding agencies, duration, and outcomes.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-4xl border-x border-dashed border-neutral-200 pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="px-6 md:px-10">
        <PageHeroImage src="/research.png" alt="Speech Lab funded projects" />

        <Reveal index={1} className="mt-10">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
            Projects
          </p>
        </Reveal>
        <Reveal index={2}>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            {projectsDetailed.length} funded projects, in full detail.
          </h1>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-6 max-w-2xl text-base text-neutral-600">
            Every project the lab has run since 2008 &mdash; investigators,
            funding agency, duration, and outcome.
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-neutral-200 border-t border-neutral-200">
          {projectsDetailed.map((project, i) => (
            <Reveal
              key={project.slug}
              index={i % 4}
              id={project.slug}
              className="scroll-mt-36 py-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="font-display max-w-2xl text-xl font-medium text-neutral-900">
                  {project.title}
                </h2>
                <span className="shrink-0 text-sm text-neutral-400">{project.duration}</span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
                {project.description}
              </p>

              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                    Investigators
                  </dt>
                  <dd className="mt-1 text-neutral-700">{project.investigators.join(", ")}</dd>
                </div>
                {project.consortiumLeader && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                      Consortium Leader
                    </dt>
                    <dd className="mt-1 text-neutral-700">{project.consortiumLeader}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                    Funding Agency
                  </dt>
                  <dd className="mt-1 text-neutral-700">{project.fundingAgency}</dd>
                </div>
                {project.fundAllocated && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                      Fund Allocated
                    </dt>
                    <dd className="mt-1 text-neutral-700">{project.fundAllocated}</dd>
                  </div>
                )}
              </dl>

              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-700 hover:text-accent-800"
                >
                  {project.link.label}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
