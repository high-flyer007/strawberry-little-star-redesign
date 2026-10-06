"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Positive = drifts down as you scroll past, negative = rises. */
  distance?: number;
};

/**
 * Lightweight scroll parallax built on Framer Motion's scroll values
 * (driven by native scroll, so it plays nicely with Lenis).
 */
export function Parallax({ children, className, distance = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}
