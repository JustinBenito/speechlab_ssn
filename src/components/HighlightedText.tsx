"use client";

import { motion } from "framer-motion";

export function HighlightedText({ text, phrase }: { text: string; phrase: string }) {
  const idx = text.indexOf(phrase);
  if (idx === -1) return <>{text}</>;

  const before = text.slice(0, idx);
  const after = text.slice(idx + phrase.length);

  return (
    <>
      {before}
      <span className="relative inline-block">
        <motion.span
          aria-hidden="true"
          className="absolute -inset-x-1 inset-y-0 -z-10 origin-left rounded-sm bg-accent-200"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1], delay: 0.35 }}
        />
        {phrase}
      </span>
      {after}
    </>
  );
}
