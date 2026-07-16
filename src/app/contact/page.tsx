import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionLabel } from "@/components/ui/reveal";
import { MediaFrame } from "@/components/ui/media";
import { ConsultationForm } from "@/components/consultation-form";
import { site } from "@/lib/site";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description:
    "Book a consultation with Sharma & Sharma. Visit our Tis Hazari Courts, Delhi office or reach our IP counsel by phone and email.",
};

const details = [
  {
    icon: MapPin,
    label: "Office",
    lines: [
      site.address.line1,
      site.address.line2,
      `${site.address.city} ${site.address.postal}, ${site.address.country}`,
    ],
  },
  { icon: Mail, label: "Email", lines: [site.email] },
  { icon: Phone, label: "Telephone", lines: site.phones },
  { icon: Clock, label: "Hours", lines: ["Mon – Sat", "10:00 – 18:00 IST"] },
];

export default function ContactPage() {
  return (
    <>
      <header className="px-5 pb-10 pt-36 md:px-10 md:pb-16 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)] text-navy">
            Let&apos;s protect what you&apos;ve built.
          </h1>
        </div>
      </header>

      <Section className="!pt-4">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="grid grid-cols-2 gap-8">
              {details.map((d) => (
                <div key={d.label}>
                  <div className="flex items-center gap-2 text-gold">
                    <d.icon className="h-4 w-4" />
                    <span className="overline">{d.label}</span>
                  </div>
                  <div className="mt-3 space-y-1 text-[15px] text-navy">
                    {d.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <MediaFrame
                src={media.architecture[0]}
                alt="Sharma & Sharma office"
                sizes="(max-width:768px) 100vw, 45vw"
                className="aspect-[16/11] w-full"
              />
            </div>

            <div className="mt-4 overflow-hidden rounded-[4px] border border-line">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=466+Western+Wing+Tis+Hazari+Courts+Delhi+110006&output=embed"
                className="h-64 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-[4px] border border-line bg-paper p-8 md:p-12">
            <h2 className="font-serif text-3xl text-navy">Book a consultation</h2>
            <p className="mt-2 text-sm text-muted">
              Share a few details and our counsel will respond within one business day.
            </p>
            <div className="mt-10">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
