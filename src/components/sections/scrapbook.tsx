import { GalleryLightbox } from "@/components/marketing/gallery-lightbox";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { galleryItems, type GalleryItem } from "@/lib/site-data";

/**
 * Scrapbook gallery section — reused by the homepage preview and the gallery page.
 */
export function Scrapbook({
  eyebrow = "School scrapbook",
  title = "Real moments from classrooms, celebrations, and the school's growing story.",
  body = "Every photograph here is a real moment from school life — classrooms, festivals, stage performances, and community presence.",
  items = galleryItems,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  items?: GalleryItem[];
}) {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading align="center" eyebrow={eyebrow} title={title} body={body} />
        </Reveal>
        <div className="mt-12">
          <GalleryLightbox items={items} />
        </div>
      </div>
    </section>
  );
}
