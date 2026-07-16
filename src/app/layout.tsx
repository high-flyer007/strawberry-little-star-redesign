import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";

import { LenisProvider } from "@/components/marketing/lenis-provider";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { site } from "@/lib/site-data";

import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://strawberry-little-star-school.vercel.app/"),

  title: {
    default: "Strawberry Little Star Pre-Primary School | Ahmednagar",
    template: "%s | Strawberry Little Star",
  },

  description:
    "Strawberry Little Star Pre-Primary School in Ahmednagar offers Playgroup, Nursery, LKG, and UKG with a safe, joyful, and nurturing learning environment for young children.",

  keywords: [
    "Strawberry Little Star",
    "Pre Primary School Ahmednagar",
    "Nursery School",
    "Playgroup",
    "LKG",
    "UKG",
    "Best Preschool Ahmednagar",
    "Kids School",
    "Kindergarten Ahmednagar",
    "Early Learning",
  ],

  authors: [
    {
      name: "Strawberry Little Star Pre-Primary School",
    },
  ],

  creator: "Strawberry Little Star",

  publisher: "Strawberry Little Star",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://strawberry-little-star-school.vercel.app",
    title: "Strawberry Little Star Pre-Primary School",
    description:
      "A trusted preschool in Ahmednagar providing Playgroup, Nursery, LKG and UKG education with a warm and caring environment.",

    siteName: "Strawberry Little Star",

    images: [
      {
        url: "/images/strawberry-school/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Strawberry Little Star School",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Strawberry Little Star Pre-Primary School",
    description:
      "Safe • Joyful • Creative learning for Playgroup, Nursery, LKG & UKG.",

    images: ["/images/strawberry-school/hero.jpeg"],
  },

  alternates: {
    canonical: "https://strawberry-little-star-school.vercel.app",
  },

  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} bg-background font-sans text-foreground antialiased`}>
        <LenisProvider>
          <div className="relative min-h-screen overflow-x-clip">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </LenisProvider>
        {/* WARNING FOR AGENT: DO NOT REMOVE THIS SCRIPT */}
        <Script src="https://cdn.jsdelivr.net/gh/IdeavoAI/ideavo-scripts@latest/scripts/ideavo.min.js" />
      </body>
    </html>
  );
}
