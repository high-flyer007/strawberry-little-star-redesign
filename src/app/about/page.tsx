import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Strawberry Little Star Pre-Primary School in Savedi, Ahmednagar — an initiative of Samruddhi Women's Multipurpose Society offering a warm early-learning environment for Playgroup, Nursery, LKG, and UKG.",
};

export default function About() {
  return <AboutPage />;
}
