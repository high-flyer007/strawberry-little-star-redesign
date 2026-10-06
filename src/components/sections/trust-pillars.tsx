import { Heart, Sparkles, Sun, Users } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { trustPillars } from "@/lib/site-data";

const icons = [Heart, Sparkles, Users, Sun];
const accents = [
  { bg: "bg-strawberry/12", text: "text-strawberry" },
  { bg: "bg-sunshine/30", text: "text-berry" },
  { bg: "bg-aqua/20", text: "text-aqua" },
  { bg: "bg-mint/25", text: "text-mint" },
];

export function TrustPillars() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why families choose us"
            title="Trust first. Everything else follows."
            body="Everything from the school environment to the short daily rhythm is designed to help children feel comfortable while helping parents feel confident in their decision."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {trustPillars.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            const accent = accents[index % accents.length];
            return (
              <Reveal key={pillar.title} delay={index * 0.07}>
                <article
                  className="group h-full rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_24px_60px_-34px_rgba(38,53,74,0.5)] transition-transform duration-500 hover:-translate-y-1.5"
                  style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                >
                  <span
                    className={`flex size-14 items-center justify-center rounded-2xl ${accent.bg} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <Icon className={`size-7 ${accent.text}`} />
                  </span>
                  <h3 className="mt-6 text-2xl leading-tight font-semibold text-navy">{pillar.title}</h3>
                  <p className="mt-3 text-base leading-7 text-navy/65">{pillar.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
