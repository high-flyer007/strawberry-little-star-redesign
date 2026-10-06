"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import type { GalleryItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const rotations = ["-rotate-1.5", "rotate-1", "-rotate-1", "rotate-2", "rotate-1"];

/**
 * School scrapbook: polaroid-inspired cards with subtle rotations,
 * hover lift/zoom, and an accessible lightbox (keyboard: Esc / arrows).
 */
export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)), [items.length]);
  const next = useCallback(() => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  return (
    <>
      <div className="grid auto-rows-[260px] gap-5 sm:auto-rows-[240px] md:grid-cols-3 md:auto-rows-[230px]">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open photo: ${item.title}`}
            className={cn(
              "group flex flex-col rounded-[1.6rem] border-[6px] border-white bg-white p-2.5 pb-4 text-left shadow-[0_26px_60px_-34px_rgba(38,53,74,0.55)] transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_36px_70px_-34px_rgba(38,53,74,0.6)]",
              rotations[index % rotations.length],
              item.span
            )}
          >
            <span className="relative min-h-0 flex-1 overflow-hidden rounded-[1.1rem]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 92vw, 33vw"
              />
            </span>
            <span className="mt-3 block px-1">
              <span className="block text-lg leading-tight font-semibold text-navy">{item.title}</span>
              <span className="mt-0.5 block truncate text-xs font-bold uppercase tracking-[0.14em] text-navy/45">
                Strawberry Little Star
              </span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${items[activeIndex].title} — photo viewer`}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="absolute top-5 right-5 rounded-full border-2 border-white/25 bg-white/10 p-3 text-white transition-colors hover:border-strawberry hover:bg-strawberry"
            >
              <X className="size-5" />
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 rounded-full border-2 border-white/25 bg-white/10 p-3 text-white transition-colors hover:border-sunshine hover:bg-sunshine hover:text-navy md:left-8"
            >
              <ChevronLeft className="size-6" />
            </button>

            <motion.div
              key={items[activeIndex].src}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[1.8rem] border-[8px] border-white bg-cream shadow-[0_40px_120px_-40px_rgba(0,0,0,0.7)]"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={items[activeIndex].src}
                  alt={items[activeIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="px-6 py-5">
                <h3 className="text-2xl font-semibold text-navy">{items[activeIndex].title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-navy/65">{items[activeIndex].caption}</p>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 rounded-full border-2 border-white/25 bg-white/10 p-3 text-white transition-colors hover:border-sunshine hover:bg-sunshine hover:text-navy md:right-8"
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
