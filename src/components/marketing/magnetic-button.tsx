"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
  target?: "_blank";
};

export function MagneticButton({ href, children, className, secondary, target }: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  return (
    <motion.div
      style={reduced ? undefined : { x: springX, y: springY }}
      onMouseMove={(event) => {
        if (reduced) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const dx = event.clientX - (bounds.left + bounds.width / 2);
        const dy = event.clientY - (bounds.top + bounds.height / 2);
        x.set(dx * 0.16);
        y.set(dy * 0.16);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={reduced ? undefined : { scale: 1.04 }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      className="inline-block"
    >
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        className={cn(
          "group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-base font-extrabold transition-colors duration-300",
          secondary
            ? "border-2 border-navy/15 bg-white text-navy hover:border-navy/40"
            : "bg-strawberry text-white shadow-candy hover:bg-berry",
          className
        )}
      >
        <span>{children}</span>
        <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </motion.div>
  );
}
