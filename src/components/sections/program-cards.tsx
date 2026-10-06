import { Baby, BookOpen, Rocket, Star } from "lucide-react";

import { Sparkle } from "@/components/decor/shapes";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TiltCard } from "@/components/marketing/tilt-card";
import { programs, site } from "@/lib/site-data";

const icons = [Baby, Star, BookOpen, Rocket];

function whatsappFor(programName: string) {
  const text = `Hello, I would like to know more about the ${programName} program at Strawberry Little Star Pre-Primary School.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Four storybook-object program cards with hover tilt and inquiry CTAs.
 */
export function ProgramCards() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Our programs"
            title="Four storybook chapters of early learning."
            body="Each program is shaped around the child's age, attention span, and early developmental needs."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {programs.map((program, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={program.name} delay={index * 0.08} className="h-full">
                <TiltCard className="h-full" max={7}>
                  <article
                    className="relative flex h-full flex-col overflow-hidden rounded-[2.4rem] border border-navy/8 bg-white p-7 shadow-[0_30px_70px_-40px_rgba(38,53,74,0.55)] md:p-8"
                  >
                    <span
                      className="absolute -top-24 -right-24 size-64 rounded-full opacity-30 blur-2xl"
                      style={{ backgroundColor: program.color }}
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -bottom-28 -left-20 size-56 rounded-full opacity-20 blur-2xl"
                      style={{ backgroundColor: program.color }}
                      aria-hidden="true"
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <span
                        className="flex size-16 items-center justify-center rounded-[1.4rem] text-navy shadow-[0_16px_34px_-18px_rgba(38,53,74,0.7)]"
                        style={{ backgroundColor: program.color }}
                      >
                        <Icon className="size-8" />
                      </span>
                      <span className="rounded-full border border-navy/10 bg-cream px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-navy/70">
                        {program.age}
                      </span>
                    </div>

                    <h3 className="relative mt-6 text-4xl font-semibold text-navy md:text-5xl">{program.name}</h3>
                    <p className="relative mt-4 text-base leading-7 text-navy/65">{program.description}</p>

                    <div className="relative mt-5 flex flex-wrap gap-2.5">
                      {program.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full px-3.5 py-1.5 text-sm font-bold text-navy/80"
                          style={{ backgroundColor: `${program.color}2e` }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="relative mt-auto pt-7">
                      <a
                        href={whatsappFor(program.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-extrabold text-cream transition-colors duration-300 hover:bg-strawberry"
                      >
                        Ask about {program.name}
                        <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                      </a>
                    </div>

                    <Sparkle className="absolute top-7 right-20 size-4 text-sunshine opacity-70" />
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
