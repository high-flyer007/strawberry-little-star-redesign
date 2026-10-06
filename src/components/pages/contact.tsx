import { Clock3, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { site } from "@/lib/site-data";

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hello, I would like to know more about Strawberry Little Star Pre-Primary School."
)}`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
const telHref = `tel:${site.phones[0].replace(/\s+/g, "")}`;

const cards = [
  {
    icon: Phone,
    title: "Call us",
    detail: site.phones.join("  •  "),
    href: telHref,
    action: "Tap to call",
    accent: "bg-strawberry/15 text-strawberry",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Message the school directly for admissions and questions.",
    href: whatsappHref,
    action: "Open chat",
    accent: "bg-mint/30 text-mint",
    external: true,
  },
  {
    icon: Clock3,
    title: "School hours",
    detail: site.hours,
    action: "Plan your visit",
    accent: "bg-sunshine/40 text-berry",
  },
  {
    icon: MapPin,
    title: "Get directions",
    detail: site.fullAddress,
    href: mapsHref,
    action: "Open in Google Maps",
    accent: "bg-aqua/25 text-aqua",
    external: true,
  },
];

const trustSignals = [
  { icon: ShieldCheck, text: "Real campus photos and event documentation" },
  { icon: Clock3, text: "Clear operating hours for daily planning" },
  { icon: Phone, text: "Direct phone and WhatsApp access for faster inquiry" },
];

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let the conversation begin with a visit, a call, or a WhatsApp message."
        body="Families can connect with Strawberry Little Star Pre-Primary School to ask questions, understand admissions, and experience the school atmosphere in person."
        accent="sunshine"
      />

      {/* Contact cards */}
      <section className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const inner = (
              <>
                <span className={`flex size-12 items-center justify-center rounded-2xl ${card.accent}`}>
                  <card.icon className="size-6" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-navy">{card.title}</h2>
                <p className="mt-2 text-base leading-7 text-navy/65">{card.detail}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-strawberry">
                  {card.action}
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </>
            );

            return (
              <Reveal key={card.title} delay={index * 0.07} className="h-full">
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noreferrer" : undefined}
                    className="group flex h-full flex-col rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_26px_60px_-36px_rgba(38,53,74,0.5)] transition-transform duration-500 hover:-translate-y-1.5"
                    style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    className="group flex h-full flex-col rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_26px_60px_-36px_rgba(38,53,74,0.5)]"
                    style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                  >
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Map + details */}
      <section className="px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="h-full rounded-[2.4rem] border border-navy/8 bg-white p-7 shadow-[0_30px_70px_-40px_rgba(38,53,74,0.5)] md:p-9">
              <SectionHeading
                eyebrow="Find us"
                title="Savedi, Ahmednagar — easy to reach, warm to walk into."
              />
              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-berry">Address</p>
                  <p className="mt-2 text-base leading-7 font-semibold text-navy/80">{site.fullAddress}</p>
                </div>
                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-berry">Phone</p>
                  <div className="mt-2 space-y-1 text-base leading-7 font-semibold text-navy/80">
                    {site.phones.map((phone) => (
                      <p key={phone}>
                        <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-strawberry">
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-berry">Hours</p>
                  <p className="mt-2 text-base leading-7 font-semibold text-navy/80">{site.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2.4rem] border-[10px] border-white bg-white p-2 shadow-[0_40px_90px_-45px_rgba(38,53,74,0.5)]">
              <div className="overflow-hidden rounded-[1.8rem]">
                <iframe
                  title="Map to Strawberry Little Star Pre-Primary School"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
                  className="h-[26rem] w-full border-0 lg:h-[32rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust signals */}
      <section className="px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-navy px-6 py-12 text-white shadow-[0_40px_100px_-50px_rgba(38,53,74,0.9)] md:px-12 md:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Clear communication"
              title="Everything you need, one message away."
              body="The website keeps key information visible and easy to use so families can move from inspiration to action without confusion."
              tone="light"
            />
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {trustSignals.map((signal, index) => (
              <Reveal key={signal.text} delay={index * 0.08}>
                <div className="h-full rounded-[1.7rem] border border-white/12 bg-white/8 p-5">
                  <signal.icon className="size-6 text-sunshine" />
                  <p className="mt-4 text-base leading-7 text-white/75">{signal.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
