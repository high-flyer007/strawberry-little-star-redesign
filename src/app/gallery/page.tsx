import type { Metadata } from "next";

import { GalleryPage } from "@/components/pages/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Real moments from Strawberry Little Star Pre-Primary School — classrooms, celebrations, festivals, performances, and community presence.",
};

export default function Gallery() {
  return <GalleryPage />;
}
