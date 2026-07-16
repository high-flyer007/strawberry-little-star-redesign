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
  metadataBase: new URL("https://strawberry-little-star.ideavo.app"),
  title: `${site.name} | ${site.title}`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/images/strawberry-school/classroom-session.jpeg"],
  },
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
