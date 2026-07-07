import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Cursor } from "@/components/ui/cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/loading-screen";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline} Since ${site.since}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "trademark registration India",
    "copyright registration",
    "design registration",
    "IP law firm Delhi",
    "intellectual property attorneys",
    "brand protection",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.legalName,
  description: site.description,
  foundingDate: site.since,
  url: site.url,
  email: site.email,
  telephone: site.phones,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    postalCode: site.address.postal,
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="cursor-none-desktop">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <LoadingScreen />
        <Cursor />
        <ScrollProgress />
        <SmoothScroll>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
