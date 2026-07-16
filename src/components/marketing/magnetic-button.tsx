"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
};

export function MagneticButton({ href, children, className, secondary }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300",
          secondary
            ? "border-white/30 bg-white/12 text-white backdrop-blur-xl hover:border-white/50 hover:bg-white/16"
            : "border-white/60 bg-white text-stone-900 shadow-[0_20px_80px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_100px_rgba(255,255,255,0.36)]",
          className
        )}
      >
        <span>{children}</span>
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
