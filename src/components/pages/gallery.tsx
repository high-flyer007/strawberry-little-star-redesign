import { CtaStrip } from "@/components/sections/cta-strip";
import { PageHero } from "@/components/sections/page-hero";
import { Scrapbook } from "@/components/sections/scrapbook";

export function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual journey through classroom joy, performances, festivals, and community presence."
        body="These moments show the school's energy in a direct and honest way: children participating, celebrating, learning, and growing together."
        accent="sunshine"
      />
      <Scrapbook
        eyebrow="School scrapbook"
        title="Pinned straight from the school album."
        body="Tap any photo to open it full size. Every image is a real Strawberry Little Star moment — no stock photography."
      />
      <CtaStrip />
    </>
  );
}
