import { CtaStrip } from "@/components/sections/cta-strip";
import { DailyRhythm } from "@/components/sections/daily-rhythm";
import { PageHero } from "@/components/sections/page-hero";
import { ProgramCards } from "@/components/sections/program-cards";
import { Scrapbook } from "@/components/sections/scrapbook";

export function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="From first comfort to school readiness, every stage gets a thoughtful start."
        body="The school's programs are designed to align with age, attention span, and early developmental needs so children can grow with confidence."
        accent="aqua"
      />
      <ProgramCards />
      <DailyRhythm />
      <Scrapbook
        eyebrow="Program life"
        title="What the days actually look like."
        body="Classroom sessions, celebrations, and stage moments from across Playgroup, Nursery, LKG, and UKG."
        items={[
          {
            src: "/images/strawberry-school/classroom-session.jpeg",
            alt: "Children seated in a classroom activity session with colorful wall art.",
            title: "Joyful classroom rhythm",
            caption: "Focused group learning in a bright, mural-filled classroom.",
            span: "md:col-span-2 md:row-span-2",
          },
          {
            src: "/images/strawberry-school/annual-function.jpeg",
            alt: "Annual function stage moment at Strawberry Little Star Pre-Primary School.",
            title: "Annual function spotlight",
            caption: "Public speaking, confidence, and celebration on stage.",
          },
          {
            src: "/images/strawberry-school/christmas.jpeg",
            alt: "Children in festive Christmas outfits celebrating together.",
            title: "Festivals with delight",
            caption: "Seasonal celebrations that create warm childhood memories.",
          },
          {
            src: "/images/strawberry-school/poster.jpeg",
            alt: "Admissions poster for Strawberry Little Star Pre-Primary School.",
            title: "Admissions now open",
            caption: "Programs available across Playgroup, Nursery, LKG, and UKG.",
          },
        ]}
      />
      <CtaStrip />
    </>
  );
}
