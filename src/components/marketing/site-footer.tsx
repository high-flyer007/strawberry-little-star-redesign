import Link from "next/link";
import { Clock3, MapPin, Phone } from "lucide-react";

import { Cloud, Sparkle, Star, Strawberry, WaveDivider } from "@/components/decor/shapes";
import { navigation, site, socialLinks } from "@/lib/site-data";

const twinkles = [
  { className: "top-16 left-[8%] size-4 text-sunshine", delay: "0s" },
  { className: "top-28 left-[38%] size-3 text-white", delay: "0.9s" },
  { className: "top-12 right-[18%] size-5 text-strawberry", delay: "1.6s" },
  { className: "top-56 right-[8%] size-3 text-aqua", delay: "0.4s" },
  { className: "bottom-40 left-[22%] size-3 text-white/80", delay: "1.2s" },
  { className: "bottom-24 right-[34%] size-4 text-lavender", delay: "2s" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <WaveDivider fill="#26354a" />

      <div className="relative overflow-hidden bg-navy px-4 pt-10 pb-8 text-cream md:px-6 md:pt-14">
        {/* Night sky decorations */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Cloud className="absolute top-10 -left-12 w-52 text-white/6" />
          <Cloud className="absolute top-48 -right-16 w-64 text-white/5" />
          <Star className="absolute right-[12%] top-8 size-6 text-sunshine animate-twinkle" />
          {twinkles.map((item) => (
            <Sparkle key={item.className} className={`absolute ${item.className} animate-twinkle`} />
          ))}
          <span className="absolute left-1/2 top-6 hidden -translate-x-1/2 text-cream/25 md:block" style={{ animationDelay: "0.5s" }}>
            <Strawberry className="w-10 animate-float-slow" />
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Closing headline */}
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-sunshine">
              <Sparkle className="size-3.5" /> Until tomorrow
            </p>
            <h2 className="mt-5 text-4xl leading-tight font-semibold text-white md:text-6xl">
              Keep Shining, <span className="text-strawberry">Little Star</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-cream/70">
              Thank you for visiting our little world. Come see the classrooms, meet the atmosphere, and imagine your
              child&apos;s first school days here.
            </p>
          </div>

          <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-strawberry to-berry">
                  <Strawberry className="size-7" />
                </span>
                <div>
                  <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.26em] text-strawberry">
                    Pre-Primary School
                  </p>
                  <h3 className="text-xl font-semibold text-white">{site.shortName}</h3>
                </div>
              </div>

              <p className="mt-5 max-w-md text-base leading-7 text-cream/70">
                A warm early-learning home in Savedi, Ahmednagar where children feel safe, expressive, and excited to
                grow — across Playgroup, Nursery, LKG, and UKG.
              </p>

              <p className="mt-4 text-sm font-semibold text-cream/55">{site.society}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-bold text-cream transition-colors hover:border-strawberry hover:bg-strawberry hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <nav aria-label="Footer">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-sunshine">Explore</p>
              <div className="mt-5 space-y-2.5">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block w-fit rounded-full px-3 -mx-3 py-1 text-cream/75 transition-colors hover:text-strawberry"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-sunshine">Visit &amp; contact</p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 rounded-3xl border border-white/10 bg-white/6 p-4 transition-colors hover:border-aqua/60"
              >
                <MapPin className="mt-0.5 size-5 shrink-0 text-aqua" />
                <span className="text-sm leading-6 text-cream/75">
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
                </span>
              </a>

              <div className="flex gap-3 rounded-3xl border border-white/10 bg-white/6 p-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-mint" />
                <div className="text-sm leading-6 text-cream/75">
                  {site.phones.map((phone) => (
                    <p key={phone}>
                      <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-strawberry">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 rounded-3xl border border-white/10 bg-white/6 p-4">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-sunshine" />
                <p className="text-sm leading-6 text-cream/75">{site.hours}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-cream/55 md:flex-row">
            <p>© {year} {site.name}. All rights reserved.</p>
            <p>{site.society}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
