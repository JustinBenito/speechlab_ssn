import Image from "next/image";

export function TopBanner() {
  return (
    <a
      href="https://limegreen.studio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 top-0 z-[60] flex h-8 items-center justify-center overflow-hidden"
    >
      <Image src="/banner.png" alt="" fill priority className="object-cover" />
      <span className="relative font-display text-xs font-medium tracking-wide text-white">
        Website built by Alumnus of Speech Lab SSN
      </span>
    </a>
  );
}
