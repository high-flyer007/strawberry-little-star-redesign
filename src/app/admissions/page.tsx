import type { Metadata } from "next";

import { AdmissionsPage } from "@/components/pages/admissions";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions are open for Playgroup, Nursery, LKG, and UKG at Strawberry Little Star Pre-Primary School. Call, WhatsApp, or visit the campus in Savedi, Ahmednagar.",
};

export default function Admissions() {
  return <AdmissionsPage />;
}
