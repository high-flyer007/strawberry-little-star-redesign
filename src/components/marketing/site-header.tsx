"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigation, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > previous && current > 120);
      previous = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-white/75 px-4 py-3 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff6f7d,#ffd166)] text-white shadow-[0_12px_30px_rgba(255,111,125,0.45)]">
            <Sparkles className="size-5" />
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-stone-500">Ahilyanagar</p>
            <p className="text-sm font-semibold text-stone-950 md:text-base">{site.shortName}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium text-stone-600 transition-colors hover:text-stone-950",
                  active && "text-stone-950"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-rose-500 to-orange-400 transition-transform duration-300",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/admissions"
            className="rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_48px_rgba(12,16,36,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book a Visit
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border border-stone-200 p-3 text-stone-700 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-stone-950/82 p-4 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] p-6 text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-white/50">Navigate</p>
                  <p className="mt-2 text-xl font-semibold">{site.shortName}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/15 p-3 text-white"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-1 flex-col justify-center gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-4xl font-semibold tracking-[-0.04em] text-white/90"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="space-y-2 text-sm text-white/70">
                <p>{site.addressLine1}</p>
                <p>{site.addressLine2}</p>
                <p>{site.hours}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
