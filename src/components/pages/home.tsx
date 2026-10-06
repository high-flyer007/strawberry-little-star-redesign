import { AdmissionSteps } from "@/components/sections/admission-steps";
import { CampusTeaser } from "@/components/sections/campus-teaser";
import { CtaStrip } from "@/components/sections/cta-strip";
import { DailyRhythm } from "@/components/sections/daily-rhythm";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { LearningJourney } from "@/components/sections/learning-journey";
import { Scrapbook } from "@/components/sections/scrapbook";
import { TrustPillars } from "@/components/sections/trust-pillars";
import { WelcomeStory } from "@/components/sections/welcome-story";
import { Reveal } from "@/components/marketing/reveal";

export function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeStory />
      <TrustPillars />
      <LearningJourney />
      <DailyRhythm />
      <CampusTeaser />
      <Scrapbook />
      <AdmissionSteps />
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
