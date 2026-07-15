import Link from "next/link";
import { navItems, services, site } from "@/lib/site";
import { Marquee } from "@/components/ui/interactive";
import { Monogram } from "@/components/ui/monogram";

export function Footer() {
  const marqueeItems = services.map(s => {
    if (s === "Trademark Registration") return "Trademark";
    if (s === "Copyright Registration") return "Copyright";
    if (s === "Design Registration") return "Design";
    if (s === "Trademark Monitoring") return "Monitoring";
    if (s === "IP Litigation") return "Litigation";
    if (s === "Legal Advisory") return "Advisory";
    return s;
  }).filter(s => 
    ["Trademark", "Copyright", "Design", "International Filing", "Monitoring", "Litigation", "Licensing", "Advisory"].includes(s)
  );

  return (
    <footer className="relative overflow-hidden bg-navy text-cream">
      <div className="border-b border-cream/10 py-4">
        <Marquee items={marqueeItems} />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="mb-6 select-none">
              <img
                src="/media/Logo.png"
                alt="Sharma & Sharma Intellectual Property Law"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-cream/60">
              {site.description}
            </p>
          </div>

          <div>
            <p className="overline text-cream/40">Navigate</p>
            <ul className="mt-6 space-y-3">
              {navItems.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline text-sm text-cream/80">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="overline text-cream/40">Expertise</p>
            <ul className="mt-6 space-y-3">
              {services.slice(0, 7).map((s) => (
                <li key={s} className="text-sm text-cream/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="overline text-cream/40">Contact</p>
            <address className="mt-6 space-y-4 not-italic text-sm text-cream/70">
              <p>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city} {site.address.postal}, {site.address.country}
              </p>
              <a href={`mailto:${site.email}`} className="link-underline block">
                {site.email}
              </a>
              <div>
                {site.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="block hover:text-gold">
                    {p}
                  </a>
                ))}
              </div>
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cream">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-cream">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
