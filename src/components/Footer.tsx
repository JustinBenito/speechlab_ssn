import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { TetrisDots } from "./TetrisDots";
import { contact, nav, people } from "@/lib/data";

const exploreLinks = [...nav, { label: "Research", href: "/#research" }];

const connectLinks = [
  { label: "LinkedIn", href: people.linkedin, external: true },
  ...people.heads.map((head) => ({
    label: head.name,
    href: `mailto:${head.email}`,
    external: false,
  })),
];

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <li className="group inline-flex items-center gap-1 text-sm text-white/70">
      <Link href={href} className="hover:text-white" {...props}>
        {children}
      </Link>
      <span className="flex h-4 w-4 translate-x-0 transform items-center justify-center rounded border border-white/20 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
        <ChevronRightIcon className="h-3 w-3" />
      </span>
    </li>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-4 py-12">
      <div className="relative overflow-hidden rounded-3xl">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#0d1b30]"
          style={{
            backgroundImage:
              "radial-gradient(at 12% 18%, #1a4589 0, transparent 55%), radial-gradient(at 82% 8%, #3569b7 0, transparent 50%), radial-gradient(at 75% 85%, #5d8bcb 0, transparent 55%), radial-gradient(at 15% 90%, #10294f 0, transparent 55%)",
          }}
        />
        <div
          aria-hidden="true"
          className="animate-mesh-drift absolute -inset-1/4 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(93,139,203,0.35), transparent 60%)",
          }}
        />

        <div className="relative px-6 pt-10 md:px-12 md:pt-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg font-semibold tracking-tight text-white">
                  Speech Lab
                </span>
                <span className="text-xs text-white/50">SSN</span>
              </div>
              <p className="mt-3 max-w-xs text-sm text-white/60">
                Dept. of Electronics and Communication Engineering, Sri
                Sivasubramaniya Nadar College of Engineering.
              </p>
              <p className="mt-4 max-w-xs text-sm text-white/70">{contact.address}</p>
              <p className="mt-2 text-sm text-white/70">{contact.phone}</p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/40">Explore</div>
              <ul className="mt-4 space-y-2.5">
                {exploreLinks.map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/40">Connect</div>
              <ul className="mt-4 space-y-2.5">
                {connectLinks.map((item) => (
                  <FooterLink key={item.href} href={item.href} external={item.external}>
                    {item.label}
                  </FooterLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <span>&copy; {new Date().getFullYear()} Speech Lab, SSN College of Engineering.</span>
            <span className="hidden sm:inline">
              Nudge the falling dots with &larr; &rarr;
            </span>
            <span>Est. 2008 &middot; Chennai, India</span>
          </div>
        </div>

        <div className="relative mt-6">
          <TetrisDots />
        </div>
      </div>
    </footer>
  );
}
