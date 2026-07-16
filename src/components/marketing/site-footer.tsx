import Link from "next/link";
import { MapPin, Phone, Sparkles } from "lucide-react";

import { navigation, site, socialLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden px-4 pb-6 pt-24 md:px-6">
      <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_center,rgba(255,111,125,0.14),transparent_62%)]" />
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(255,248,241,0.78))] px-6 py-10 shadow-[0_30px_120px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff6f7d,#ffd166)] text-white shadow-[0_12px_30px_rgba(255,111,125,0.45)]">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">Premium Preschool</p>
                <h3 className="text-xl font-semibold text-stone-950">{site.shortName}</h3>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600">
              A warm early-learning environment in Savedi, Ahmednagar designed to help children feel safe, expressive,
              and excited to grow.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-950 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">Explore</p>
            <div className="mt-5 space-y-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="block text-stone-700 transition-colors hover:text-rose-500">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">Visit & contact</p>
            <div className="rounded-[1.75rem] border border-stone-200 bg-white/70 p-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 size-5 text-rose-500" />
                <div className="text-sm leading-7 text-stone-600">
                  <p>{site.addressLine1}</p>
                  <p>{site.addressLine2}</p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-stone-200 bg-white/70 p-5">
              <div className="flex gap-3">
                <Phone className="mt-1 size-5 text-emerald-500" />
                <div className="text-sm leading-7 text-stone-600">
                  {site.phones.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                  <p>{site.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
