export const site = {
  name: "Sharma & Sharma",
  legalName: "Sharma & Sharma Intellectual Property Attorneys",
  tagline: "Intellectual Property Law",
  since: "1972",
  description:
    "Sharma & Sharma is one of India's established Intellectual Property law firms — safeguarding trademarks, copyrights, designs and global brand portfolios since 1972.",
  url: "https://sharmaandsharma.example",
  email: "info@reservemark.com",
  phones: ["+91-11-45143161", "+91-11-23934967"],
  address: {
    line1: "236, Chandni Chowk",
    line2: "Fatehpuri",
    city: "Delhi",
    postal: "110006",
    country: "India",
  },
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Trademark", href: "/trademark" },
  { label: "Copyright", href: "/copyright" },
  { label: "Design", href: "/design-registration" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const practiceAreas = [
  {
    slug: "trademark",
    index: "01",
    title: "Trademark Registration",
    blurb:
      "From availability search to registration and renewal — securing the marks that define your brand.",
    href: "/trademark",
  },
  {
    slug: "copyright",
    index: "02",
    title: "Copyright Registration",
    blurb:
      "Protecting original works of authorship — literary, artistic, musical and software.",
    href: "/copyright",
  },
  {
    slug: "design",
    index: "03",
    title: "Design Registration",
    blurb:
      "Guarding the aesthetic and configuration of industrial products and packaging.",
    href: "/design-registration",
  },
  {
    slug: "international",
    index: "04",
    title: "International Filing",
    blurb:
      "Madrid Protocol and national filings across 150+ jurisdictions worldwide.",
    href: "/services",
  },
  {
    slug: "monitoring",
    index: "05",
    title: "Trademark Monitoring",
    blurb:
      "Continuous surveillance of registries and marketplaces to detect infringement early.",
    href: "/services",
  },
  {
    slug: "litigation",
    index: "06",
    title: "IP Litigation",
    blurb:
      "Opposition, enforcement and litigation to defend your rights with conviction.",
    href: "/services",
  },
] as const;

export const services = [
  "Trademark Registration",
  "Copyright Registration",
  "Design Registration",
  "International Filing",
  "IP Portfolio Management",
  "Trademark Monitoring",
  "Trademark Opposition",
  "Brand Enforcement",
  "Licensing",
  "IP Litigation",
  "Legal Advisory",
] as const;
