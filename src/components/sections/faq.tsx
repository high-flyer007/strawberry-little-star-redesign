"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { faqs } from "@/lib/site-data";

/**
 * FAQ built on the existing shadcn accordion with the site's factual questions.
 */
export function Faq() {
  return (
    <div className="rounded-[2.4rem] border border-navy/8 bg-white p-6 shadow-[0_30px_70px_-40px_rgba(38,53,74,0.5)] md:p-8">
      <Reveal>
        <SectionHeading eyebrow="FAQ" title="What parents usually ask first." />
      </Reveal>
      <Accordion type="single" collapsible className="mt-7 space-y-3">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.question}
            value={faq.question}
            className="rounded-2xl border border-navy/10 bg-cream px-5"
          >
            <AccordionTrigger className="py-5 text-base font-bold text-navy hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-7 text-navy/65">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
