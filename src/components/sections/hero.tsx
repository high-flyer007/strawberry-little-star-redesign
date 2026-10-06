"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock3, MapPin } from "lucide-react";

import { Cloud, Sparkle, Strawberry, Sun, Star } from "@/components/decor/shapes";
import { MagneticButton } from "@/components/marketing/magnetic-button";
import { site } from "@/lib/site-data";

const HEADLINE = "Where little stars feel safe, seen, and inspired to shine.";

const facts = [
  { label: "Programs", value: "Playgroup to UKG" },
  { label: "Hours", value: "10 AM – 1 PM" },
  { label: "Where", value: "Savedi, Ahmednagar" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pt-28 pb-14 md:px-6 md:pt-36 md:pb-20">
      {/* Sky */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[46rem] bg-[radial-gradient(circle_at_15%_10%,rgba(255,216,92,0.35),transparent_38%),radial-gradient(circle_at_85%_8%,rgba(103,199,245,0.32),transparent_36%),radial-gradient(circle_at_55%_45%,rgba(255,92,138,0.16),transparent_42%)]" />

      {/* Floating sky life */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="absolute top-36 left-[4%] w-36 text-white animate-float-slow md:w-48"
        >
          <Cloud />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.45 }}
          className="absolute top-24 right-[6%] w-40 text-white animate-float md:w-56"
        >
          <Cloud />
        </motion.div>
        <div className="absolute top-40 right-[26%] hidden w-16 text-sunshine animate-float-fast md:block lg:w-20">
          <Sun />
        </div>
        <Sparkle className="absolute top-56 left-[30%] size-5 text-strawberry animate-twinkle" />
        <Sparkle className="absolute bottom-32 left-[12%] size-4 text-lavender animate-twinkle [animation-delay:1.1s]" />
        <Sparkle className="absolute top-[26rem] right-[14%] size-4 text-aqua animate-twinkle [animation-delay:0.6s]" />
        <Star className="absolute bottom-40 right-[38%] size-5 text-sunshine animate-twinkle [animation-delay:1.7s]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: -12 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute bottom-24 left-[8%] w-12 animate-float-fast md:w-16"
        >
          <Strawberry />
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-sunshine/70 bg-sunshine/30 px-4 py-2 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-navy"
          >
            <Sparkle className="size-3.5 text-strawberry" />
            Premium early learning in Savedi
          </motion.span>

          <h1 className="mt-6 max-w-4xl text-[2.65rem] leading-[1.02] font-semibold tracking-[-0.02em] text-navy sm:text-6xl lg:text-7xl">
            {HEADLINE.split(" ").map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={item}
                className={`mr-[0.25em] inline-block ${word === "shine." ? "relative text-strawberry" : ""}`}
              >
                {word}
                {word === "shine." ? (
                  <svg
                    viewBox="0 0 120 14"
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 h-3 w-full text-sunshine"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  >
                    <path d="M4 9 C 30 2, 60 12, 116 5" />
                  </svg>
                ) : null}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={item} className="mt-7 max-w-2xl text-lg leading-8 text-navy/72 md:text-xl">
            Strawberry Little Star Pre-Primary School creates a warm first school journey for families in Ahilyanagar,
            blending care, play, creativity, and confident learning across Playgroup, Nursery, LKG, and UKG.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MagneticButton href="/programs">Explore Our School</MagneticButton>
            <MagneticButton href="/admissions" secondary className="border-navy/15 bg-white text-navy">
              Start the Journey
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            {facts.map((fact) => (
              <span
                key={fact.label}
                className="rounded-2xl border border-navy/8 bg-white/85 px-4 py-2.5 shadow-[0_14px_34px_-20px_rgba(38,53,74,0.4)]"
              >
                <span className="block text-[0.6rem] font-extrabold uppercase tracking-[0.22em] text-berry">
                  {fact.label}
                </span>
                <span className="mt-0.5 block text-sm font-bold text-navy">{fact.value}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo collage */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto max-w-xl lg:max-w-none">
            {/* Main photo */}
            <div className="blob-mask relative aspect-[4/4.4] overflow-hidden border-[10px] border-white shadow-[0_40px_90px_-40px_rgba(38,53,74,0.55)] sm:aspect-[4/3.6]">
              <Image
                src="/images/strawberry-school/hero.jpeg"
                alt="Children learning together in a bright Strawberry Little Star classroom"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
            </div>

            {/* Polaroid accent */}
            <div className="absolute -bottom-8 -left-4 w-32 rotate-[-7deg] rounded-2xl border-[6px] border-white bg-white p-1.5 shadow-[0_24px_50px_-24px_rgba(38,53,74,0.55)] animate-float md:w-40">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/strawberry-school/christmas.jpeg"
                  alt="Children celebrating together in festive outfits"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Admissions sticker */}
            <Link
              href="/admissions"
              className="absolute -top-5 -right-2 rotate-[10deg] rounded-full bg-sunshine px-5 py-3 text-sm font-extrabold text-navy shadow-[0_18px_40px_-18px_rgba(255,216,92,0.9)] transition-transform duration-300 hover:rotate-0 md:-right-6"
            >
              Admissions Open ✦
            </Link>

            {/* Society chip */}
            <div className="absolute -bottom-10 right-2 max-w-[15rem] rounded-3xl border border-navy/8 bg-white/95 p-4 shadow-[0_24px_50px_-26px_rgba(38,53,74,0.5)] md:right-0">
              <div className="flex items-start gap-3 text-sm font-semibold text-navy/75">
                <MapPin className="mt-0.5 size-4 shrink-0 text-strawberry" />
                <span>{site.addressLine1}</span>
              </div>
              <div className="mt-2 flex items-start gap-3 text-sm font-semibold text-navy/75">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-aqua" />
                <span>Monday to Saturday</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
