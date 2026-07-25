import { site } from "@/lib/site";

export interface FAQItemSchema {
  q: string;
  a: string;
}

export interface BreadcrumbItemSchema {
  name: string;
  url: string;
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: site.legalName,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/insights?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}/media/Logo.png`,
    image: `${site.url}/media/Lawyer's_desk_Delhi_heritage.jpeg`,
    description: site.description,
    foundingDate: site.since,
    telephone: site.phones[0],
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      postalCode: site.address.postal,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.209,
    },
    areaServed: ["United States", "India", "European Union", "United Kingdom", "Worldwide"],
    sameAs: [
      "https://ipmark.in",
    ],
  };
}

export function getLegalServiceSchema({
  name,
  description,
  url,
  knowsAbout,
}: {
  name: string;
  description: string;
  url: string;
  knowsAbout?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name,
    url,
    logo: `${site.url}/media/Logo.png`,
    description,
    telephone: site.phones[0],
    email: site.email,
    foundingDate: site.since,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      postalCode: site.address.postal,
      addressCountry: "IN",
    },
    areaServed: ["United States", "India", "European Union", "United Kingdom", "Worldwide"],
    knowsAbout: knowsAbout || [
      "Indian Intellectual Property Law",
      "Trademark Registration India",
      "WIPO Madrid Protocol Filings",
      "Delhi High Court IP Practice",
    ],
  };
}

export function getFAQSchema(faqs: FAQItemSchema[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItemSchema[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceSchema({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    provider: {
      "@type": "LegalService",
      name: site.legalName,
      url: site.url,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function getArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = "Sharma & Sharma Legal Editorial Team",
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: image || `${site.url}/media/Lawyer's_desk_Delhi_heritage.jpeg`,
    datePublished: datePublished || "2026-01-01T08:00:00+05:30",
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: authorName,
      url: site.url,
    },
    publisher: {
      "@type": "LegalService",
      name: site.legalName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/media/Logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function getPersonSchema({
  name,
  jobTitle,
  worksFor,
  url,
}: {
  name: string;
  jobTitle: string;
  worksFor?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    worksFor: {
      "@type": "LegalService",
      name: worksFor || site.legalName,
      url: site.url,
    },
    url: url || site.url,
  };
}
