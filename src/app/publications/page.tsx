import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHeroImage } from "@/components/PageHeroImage";
import { PublicationsBrowser } from "@/components/PublicationsBrowser";
import {
  conferencePublications,
  journalPublications,
  patents,
  bookChapters,
  publicationStats,
} from "@/lib/publications";

export const metadata: Metadata = {
  title: "Publications — Speech Lab, SSN",
  description:
    "Conference papers, journal articles, patents, and book chapters published by Speech Lab, SSN College of Engineering.",
};

export default function PublicationsPage() {
  const total = publicationStats.conferenceCount + publicationStats.journalCount;

  return (
    <div className="mx-auto min-h-screen max-w-4xl border-x border-dashed border-neutral-200 pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="px-6 md:px-10">
        <PageHeroImage src="/publications.png" alt="Speech Lab publications" />

        <Reveal className="mt-10">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
            Publications
          </p>
        </Reveal>
        <Reveal index={1}>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            {total}+ papers, since 2004.
          </h1>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-6 max-w-2xl text-base text-neutral-600">
            {publicationStats.conferenceCount} conference papers and{" "}
            {publicationStats.journalCount} journal articles, plus granted patents and book
            chapters, spanning speech recognition, synthesis, translation, and assistive
            technology.
          </p>
        </Reveal>

        <Reveal index={3} className="mt-14">
          <PublicationsBrowser conference={conferencePublications} journal={journalPublications} />
        </Reveal>

        <div className="mt-20 border-t border-neutral-200 pt-16">
          <Reveal>
            <h2 className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
              Granted Patents
            </h2>
          </Reveal>
          <ul className="mt-6 space-y-4">
            {patents.map((entry, i) => (
              <Reveal as="li" key={i} index={i} className="text-sm leading-relaxed text-neutral-700">
                {entry}
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-16">
          <Reveal>
            <h2 className="font-display text-sm uppercase tracking-[0.2em] text-neutral-400">
              Book Chapters
            </h2>
          </Reveal>
          <ul className="mt-6 space-y-4">
            {bookChapters.map((entry, i) => (
              <Reveal as="li" key={i} index={i} className="text-sm leading-relaxed text-neutral-700">
                {entry}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
