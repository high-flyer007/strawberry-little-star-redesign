"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";

/**
 * App-wide motion shell:
 * - Lenis smooth scrolling (skipped when the user prefers reduced motion)
 * - Framer MotionConfig so every motion component respects prefers-reduced-motion
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.2,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
