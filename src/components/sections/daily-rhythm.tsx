import { BookOpen, MessageCircle, Palette, Smile, Sun, Users } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { dailyFlow } from "@/lib/site-data";

const icons = [Sun, MessageCircle, BookOpen, Palette, Users, Smile];
const accents = ["#ffd85c", "#67c7f5", "#ff5c8a", "#b8a7f8", "#8ed8b5", "#ff9f68"];

/**
 * "A day at Strawberry Little Star" — the six factual steps of the school day.
 */
export function DailyRhythm() {
  return (
    <section className="relative px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="A day at our school"
            title="Small days, beautifully rhythmed."
            body="Short, focused hours filled with welcome, circle time, creative learning, expression, play, and a gentle close."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dailyFlow.map((step, index) => {
            const Icon = icons[index % icons.length];
            const accent = accents[index % accents.length];
            return (
              <Reveal key={step.title} delay={index * 0.06}>
                <article
                  className="group relative h-full overflow-hidden rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_24px_60px_-36px_rgba(38,53,74,0.5)] transition-transform duration-500 hover:-translate-y-1.5"
                  style={{ transform: `rotate(${index % 2 === 0 ? -0.8 : 0.8}deg)` }}
                >
                  <span
                    className="absolute -top-10 -right-10 size-28 rounded-full opacity-25 transition-transform duration-700 group-hover:scale-150"
                    style={{ backgroundColor: accent }}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center gap-4">
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-2xl text-navy"
                      style={{ backgroundColor: `${accent}55` }}
                    >
                      <Icon className="size-6" />
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-navy/45">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative mt-5 text-2xl font-semibold text-navy">{step.title}</h3>
                  <p className="relative mt-2.5 text-base leading-7 text-navy/65">{step.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
