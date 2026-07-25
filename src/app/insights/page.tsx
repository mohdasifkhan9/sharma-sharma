import type { Metadata } from "next";
import { articles } from "@/data/insights";
import { InsightsClient } from "@/components/insights-client";
import { site } from "@/lib/site";
import { getLegalServiceSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "IP Insights & Legal Commentary | Intellectual Property Jurisprudence",
  description:
    "Expert legal perspectives, statutory commentary, and practical guidance on Indian trademark law, copyright protection, Madrid Protocol, and IP litigation.",
  alternates: {
    canonical: `${site.url}/insights`,
  },
  openGraph: {
    title: "IP Insights | Sharma & Sharma Legal Commentary",
    description:
      "Statutory analysis and practical legal guidance on intellectual property prosecution, enforcement, and trademark jurisprudence in India.",
    url: `${site.url}/insights`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IP Insights | Sharma & Sharma Legal Commentary",
    description:
      "Expert commentary on Indian trademark law, copyright protection, design registration, and High Court IP litigation.",
  },
};

export default function InsightsPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma IP Insights & Publications",
    description: "Legal analysis and publications on Indian intellectual property law and practice.",
    url: `${site.url}/insights`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "IP Insights & Analysis", url: `${site.url}/insights` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InsightsClient articles={articles} />
    </>
  );
}
