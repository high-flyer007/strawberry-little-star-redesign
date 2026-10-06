import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { admissionSteps } from "@/lib/site-data";

/**
 * The four documented admission steps as a playful progression.
 */
export function AdmissionSteps() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Admission journey"
            title="A simple, reassuring path from first inquiry to first school day."
          />
        </Reveal>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {admissionSteps.map((step, index) => (
            <li key={step.step} className="h-full">
              <Reveal delay={index * 0.07} className="h-full">
                <article
                  className="relative h-full rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_26px_60px_-36px_rgba(38,53,74,0.5)] transition-transform duration-500 hover:-translate-y-1.5"
                  style={{ transform: `rotate(${index % 2 === 0 ? -1.2 : 1.2}deg)` }}
                >
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-sunshine/50 text-2xl font-semibold text-navy">
                    {step.step}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-navy/65">{step.body}</p>
                  {index < admissionSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute -right-4 top-1/2 hidden text-2xl text-strawberry xl:block"
                    >
                      →
                    </span>
                  ) : null}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
