import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Cloud, Sparkle } from "@/components/decor/shapes";
import { Parallax } from "@/components/marketing/parallax";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { campusHighlights, galleryItems } from "@/lib/site-data";

/**
 * Editorial campus collage teaser — real school photography with parallax.
 */
export function CampusTeaser() {
  const [feature, event, moment] = galleryItems;

  return (
    <section className="relative px-4 py-16 md:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-8 flex justify-between px-6" aria-hidden="true">
        <Cloud className="w-32 text-white animate-float-slow md:w-44" />
        <Cloud className="mt-16 w-28 text-white animate-float md:w-40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Photo collage */}
        <div className="relative">
          <Parallax distance={36}>
            <div className="relative overflow-hidden rounded-[2.4rem] border-[10px] border-white shadow-[0_40px_90px_-45px_rgba(38,53,74,0.5)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </Parallax>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <Parallax distance={-22}>
              <div className="rotate-[-3deg] overflow-hidden rounded-[1.8rem] border-[8px] border-white shadow-[0_28px_60px_-32px_rgba(38,53,74,0.5)]">
                <div className="relative aspect-[4/3]">
                  <Image src={event.src} alt={event.alt} fill sizes="280px" className="object-cover" />
                </div>
              </div>
            </Parallax>
            <Parallax distance={-40}>
              <div className="rotate-[3deg] overflow-hidden rounded-[1.8rem] border-[8px] border-white shadow-[0_28px_60px_-32px_rgba(38,53,74,0.5)]">
                <div className="relative aspect-[4/3]">
                  <Image src={moment.src} alt={moment.alt} fill sizes="280px" className="object-cover" />
                </div>
              </div>
            </Parallax>
          </div>

          <Sparkle className="absolute -top-5 right-8 size-6 text-sunshine animate-twinkle" />
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Our campus"
              title="A school environment full of color, participation, and familiar warmth."
              body="The campus experience combines classroom activity, celebration, and community moments that help children feel connected from the very first day."
            />
          </Reveal>

          <div className="mt-8 space-y-3.5">
            {campusHighlights.map((item, index) => (
              <Reveal key={item} delay={0.06 * index}>
                <div className="flex items-start gap-3 rounded-2xl border border-navy/8 bg-white/90 p-4 shadow-[0_18px_44px_-30px_rgba(38,53,74,0.5)]">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-mint" />
                  <p className="text-base leading-7 text-navy/70">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Link
              href="/campus"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-extrabold text-cream transition-colors hover:bg-strawberry"
            >
              Walk through the campus
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
