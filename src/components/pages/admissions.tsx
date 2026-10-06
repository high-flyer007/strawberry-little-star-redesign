import Image from "next/image";
import Link from "next/link";

import { Sparkle } from "@/components/decor/shapes";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { AdmissionSteps } from "@/components/sections/admission-steps";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Faq } from "@/components/sections/faq";
import { PageHero } from "@/components/sections/page-hero";
import { programs, site } from "@/lib/site-data";

function ProgramsOpen() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <div className="rounded-[2.4rem] border border-navy/8 bg-white p-7 shadow-[0_30px_70px_-40px_rgba(38,53,74,0.5)] md:p-9">
            <SectionHeading
              eyebrow="Admissions open"
              title="Programs available across all pre-primary stages."
              body="Families can contact the school directly for current admission details, availability, and enrollment guidance."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {programs.map((program) => (
                <Link
                  key={program.name}
                  href="/programs"
                  className="group rounded-2xl border border-navy/8 bg-cream p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span
                    className="mb-3 flex size-10 items-center justify-center rounded-xl text-sm font-extrabold text-navy"
                    style={{ backgroundColor: `${program.color}55` }}
                  >
                    ✦
                  </span>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-navy/55">{program.age}</p>
                  <h3 className="mt-1.5 text-2xl font-semibold text-navy transition-colors group-hover:text-strawberry">
                    {program.name}
                  </h3>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`tel:${site.phones[0].replace(/\s+/g, "")}`}
                className="rounded-full bg-strawberry px-6 py-3.5 text-sm font-extrabold text-white shadow-candy transition-transform hover:-translate-y-0.5"
              >
                Call for admissions
              </Link>
              <Link
                href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to know more about admissions at Strawberry Little Star Pre-Primary School.")}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-navy/15 bg-white px-6 py-3.5 text-sm font-extrabold text-navy transition-colors hover:border-navy/40"
              >
                WhatsApp the school
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative rounded-[2.4rem] border-[10px] border-white bg-white p-2 shadow-[0_40px_90px_-45px_rgba(38,53,74,0.5)]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem]">
              <Image
                src="/images/strawberry-school/admissions/admission-poster.jpeg"
                alt="Admissions open poster for Strawberry Little Star Pre-Primary School"
                fill
                sizes="(max-width: 1024px) 92vw, 40vw"
                className="object-cover"
              />
            </div>
            <Sparkle className="absolute -top-4 -left-4 size-6 text-sunshine animate-twinkle" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="A confident first step starts with the right preschool environment."
        body="Admissions are open for Playgroup, Nursery, LKG, and UKG. Families can connect directly with the school to learn more, visit the campus, and complete enrollment."
        accent="strawberry"
      />
      <AdmissionSteps />
      <ProgramsOpen />
      <section className="px-4 py-10 md:px-6 md:py-16">
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
