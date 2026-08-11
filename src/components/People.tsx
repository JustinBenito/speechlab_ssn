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
        <div className="rounded-3xl bg-neutral-900 px-8 py-16 text-center md:px-16 md:py-24">
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
      </Reveal>
    </section>
  );
}
