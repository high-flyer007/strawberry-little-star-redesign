import type { Metadata } from "next";

import { CampusPage } from "@/components/pages/campus";

export const metadata: Metadata = {
  title: "Campus",
  description:
    "Walk through the Strawberry Little Star campus in Savedi, Ahmednagar — bright activity-led classrooms, wall murals, festive celebrations, and a familiar local environment.",
};

export default function Campus() {
  return <CampusPage />;
}
