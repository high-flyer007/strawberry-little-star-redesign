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
      <p className={cn("mb-4 text-xs font-semibold uppercase tracking-[0.34em]", tone === "light" ? "text-white/70" : "text-rose-500")}>{eyebrow}</p>
      <h2 className={cn("max-w-3xl text-4xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-6xl", tone === "light" ? "text-white" : "text-stone-950")}>
        {title}
      </h2>
      {body ? <p className={cn("mt-6 max-w-2xl text-base leading-8 md:text-lg", tone === "light" ? "text-white/72" : "text-stone-600")}>{body}</p> : null}
    </div>
  );
}
