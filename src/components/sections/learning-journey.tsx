"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Heart, Rocket, Star } from "lucide-react";

import { Sparkle } from "@/components/decor/shapes";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { programs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const icons = [Heart, Star, BookOpen, Rocket];

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * The Playgroup → Nursery → LKG → UKG journey with a scroll-drawn path.
 */
export function LearningJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    const section = sectionRef.current;

    if (!path || !section) return;

    if (prefersReducedMotion()) {
      path.style.strokeDasharray = "none";
      path.style.strokeDashoffset = "0";
      return;
    }

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 62%",
        end: "bottom 78%",
        scrub: 0.7,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="The learning journey"
            title="Four little steps that grow with your child."
            body="From a gentle first day to confident school readiness, each stage is shaped around the child's age and pace."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* Scroll-drawn path (desktop) */}
          <svg
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 hidden h-full w-28 -translate-x-1/2 md:block"
          >
            <path
              d="M50 0 C 92 140, 8 280, 50 430 S 92 720, 50 1000"
              fill="none"
              stroke="#ffd85c"
              strokeWidth="5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              ref={pathRef}
              d="M50 0 C 92 140, 8 280, 50 430 S 92 720, 50 1000"
              fill="none"
              stroke="#ff5c8a"
              strokeWidth="5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="space-y-8 md:space-y-16">
            {programs.map((program, index) => {
              const Icon = icons[index % icons.length];
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={program.name}
                  className={cn("relative flex md:w-[calc(50%-2.5rem)]", isLeft ? "md:mr-auto md:justify-end" : "md:ml-auto")}
                >
                  <Reveal delay={0.05} y={50} className="w-full">
                    <article
                      className="group relative overflow-hidden rounded-[2.2rem] border border-navy/8 bg-white p-6 shadow-[0_28px_70px_-40px_rgba(38,53,74,0.55)] transition-transform duration-500 hover:-translate-y-1.5 md:p-7"
                      style={{ transform: `rotate(${isLeft ? -1 : 1}deg)` }}
                    >
                      <span
                        className="absolute inset-x-0 top-0 h-28 opacity-30"
                        style={{ background: `linear-gradient(135deg, ${program.color}, transparent)` }}
                        aria-hidden="true"
                      />

                      <div className="relative flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span
                            className="flex size-14 shrink-0 items-center justify-center rounded-2xl text-navy shadow-[0_14px_30px_-16px_rgba(38,53,74,0.6)] transition-transform duration-500 group-hover:-rotate-8"
                            style={{ backgroundColor: program.color }}
                          >
                            <Icon className="size-7" />
                          </span>
                          <div>
                            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-navy/55">
                              {program.age}
                            </p>
                            <h3 className="text-3xl font-semibold text-navy md:text-4xl">{program.name}</h3>
                          </div>
                        </div>
                        <span
                          className="rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-navy"
                          style={{ backgroundColor: `${program.color}33` }}
                        >
                          Stage {index + 1}
                        </span>
                      </div>

                      <p className="relative mt-4 text-base leading-7 text-navy/65">{program.description}</p>

                      <div className="relative mt-5 flex flex-wrap gap-2">
                        {program.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full border border-navy/10 bg-cream px-3.5 py-1.5 text-sm font-bold text-navy/75"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <Sparkle className="absolute right-5 bottom-5 size-4 text-sunshine opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                    </article>
                  </Reveal>

                  {/* Stage dot on the path */}
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 hidden size-5 -translate-y-1/2 rounded-full border-4 border-white shadow-md md:block"
                    style={{
                      backgroundColor: program.color,
                      left: isLeft ? "calc(100% + 1.875rem)" : "calc(-3.125rem)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
