"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Cloud, Sparkle, Strawberry } from "@/components/decor/shapes";
import { navigation, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > previous && current > 120);
      setScrolled(current > 24);
      previous = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: hidden ? -140 : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[2rem] border px-4 py-2.5 transition-all duration-300 md:px-5 md:py-3",
          scrolled
            ? "border-navy/8 bg-white/92 shadow-[0_18px_50px_-24px_rgba(38,53,74,0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.shortName} — home`}>
          <span className="relative flex size-11 items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-strawberry to-berry text-white shadow-candy transition-transform duration-300 group-hover:-rotate-6 md:size-12">
            <Strawberry className="size-7" />
          </span>
          <span className="leading-none">
            <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.26em] text-berry">
              Pre-Primary School
            </span>
            <span className="mt-1 block text-lg font-semibold text-navy md:text-xl">Strawberry Little Star</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-bold transition-colors duration-200",
                  active ? "text-navy" : "text-navy/60 hover:text-berry"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-full bg-sunshine/45"
                  />
                ) : null}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/admissions"
            className="hidden rounded-full bg-navy px-5 py-3 text-sm font-extrabold text-cream shadow-[0_16px_40px_-18px_rgba(38,53,74,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-strawberry md:inline-block"
          >
            Book a Visit
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="rounded-full border-2 border-navy/10 bg-white p-3 text-navy transition-colors hover:border-strawberry hover:text-strawberry lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-navy/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            {/* Decorative night sky */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <Cloud className="absolute -top-4 -right-10 w-56 text-white/10" />
              <Cloud className="absolute bottom-24 -left-16 w-64 text-white/8" />
              <Sparkle className="absolute top-24 left-10 size-5 text-sunshine animate-twinkle" />
              <Sparkle className="absolute top-48 right-14 size-4 text-strawberry animate-twinkle [animation-delay:0.8s]" />
              <Sparkle className="absolute bottom-40 right-28 size-6 text-aqua animate-twinkle [animation-delay:1.4s]" />
            </div>

            <div className="relative flex h-full flex-col px-6 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-strawberry to-berry">
                    <Strawberry className="size-7" />
                  </span>
                  <span className="text-lg font-semibold text-cream">Strawberry Little Star</span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full border-2 border-white/20 p-3 text-cream transition-colors hover:border-strawberry hover:text-strawberry"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-10 flex flex-1 flex-col justify-center gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * index + 0.1, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-3xl px-4 py-3.5 text-3xl font-semibold transition-colors md:text-4xl",
                        pathname === item.href ? "bg-white/10 text-sunshine" : "text-cream/85 hover:text-white"
                      )}
                    >
                      {item.label}
                      <Sparkle className="size-4 text-strawberry" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <Link
                  href="/admissions"
                  className="block rounded-full bg-strawberry px-6 py-4 text-center text-base font-extrabold text-white shadow-candy"
                >
                  Book a Visit
                </Link>
                <div className="flex items-center justify-center gap-4 text-sm font-semibold text-cream/70">
                  <a href={`tel:${site.phones[0].replace(/\s+/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-sunshine">
                    <Phone className="size-4" /> Call now
                  </a>
                  <span aria-hidden="true">•</span>
                  <span>{site.hours}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
