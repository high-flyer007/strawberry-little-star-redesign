"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

import type { GalleryItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3 md:auto-rows-[200px]">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 text-left shadow-[0_24px_100px_rgba(15,23,42,0.08)] backdrop-blur-xl",
              item.span
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/8 to-transparent" />
            <div className="absolute inset-x-5 bottom-5">
              <p className="text-sm uppercase tracking-[0.28em] text-white/70">Gallery</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-stone-950/82 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 p-3 text-white"
            >
              <X className="size-5" />
            </button>

            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)}
              className="absolute left-4 rounded-full border border-white/20 bg-white/10 p-3 text-white md:left-8"
            >
              <ChevronLeft className="size-5" />
            </button>

            <motion.div
              key={items[activeIndex].src}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
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
              <div className="border-t border-white/10 bg-white/6 px-6 py-5 text-white backdrop-blur-xl">
                <h3 className="text-2xl font-semibold">{items[activeIndex].title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-white/70">{items[activeIndex].caption}</p>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
              className="absolute right-4 rounded-full border border-white/20 bg-white/10 p-3 text-white md:right-8"
            >
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
