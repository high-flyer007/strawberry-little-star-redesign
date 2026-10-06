import Image from "next/image";

import { Sparkle, Star } from "@/components/decor/shapes";
import { Parallax } from "@/components/marketing/parallax";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { site, stats } from "@/lib/site-data";

/**
 * "Welcome to our little world" — layered photography, animated typography,
 * floating elements and the school's factual stat stickers.
 */
export function WelcomeStory() {
  return (
    <section className="relative px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Layered photography */}
        <div className="relative order-2 lg:order-1">
          <Parallax distance={40}>
            <div className="relative rotate-[-3deg] rounded-[2.5rem] border-[10px] border-white bg-white p-3 shadow-[0_40px_90px_-45px_rgba(38,53,74,0.5)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/images/strawberry-school/about/about-school.jpeg"
                  alt="Children busy with a classroom activity at Strawberry Little Star"
                  fill
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Parallax>

          <Parallax distance={-30} className="absolute -bottom-10 -right-2 w-44 md:w-56">
            <div className="rotate-[5deg] rounded-[1.8rem] border-[8px] border-white bg-white p-2 shadow-[0_30px_60px_-30px_rgba(38,53,74,0.55)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/strawberry-school/classroom-session.jpeg"
                  alt="Children seated in a joyful classroom session with colorful wall art"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
          </Parallax>

          <Star className="absolute -top-6 -left-3 size-7 text-sunshine animate-twinkle" />
          <Sparkle className="absolute top-1/3 -right-4 size-5 text-strawberry animate-twinkle [animation-delay:1.2s]" />
        </div>

        {/* Story */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="Welcome to our little world"
              title="A safe place where curiosity grows every single day."
              body="Strawberry Little Star Pre-Primary School is a warm, joyful first school journey for families in Ahilyanagar — where care, play, creativity, and confident learning come together for Playgroup, Nursery, LKG, and UKG children."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-navy/70">
              Supported by Samruddhi Women&apos;s Multipurpose Society, the school is built around a simple belief: young
              children thrive when routine, attention, and imagination live side by side. From the morning circle to
              gentle goodbyes, every day is shaped to help children feel comfortable while helping parents feel
              confident.
            </p>
          </Reveal>

          {/* Factual stat stickers */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.08 * index}>
                <div
                  className="h-full rounded-3xl border border-navy/8 bg-white p-4 text-center shadow-[0_20px_44px_-28px_rgba(38,53,74,0.45)]"
                  style={{ transform: `rotate(${index % 2 === 0 ? -1.5 : 1.5}deg)` }}
                >
                  <p className="text-4xl font-semibold text-strawberry">{stat.value}</p>
                  <p className="mt-1.5 text-xs font-bold leading-5 text-navy/65">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
