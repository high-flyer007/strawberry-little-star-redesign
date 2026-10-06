"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
};

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Reveal({ children, className, delay = 0, y = 44, duration = 0.9, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            once,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, y, duration, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
