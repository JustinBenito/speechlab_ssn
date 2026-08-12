import Link from "next/link";
import Image from "next/image";
import { nav, contactUrl } from "@/lib/data";
import { Button } from "./Button";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Speech Lab SSN"
            width={1672}
            height={941}
            priority
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-accent-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href={contactUrl} variant="ghost" size="sm" external>
          Contact
        </Button>
      </div>
    </header>
  );
}
