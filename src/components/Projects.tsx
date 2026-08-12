import { latestProjects } from "@/lib/projects";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

const artStyles = [
  "bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.65)_0%,transparent_45%),radial-gradient(circle_at_75%_70%,rgba(59,130,246,0.55)_0%,transparent_55%),linear-gradient(135deg,#0f172a_0%,#0f766e_50%,#1d4ed8_100%)]",
  "bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.8)_0%,transparent_35%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.45)_0%,transparent_45%),linear-gradient(135deg,#0b1120_0%,#164e63_45%,#0f766e_100%)] [mask-image:radial-gradient(circle,black_10%,transparent_70%)]",
  "bg-[linear-gradient(160deg,#0E2647_0%,#06b6d4_45%,#2dd4bf_100%)]",
];

function ProjectArt({ index }: { index: number }) {
  return (
    <div className="relative h-40 w-full overflow-hidden bg-accent-900">
      <div className={`absolute inset-0 ${artStyles[index % artStyles.length]}`} />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
              Projects
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              The latest funded work
            </h2>
          </Reveal>
        </div>
        <Reveal index={1}>
          <Button href="/projects" variant="ghost">
            View all projects
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {latestProjects.map((project, i) => {
          return (
            <Reveal
              key={project.slug}
              index={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 transition-colors duration-300 hover:border-accent-300"
            >
              <div className="relative">
                <ProjectArt index={i} />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-base font-medium text-neutral-900">
                  {project.title}
                </h3>

                <div className="mt-4 space-y-1.5 text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {project.fundingAgency}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
                    </svg>
                    {project.duration}
                  </div>
                </div>

                <a
                  href={project.link ? project.link.href : `/projects#${project.slug}`}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-700 transition-colors group-hover:text-accent-800"
                >
                  {project.link ? project.link.label : "View project details"}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
