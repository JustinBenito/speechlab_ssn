import { people } from "@/lib/data";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

function initials(name: string) {
  const parts = name.replace(/^Dr\.\s*/, "").split(" ").filter(Boolean);
  const first = parts[0]?.replace(".", "")[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return (first + last).toUpperCase();
}

export function People() {
  return (
    <section id="people" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-8 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="animate-light-leak-a pointer-events-none absolute -top-1/3 -left-1/4 h-[140%] w-[140%] rounded-full bg-[radial-gradient(circle,rgba(93,139,203,0.35),transparent_60%)] blur-3xl mix-blend-screen"
          />
          <div
            aria-hidden="true"
            className="animate-light-leak-b pointer-events-none absolute -bottom-1/3 -right-1/4 h-[120%] w-[120%] rounded-full bg-[radial-gradient(circle,rgba(255,205,150,0.16),transparent_60%)] blur-3xl mix-blend-screen"
          />
          <div
            aria-hidden="true"
            className="animate-godrays pointer-events-none absolute left-1/2 top-1/2 h-[220%] w-[220%] opacity-30 mix-blend-screen"
            style={{
              backgroundImage:
                "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.16) 4deg, transparent 12deg, transparent 48deg, rgba(255,255,255,0.1) 54deg, transparent 62deg, transparent 98deg, rgba(255,255,255,0.14) 104deg, transparent 112deg, transparent 148deg, rgba(255,255,255,0.08) 154deg, transparent 162deg, transparent 198deg, rgba(255,255,255,0.16) 204deg, transparent 212deg, transparent 248deg, rgba(255,255,255,0.1) 254deg, transparent 262deg, transparent 298deg, rgba(255,255,255,0.14) 304deg, transparent 312deg, transparent 348deg, rgba(255,255,255,0.08) 354deg, transparent 360deg)",
            }}
          />

          <div className="relative">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-500">
              People
            </p>
            <h2 className="font-display mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Take a look at the people behind the lab.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-neutral-400">
              Faculty, research scholars, and students working across speech
              and language technology.
            </p>

            <div className="mt-10 flex justify-center">
              <Button href={people.linkedin} variant="accent" external>
                Our people, on LinkedIn
              </Button>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 border-t border-neutral-800 pt-10 text-left sm:grid-cols-2">
              {people.heads.map((head) => (
                <div key={head.name} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-600">
                    <span className="font-display text-sm font-semibold text-white">
                      {initials(head.name)}
                    </span>
                  </div>
                  <div>
                    <div className="font-display text-white">{head.name}</div>
                    <div className="mt-1 text-sm text-neutral-400">{head.role}</div>
                    <a
                      href={`mailto:${head.email}`}
                      className="mt-2 inline-block text-sm text-neutral-300 underline decoration-neutral-600 underline-offset-4 hover:text-white"
                    >
                      {head.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
