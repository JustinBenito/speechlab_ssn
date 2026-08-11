"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export function Reveal({
  children,
  className,
  index = 0,
  as = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "li";
  id?: string;
}) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag
      id={id}
      className={className}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
