import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock3, MapPin, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GalleryLightbox } from "@/components/marketing/gallery-lightbox";
import { HeroScene } from "@/components/marketing/hero-scene";
import { MagneticButton } from "@/components/marketing/magnetic-button";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import {
  admissionSteps,
  campusHighlights,
  dailyFlow,
  faqs,
  galleryItems,
  parentVoices,
  programs,
  site,
  stats,
  trustPillars,
} from "@/lib/site-data";

function HeroCluster() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-36">
      <div className="absolute inset-x-0 top-0 -z-20 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(255,182,193,0.55),transparent_38%),radial-gradient(circle_at_20%_30%,rgba(255,239,177,0.58),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(126,211,255,0.4),transparent_24%)]" />
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-80 max-w-6xl rounded-full bg-white/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div className="relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/72 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-stone-600 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
              <Sparkles className="size-4 text-rose-500" />
              Premium early learning in Savedi
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl text-6xl leading-[0.88] font-semibold tracking-[-0.06em] text-stone-950 md:text-8xl">
              Where little stars feel safe, seen, and inspired to shine.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
              Strawberry Little Star Pre-Primary School creates a warm first school journey for families in Ahilyanagar,
              blending care, play, creativity, and confident learning across Playgroup, Nursery, LKG, and UKG.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href="/admissions">Book a Visit</MagneticButton>
              <MagneticButton href="/campus" secondary className="border-stone-300/60 bg-white/56 text-stone-900">
                Explore Campus
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
              {[
                { label: "Programs", value: "Playgroup to UKG" },
                { label: "Hours", value: "10 AM - 1 PM" },
                { label: "Atmosphere", value: "Warm, joyful, trusted" },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.7rem] border border-white/60 bg-white/68 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-stone-900">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-[#091426] p-1 shadow-[0_30px_120px_rgba(12,16,36,0.18)]">
            <div className="relative h-[34rem] overflow-hidden rounded-[2rem] md:h-[42rem]">
              <HeroScene />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-[#091426] via-[#091426]/72 to-transparent p-6 text-white">
                <p className="text-xs uppercase tracking-[0.34em] text-white/60">An initiative of Samruddhi Women's Multipurpose Society</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/78">
                  <span className="inline-flex items-center gap-2"><MapPin className="size-4" /> Ahmednagar, Maharashtra</span>
                  <span className="inline-flex items-center gap-2"><Clock3 className="size-4" /> Monday to Saturday</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Why parents choose us"
            title="A preschool journey built around trust before anything else."
            body="Everything from the school environment to the short daily rhythm is designed to help children feel comfortable while helping parents feel confident in their decision."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trustPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06}>
              <article className="group h-full overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.82),rgba(255,244,237,0.66))] p-6 shadow-[0_24px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,111,125,0.16),rgba(255,209,102,0.26))] text-rose-500">
                  <Star className="size-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-stone-950">{pillar.title}</h3>
                <p className="mt-4 text-base leading-8 text-stone-600">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningStory() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div className="sticky top-28 rounded-[2.4rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.84),rgba(255,247,240,0.72))] p-8 shadow-[0_24px_100px_rgba(15,23,42,0.07)] backdrop-blur-2xl">
            <SectionHeading
              eyebrow="Learning philosophy"
              title="Structured enough to guide. Playful enough to feel magical."
              body="Young children learn best when routine, attention, and imagination coexist. The school day is crafted to support comfort, social growth, and early readiness through movement, expression, and repetition."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-stone-200 bg-white/72 p-5">
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-stone-950">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-stone-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="space-y-4">
          {dailyFlow.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className="flex gap-5 rounded-[2rem] border border-white/60 bg-white/76 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff909d,#ffd166)] text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-stone-950">{step.title}</h3>
                  <p className="mt-3 text-base leading-8 text-stone-600">{step.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramGrid() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Programs"
            title="Every stage receives the right mix of comfort, curiosity, and early readiness."
            body="From first-school comfort to confident pre-primary preparation, each program is shaped around the child's age and pace."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {programs.map((program, index) => (
            <Reveal key={program.name} delay={index * 0.06}>
              <article className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/78 p-7 shadow-[0_24px_90px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${program.color} opacity-55 blur-2xl`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">{program.age}</p>
                      <h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-stone-950">{program.name}</h3>
                    </div>
                    <div className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600">
                      Foundation
                    </div>
                  </div>
                  <p className="mt-5 max-w-xl text-base leading-8 text-stone-600">{program.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {program.highlights.map((highlight) => (
                      <span key={highlight} className="rounded-full border border-stone-200 bg-white/86 px-4 py-2 text-sm font-medium text-stone-700">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampusGalleryTeaser() {
  const [feature, portrait, event] = galleryItems;

  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/76 p-4 shadow-[0_24px_110px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[24rem] overflow-hidden rounded-[1.8rem]">
                <Image src={feature.src} alt={feature.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[11.3rem] overflow-hidden rounded-[1.8rem]">
                  <Image src={portrait.src} alt={portrait.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 20vw" />
                </div>
                <div className="relative min-h-[11.3rem] overflow-hidden rounded-[1.8rem]">
                  <Image src={event.src} alt={event.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 20vw" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex h-full flex-col justify-center">
            <SectionHeading
              eyebrow="Interactive campus"
              title="A school environment full of color, participation, and familiar warmth."
              body="The campus experience combines classroom activity, celebration, and community moments that help children feel connected from the beginning."
            />
            <div className="mt-8 space-y-4">
              {campusHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[1.5rem] border border-white/60 bg-white/70 p-4">
                  <CheckCircle2 className="mt-1 size-5 text-emerald-500" />
                  <p className="text-base leading-7 text-stone-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/campus" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-stone-950">
                Explore the campus story
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.8rem] border border-white/60 bg-[linear-gradient(145deg,rgba(14,20,38,0.96),rgba(34,40,75,0.94))] px-6 py-10 text-white shadow-[0_30px_120px_rgba(15,23,42,0.18)] md:px-10 md:py-14">
        <Reveal>
          <SectionHeading
            eyebrow="What families value"
            title="Parents are ultimately choosing peace of mind."
            body="These are the qualities families often look for when they search for a preschool that feels warm, reliable, and growth-focused."
            tone="light"
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {parentVoices.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl">
                <div className="flex gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4 fill-current" />
                  ))}
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/72">{item.quote}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="relative min-h-[28rem] overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/80 p-2 shadow-[0_24px_100px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="relative h-full overflow-hidden rounded-[1.8rem]">
              {/* <Image src="/images/strawberry-school/newspaper.jpeg" alt="Newspaper coverage" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" /> */}
              <Image
    src="/images/strawberry-school/achievement/achievement1.jpeg"
    alt="Strawberry Little Star achievement"
    width={700}
    height={2000}
    className="h-full w-full rounded-[2rem] object-cover"
  />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex h-full flex-col justify-center">
            <SectionHeading
              eyebrow="Achievements"
              title="Visible community presence creates trust that parents can actually feel."
              body="From public events to local recognition, the school already carries the signals families look for: participation, visibility, and an environment that feels alive."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Admissions open across four early-learning stages",
                "Community-backed school identity",
                "Event participation and annual celebrations",
                "Local recognition through newspaper coverage",
              ].map((item) => (
                <div key={item} className="rounded-[1.6rem] border border-white/60 bg-white/72 p-5 text-base leading-7 text-stone-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AdmissionsAndFaq() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="rounded-[2.4rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.84),rgba(255,247,240,0.76))] p-8 shadow-[0_24px_100px_rgba(15,23,42,0.06)] backdrop-blur-2xl">
            <SectionHeading
              eyebrow="Admission journey"
              title="A simple, reassuring path from first inquiry to first school day."
            />
            <div className="mt-8 space-y-4">
              {admissionSteps.map((step) => (
                <div key={step.step} className="flex gap-4 rounded-[1.6rem] border border-white/60 bg-white/70 p-4">
                  <div className="text-2xl font-semibold tracking-[-0.05em] text-rose-500">{step.step}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-950">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-stone-600">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[2.4rem] border border-white/60 bg-white/78 p-8 shadow-[0_24px_100px_rgba(15,23,42,0.06)] backdrop-blur-2xl">
            <SectionHeading eyebrow="FAQ" title="What parents usually ask first." />
            <Accordion type="single" collapsible className="mt-8 space-y-2">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="rounded-[1.4rem] border border-stone-200 bg-white/70 px-5">
                  <AccordionTrigger className="text-base font-semibold text-stone-950 hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base leading-8 text-stone-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.8rem] border border-white/60 bg-[linear-gradient(140deg,rgba(255,111,125,0.92),rgba(255,157,103,0.95),rgba(255,209,102,0.92))] px-6 py-10 text-white shadow-[0_30px_120px_rgba(255,111,125,0.24)] md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/70">Visit Strawberry Little Star</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] md:text-7xl">
              The best way to feel the difference is to see the school in person.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
              Call the school, plan a visit, and explore a preschool atmosphere built around comfort, participation, and early confidence.
            </p>
          </Reveal>

          <Reveal>
            <div className="space-y-4 rounded-[2rem] border border-white/20 bg-white/12 p-6 backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5" />
                <p className="text-base leading-7">{site.fullAddress}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 size-5" />
                <div className="text-base leading-7">
                  {site.phones.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 size-5" />
                <p className="text-base leading-7">{site.hours}</p>
              </div>
              <div className="pt-4">
                <MagneticButton href="/contact" secondary className="w-full justify-center border-white/30 bg-white/14 text-white">
                  Contact School
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-28 md:px-6 md:pb-16 md:pt-36">
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top,rgba(255,182,193,0.45),transparent_38%),radial-gradient(circle_at_18%_30%,rgba(255,239,177,0.42),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(126,211,255,0.35),transparent_18%)]" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-rose-500">{eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-6xl font-semibold leading-[0.9] tracking-[-0.06em] text-stone-950 md:text-8xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <HeroCluster />
      <WhyChooseSection />
      <LearningStory />
      <ProgramGrid />
      <CampusGalleryTeaser />
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery preview"
              title="Real moments from classrooms, celebrations, and the school's growing story."
              body="A premium website should still feel real. These images anchor the experience in actual student life and community presence."
            />
          </Reveal>
          <div className="mt-12">
            <GalleryLightbox items={galleryItems} />
          </div>
        </div>
      </section>
      <TestimonialSection />
      <AchievementSection />
      <AdmissionsAndFaq />
      <ContactStrip />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A local preschool shaped by care, community, and bright beginnings."
        body="Strawberry Little Star Pre-Primary School serves families in Savedi, Ahmednagar with a warm early-learning environment that balances comfort, participation, and foundational growth."
      />
      <section className="px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-[2.2rem] border border-white/60 bg-white/78 p-8 shadow-[0_24px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl">
              <SectionHeading
                eyebrow="Our story"
                title="Early childhood education that feels close to home."
                body="The school exists to give young children a joyful first step into structured learning while giving parents the reassurance of a caring, familiar environment."
              />
              <p className="mt-6 text-base leading-8 text-stone-600">
                Supported by Samruddhi Women's Multipurpose Society, the school reflects a mission that goes beyond classroom activity. It is about nurturing confidence, expression, and a sense of belonging during the most formative early years.
              </p>
            </div>
          </Reveal>
          <Reveal>
            {/* <div className="relative min-h-[30rem] overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/78 p-4 shadow-[0_24px_100px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="relative h-full overflow-hidden rounded-[1.8rem]">
                <Image src="/images/strawberry-school/classroom-session.jpeg" alt="Classroom session" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div> */}
            <div className="relative min-h-[30rem] overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/78 p-4 shadow-[0_24px_100px_rgba(15,23,42,0.08)] backdrop-blur-xl">
  <div className="relative h-full overflow-hidden rounded-[1.8rem]">

   <Image
    src="/images/strawberry-school/about/about-school.jpeg"
    alt="About Strawberry Little Star"
    width={900}
    height={700}
    className="w-full rounded-[1.8rem] object-cover"
    priority
  />

  </div>
</div>
          </Reveal>
        </div>
      </section>
      <LearningStory />
      <AchievementSection />
      <ContactStrip />
    </>
  );
}

export function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="From first comfort to school readiness, every stage gets a thoughtful start."
        body="The school's programs are designed to align with age, attention span, and early developmental needs so children can grow with confidence."
      />
      <ProgramGrid />
      <section className="px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-white/60 bg-white/78 p-8 shadow-[0_24px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <Reveal>
            <SectionHeading
              eyebrow="What children experience"
              title="The day blends rhythm, attention, movement, expression, and play."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dailyFlow.map((step) => (
              <Reveal key={step.title}>
                <div className="rounded-[1.6rem] border border-stone-200 bg-white/70 p-5">
                  <h3 className="text-xl font-semibold text-stone-950">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}

export function CampusPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus"
        title="An environment filled with activity, murals, celebrations, and familiar warmth."
        body="The school atmosphere is designed to feel colorful and engaging for children while staying reassuring and approachable for families."
      />
      <CampusGalleryTeaser />
      <section className="px-4 py-8 md:px-6 md:py-16">
  <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">

    {/* Campus Image 1 */}
    <Reveal delay={0}>
      <article className="rounded-[2rem] border border-white/60 bg-white/80 p-4 shadow-[0_20px_90px_rgba(15,23,42,0.06)] backdrop-blur-xl">
        <Image
          src="/images/strawberry-school/campus/campus1.jpeg"
          alt="Campus Image 1"
          width={900}
          height={650}
          className="h-[420px] w-full rounded-[1.6rem] object-cover transition-transform duration-500 hover:scale-105"
        />
      </article>
    </Reveal>

    {/* Campus Image 2 */}
    <Reveal delay={0.06}>
      <article className="rounded-[2rem] border border-white/60 bg-white/80 p-4 shadow-[0_20px_90px_rgba(15,23,42,0.06)] backdrop-blur-xl">
        <Image
          src="/images/strawberry-school/campus/campus2.jpeg"
          alt="Campus Image 2"
          width={900}
          height={650}
          className="h-[420px] w-full rounded-[1.6rem] object-cover transition-transform duration-500 hover:scale-105"
        />
      </article>
    </Reveal>

    {/* Campus Image 3 */}
    <Reveal delay={0.12}>
      <article className="rounded-[2rem] border border-white/60 bg-white/80 p-4 shadow-[0_20px_90px_rgba(15,23,42,0.06)] backdrop-blur-xl">
        <Image
          src="/images/strawberry-school/campus/campus3.jpeg"
          alt="Campus Image 3"
          width={900}
          height={650}
          className="h-[420px] w-full rounded-[1.6rem] object-cover transition-transform duration-500 hover:scale-105"
        />
      </article>
    </Reveal>

    {/* Campus Image 4 */}
    <Reveal delay={0.18}>
      <article className="rounded-[2rem] border border-white/60 bg-white/80 p-4 shadow-[0_20px_90px_rgba(15,23,42,0.06)] backdrop-blur-xl">
        <Image
          src="/images/strawberry-school/campus/campus4.jpeg"
          alt="Campus Image 4"
          width={900}
          height={650}
          className="h-[420px] w-full rounded-[1.6rem] object-cover transition-transform duration-500 hover:scale-105"
        />
      </article>
    </Reveal>

  </div>
</section>
      <ContactStrip />
    </>
  );
}

export function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual journey through classroom joy, performances, festivals, and community presence."
        body="These moments show the school's energy in a direct and honest way: children participating, celebrating, learning, and growing together."
      />
      <section className="px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <GalleryLightbox items={galleryItems} />
          </Reveal>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}

export function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="A confident first step starts with the right preschool environment."
        body="Admissions are open for Playgroup, Nursery, LKG, and UKG. Families can connect directly with the school to learn more, visit the campus, and complete enrollment."
      />
      <AdmissionsAndFaq />
      <section className="px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.92fr]">
          <Reveal>
            <div className="rounded-[2.4rem] border border-white/60 bg-white/78 p-8 shadow-[0_24px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl">
              <SectionHeading
                eyebrow="Admission open"
                title="Programs available across all pre-primary stages."
                body="Families can contact the school directly for current admission details, availability, and enrollment guidance."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {programs.map((program) => (
                  <div key={program.name} className="rounded-[1.6rem] border border-stone-200 bg-white/70 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">{program.age}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-stone-950">{program.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative min-h-[34rem] overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/80 p-4 shadow-[0_24px_100px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="relative h-full overflow-hidden rounded-[1.8rem]">
                <Image src="/images/strawberry-school/poster.jpeg" alt="Admission open poster" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}

export function ContactPage() {
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=Hello%20I%20would%20like%20to%20know%20more%20about%20Strawberry%20Little%20Star%20Pre-Primary%20School`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let the conversation begin with a visit, a call, or a WhatsApp message."
        body="Families can connect with Strawberry Little Star Pre-Primary School to ask questions, understand admissions, and experience the school atmosphere in person."
      />
      <section className="px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="space-y-5 rounded-[2.4rem] border border-white/60 bg-white/78 p-8 shadow-[0_24px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl">
              <div className="rounded-[1.7rem] border border-stone-200 bg-white/70 p-5">
                <div className="flex gap-3">
                  <MapPin className="mt-1 size-5 text-rose-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-stone-950">Address</h3>
                    <p className="mt-3 text-base leading-7 text-stone-600">{site.fullAddress}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.7rem] border border-stone-200 bg-white/70 p-5">
                <div className="flex gap-3">
                  <Phone className="mt-1 size-5 text-emerald-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-stone-950">Phone numbers</h3>
                    <div className="mt-3 space-y-1 text-base leading-7 text-stone-600">
                      {site.phones.map((phone) => (
                        <p key={phone}>{phone}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.7rem] border border-stone-200 bg-white/70 p-5">
                <div className="flex gap-3">
                  <Clock3 className="mt-1 size-5 text-sky-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-stone-950">School hours</h3>
                    <p className="mt-3 text-base leading-7 text-stone-600">{site.hours}</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full bg-stone-950 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white">
                  WhatsApp school
                </Link>
                <Link href={`tel:${site.phones[0].replace(/\s+/g, "")}`} className="rounded-full border border-stone-300 bg-white px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-stone-900">
                  Call now
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/80 p-4 shadow-[0_24px_100px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.8rem]">
                <iframe
                  title="Map to Strawberry Little Star Pre-Primary School"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
                  className="h-[36rem] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-white/60 bg-[linear-gradient(145deg,rgba(14,20,38,0.96),rgba(34,40,75,0.94))] p-8 text-white shadow-[0_24px_100px_rgba(15,23,42,0.16)] backdrop-blur-xl">
          <Reveal>
            <SectionHeading
              eyebrow="Trust signals"
              title="Clear communication matters as much as beautiful design."
              body="The website keeps key information visible and easy to use so families can move from inspiration to action without confusion."
              tone="light"
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { icon: ShieldCheck, text: "Real campus photos and event documentation" },
              { icon: Clock3, text: "Clear operating hours for daily planning" },
              { icon: Phone, text: "Direct phone and WhatsApp access for faster inquiry" },
            ].map((item) => (
              <Reveal key={item.text}>
                <div className="rounded-[1.7rem] border border-white/10 bg-white/8 p-5">
                  <item.icon className="size-5 text-amber-300" />
                  <p className="mt-4 text-base leading-7 text-white/74">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
