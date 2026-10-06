import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, WhatsApp, or visit Strawberry Little Star Pre-Primary School at House No. 58, Mahesh Colony, Bhutkarwadi, Savedi, Ahmednagar. Open Monday to Saturday, 10:00 AM to 1:00 PM.",
};

export default function Contact() {
  return <ContactPage />;
}
