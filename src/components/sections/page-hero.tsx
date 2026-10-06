import { Cloud, Sparkle, Star } from "@/components/decor/shapes";
import { Reveal } from "@/components/marketing/reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  accent?: "strawberry" | "aqua" | "sunshine" | "mint" | "lavender";
};

const accents = {
  strawberry: "text-strawberry",
  aqua: "text-aqua",
  sunshine: "text-berry",
  mint: "text-mint",
  lavender: "text-lavender",
};

/**
 * Shared inner-page hero with playful sky decorations.
 */
export function PageHero({ eyebrow, title, body, accent = "strawberry" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-8 md:px-6 md:pt-40 md:pb-12">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <Cloud className="absolute top-28 left-[6%] w-32 text-white animate-float-slow md:w-44" />
        <Cloud className="absolute top-44 right-[8%] w-36 text-white animate-float md:w-48" />
        <Sparkle className={cn("absolute top-40 left-[38%] size-5 animate-twinkle", accents[accent])} />
        <Star className="absolute top-60 right-[30%] size-5 text-sunshine animate-twinkle [animation-delay:1.1s]" />
        <Sparkle className="absolute bottom-6 left-[20%] size-4 text-lavender animate-twinkle [animation-delay:0.5s]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-sunshine/70 bg-sunshine/30 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-navy">
            <Sparkle className="size-3.5 text-strawberry" />
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl leading-[1.03] font-semibold text-navy md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-navy/70 md:text-xl">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
