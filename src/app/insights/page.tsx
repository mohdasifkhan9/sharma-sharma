import type { Metadata } from "next";
import { articles } from "@/data/insights";
import { InsightsClient } from "@/components/insights-client";
import { site } from "@/lib/site";
import { getLegalServiceSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "IP & Trademark Insights | Sharma & Sharma | IPMARK",
  description:
    "Insights on trademarks, copyrights, designs, patents, IP laws in India. Sharma & Sharma shares expert legal updates and guidance for businesses worldwide.",
  alternates: {
    canonical: `${site.url}/insights`,
  },
  openGraph: {
    title: "IP & Trademark Insights | Sharma & Sharma | IPMARK",
    description:
      "Insights on trademarks, copyrights, designs, patents, IP laws in India. Sharma & Sharma shares expert legal updates and guidance for businesses worldwide.",
    url: `${site.url}/insights`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IP & Trademark Insights | Sharma & Sharma | IPMARK",
    description:
      "Insights on trademarks, copyrights, designs, patents, IP laws in India. Sharma & Sharma shares expert legal updates and guidance for businesses worldwide.",
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
