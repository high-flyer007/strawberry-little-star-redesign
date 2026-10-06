import { CtaStrip } from "@/components/sections/cta-strip";
import { CampusTour } from "@/components/sections/campus-tour";
import { PageHero } from "@/components/sections/page-hero";
import { Scrapbook } from "@/components/sections/scrapbook";

export function CampusPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus"
        title="An environment filled with activity, murals, celebrations, and familiar warmth."
        body="The school atmosphere is designed to feel colorful and engaging for children while staying reassuring and approachable for families."
        accent="mint"
      />
      <CampusTour />
      <Scrapbook
        eyebrow="Around the campus"
        title="Celebrations, milestones, and everyday joy."
        body="A moving scrapbook of real school moments — the energy, the colors, and the community around the campus."
      />
      <CtaStrip />
    </>
  );
}
