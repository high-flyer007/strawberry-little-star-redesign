import { Clock3, MapPin, Phone } from "lucide-react";

import { Cloud, Sparkle, Strawberry, Star } from "@/components/decor/shapes";
import { MagneticButton } from "@/components/marketing/magnetic-button";
import { Reveal } from "@/components/marketing/reveal";
import { site } from "@/lib/site-data";

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=Hello%20I%20would%20like%20to%20know%20more%20about%20admissions%20for%20Strawberry%20Little%20Star%20Pre-Primary%20School`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

/**
 * Closing call-to-action band — the "come visit us" moment.
 */
export function CtaStrip() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[linear-gradient(135deg,#ff5c8a_0%,#ff8f7d_55%,#ffd85c_100%)] px-6 py-12 text-white shadow-[0_40px_100px_-45px_rgba(233,75,106,0.9)] md:px-12 md:py-16">
        {/* Decor */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Cloud className="absolute -top-6 right-10 w-44 text-white/25 animate-float-slow" />
          <Cloud className="absolute -bottom-8 left-6 w-52 text-white/20 animate-float" />
          <Star className="absolute top-8 left-[42%] size-6 text-white/70 animate-twinkle" />
          <Sparkle className="absolute bottom-10 right-[30%] size-5 text-white/80 animate-twinkle [animation-delay:1s]" />
          <Strawberry className="absolute -right-4 -bottom-6 w-28 rotate-12 opacity-90 md:w-36" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/80">
              Visit Strawberry Little Star
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl leading-[1.03] font-semibold md:text-6xl">
              The best way to feel the difference is to see the school in person.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">
              Call the school, plan a visit, and explore a preschool atmosphere built around comfort, participation,
              and early confidence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href={`tel:${site.phones[0].replace(/\s+/g, "")}`} className="bg-navy text-cream hover:bg-navy/90">
                Call the School
              </MagneticButton>
              <MagneticButton href={whatsappHref} target="_blank" secondary className="border-white/50 bg-white/15 text-white">
                WhatsApp Us
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-4 rounded-[2rem] border border-white/30 bg-white/18 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0" />
                <p className="text-base leading-7">{site.fullAddress}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0" />
                <div className="text-base leading-7">
                  {site.phones.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 size-5 shrink-0" />
                <p className="text-base leading-7">{site.hours}</p>
              </div>
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-navy transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
