import type { Metadata } from "next";

import { ProgramsPage } from "@/components/pages/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Playgroup, Nursery, LKG, and UKG programs at Strawberry Little Star Pre-Primary School — age-appropriate early learning designed around comfort, curiosity, and school readiness.",
};

export default function Programs() {
  return <ProgramsPage />;
}
