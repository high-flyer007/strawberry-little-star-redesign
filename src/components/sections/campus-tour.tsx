import Image from "next/image";

import { Sparkle } from "@/components/decor/shapes";
import { Parallax } from "@/components/marketing/parallax";
import { Reveal } from "@/components/marketing/reveal";
import { campusHighlights, galleryItems } from "@/lib/site-data";

const tour = [
  { src: "/images/strawberry-school/campus/campus1.jpeg", caption: campusHighlights[0], align: "left" },
  { src: "/images/strawberry-school/campus/campus2.jpeg", caption: campusHighlights[1], align: "right" },
  { src: "/images/strawberry-school/campus/campus3.jpeg", caption: campusHighlights[2], align: "left" },
  { src: "/images/strawberry-school/campus/campus4.jpeg", caption: campusHighlights[3], align: "right" },
  { src: galleryItems[0].src, caption: galleryItems[0].caption, align: "left" },
  { src: galleryItems[1].src, caption: galleryItems[1].caption, align: "right" },
];

/**
 * Immersive editorial walk through the campus — real photography with
 * parallax, reveal animations, and floating caption cards.
 */
export function CampusTour() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl space-y-14 md:space-y-24">
        {tour.map((shot, index) => {
          const isLeft = shot.align === "left";
          return (
            <div key={shot.src} className="relative grid gap-6 md:grid-cols-12 md:items-center">
              <Reveal
                className={`md:col-span-7 ${isLeft ? "md:col-start-1" : "md:col-start-6"} md:row-start-1`}
                y={60}
              >
                <Parallax distance={26}>
                  <div className="group relative overflow-hidden rounded-[2.5rem] border-[10px] border-white shadow-[0_40px_90px_-45px_rgba(38,53,74,0.55)]">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={shot.src}
                        alt={`Strawberry Little Star campus — ${shot.caption}`}
                        fill
                        sizes="(max-width: 768px) 92vw, 54vw"
                        className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Parallax>
              </Reveal>

              <Reveal
                className={`md:col-span-5 ${isLeft ? "md:col-start-8" : "md:col-start-1"} md:row-start-1`}
                delay={0.12}
              >
                <div
                  className="relative rounded-[1.8rem] border border-navy/8 bg-white p-5 shadow-[0_26px_60px_-34px_rgba(38,53,74,0.5)] md:p-6"
                  style={{ transform: `rotate(${isLeft ? 2 : -2}deg)` }}
                >
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-berry">
                    Campus moment {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2.5 text-xl leading-7 font-semibold text-navy md:text-2xl">{shot.caption}</p>
                  <Sparkle className="absolute -top-3 -right-3 size-5 text-sunshine animate-twinkle" />
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
