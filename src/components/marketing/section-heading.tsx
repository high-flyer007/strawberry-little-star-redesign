import { Sparkle } from "@/components/decor/shapes";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({ eyebrow, title, body, align = "left", className, tone = "dark" }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em]",
          tone === "light"
            ? "border-white/25 bg-white/10 text-sunshine"
            : "border-sunshine/60 bg-sunshine/25 text-navy"
        )}
      >
        <Sparkle className="size-3.5 text-strawberry" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "max-w-3xl text-4xl leading-[1.02] font-semibold md:text-6xl",
          tone === "light" ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-8 md:text-lg",
            tone === "light" ? "text-white/75" : "text-navy/70"
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
