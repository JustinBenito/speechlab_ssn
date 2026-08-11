"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

export function FlapText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span className={`flap-perspective ${className}`}>
      <span aria-hidden="true">
        {words.map((word, wi) => (
          <Fragment key={wi}>
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, ci) => {
                const i = charIndex++;
                return (
                  <motion.span
                    key={ci}
                    className="inline-block"
                    style={{ transformOrigin: "50% 100%" }}
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{
                      duration: 0.55,
                      delay: delay + i * 0.02,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
            {wi < words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
