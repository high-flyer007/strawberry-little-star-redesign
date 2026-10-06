"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  max?: number;
};

/**
 * Storybook-object hover: the card leans toward the cursor and returns with a spring.
 * Disabled automatically for prefers-reduced-motion.
 */
export function TiltCard({ children, className, max = 9 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 220, damping: 20 });

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    px.set((event.clientX - bounds.left) / bounds.width);
    py.set((event.clientY - bounds.top) / bounds.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={
        reduced
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 900,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
