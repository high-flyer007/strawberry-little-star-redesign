import Image from "next/image";
import { Quote } from "lucide-react";

import { Sparkle, Strawberry } from "@/components/decor/shapes";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaStrip } from "@/components/sections/cta-strip";
import { DailyRhythm } from "@/components/sections/daily-rhythm";
import { PageHero } from "@/components/sections/page-hero";
import { TrustPillars } from "@/components/sections/trust-pillars";
import { parentVoices } from "@/lib/site-data";

const communitySignals = [
  "Admissions open across four early-learning stages",
  "Community-backed school identity",
  "Event participation and annual celebrations",
  "Local recognition through newspaper coverage",
];

function WhoWeAre() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-[2.4rem] border border-navy/8 bg-white p-7 shadow-[0_30px_70px_-40px_rgba(38,53,74,0.5)] md:p-9">
            <SectionHeading
              eyebrow="Who we are"
              title="Early childhood education that feels close to home."
              body="The school exists to give young children a joyful first step into structured learning while giving parents the reassurance of a caring, familiar environment."
            />
            <p className="mt-6 text-base leading-8 text-navy/70">
              Supported by Samruddhi Women&apos;s Multipurpose Society, the school reflects a mission that goes beyond
              classroom activity. It is about nurturing confidence, expression, and a sense of belonging during the most
              formative early years.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-sunshine/25 p-4">
              <Strawberry className="w-8 shrink-0" />
              <p className="text-sm font-bold leading-6 text-navy">An initiative of Samruddhi Women&apos;s Multipurpose Society</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="rotate-[-2deg] overflow-hidden rounded-[2.4rem] border-[10px] border-white shadow-[0_40px_90px_-45px_rgba(38,53,74,0.5)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/strawberry-school/about/about-school.jpeg"
                  alt="Children taking part in a classroom activity at Strawberry Little Star"
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover"
                />
              </div>
            </div>
            <Sparkle className="absolute -top-4 right-10 size-6 text-sunshine animate-twinkle" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CommunityMoments() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.4rem] border-[10px] border-white shadow-[0_40px_90px_-45px_rgba(38,53,74,0.5)]">
            <div className="relative aspect-[4/5] max-h-[34rem]">
              <Image
                src="/images/strawberry-school/achievement/achievement1.jpeg"
                alt="Strawberry Little Star school achievement feature"
                fill
                sizes="(max-width: 1024px) 92vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Our presence"
              title="Visible community presence builds trust parents can feel."
              body="From public events to local recognition, the school already carries the signals families look for: participation, visibility, and an environment that feels alive."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {communitySignals.map((signal, index) => (
              <Reveal key={signal} delay={index * 0.07}>
                <div className="h-full rounded-2xl border border-navy/8 bg-white p-5 text-base leading-7 font-semibold text-navy/75 shadow-[0_20px_46px_-30px_rgba(38,53,74,0.5)]">
                  {signal}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-navy/8 bg-cream p-4">
              <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/images/strawberry-school/newspaper.jpeg"
                  alt="Newspaper coverage featuring the school's community activity"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <p className="text-sm leading-6 font-semibold text-navy/70">
                Local newspaper coverage of the school&apos;s community activity.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FamiliesValue() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[3rem] bg-navy px-6 py-12 text-white shadow-[0_40px_100px_-50px_rgba(38,53,74,0.9)] md:px-12 md:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="What families value"
            title="Parents are ultimately choosing peace of mind."
            body="These are the qualities families often look for when they search for a preschool that feels warm, reliable, and growth-focused."
            tone="light"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {parentVoices.map((voice, index) => (
            <Reveal key={voice.title} delay={index * 0.08}>
              <article className="h-full rounded-[2rem] border border-white/12 bg-white/8 p-6">
                <Quote className="size-7 text-sunshine" />
                <h3 className="mt-5 text-2xl font-semibold">{voice.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/72">{voice.quote}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A local preschool shaped by care, community, and bright beginnings."
        body="Strawberry Little Star Pre-Primary School serves families in Savedi, Ahmednagar with a warm early-learning environment that balances comfort, participation, and foundational growth."
        accent="lavender"
      />
      <WhoWeAre />
      <TrustPillars />
      <CommunityMoments />
      <DailyRhythm />
      <FamiliesValue />
      <CtaStrip />
    </>
  );
}
