import Image from "next/image";
import { Reveal } from "./Reveal";

export function PageHeroImage({ src = "/aboutus.png", alt }: { src?: string; alt: string }) {
  return (
    <Reveal>
      <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover object-center"
        />
      </div>
    </Reveal>
  );
}
