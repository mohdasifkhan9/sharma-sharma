import { Section } from "@/components/layout/section";
import { SectionLabel } from "@/components/ui/reveal";

export type LegalSection = { h: string; p: string[] };

export function LegalLayout({
  label,
  title,
  updated,
  sections,
}: {
  label: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="px-5 pb-10 pt-36 md:px-10 md:pb-14 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] text-navy">
            {title}
          </h1>
          <p className="mt-6 text-sm text-muted">Last updated: {updated}</p>
        </div>
      </header>

      <Section className="!pt-4">
        <div className="mx-auto max-w-3xl space-y-12">
          {sections.map((s, i) => (
            <div key={s.h}>
              <h2 className="flex items-baseline gap-4 font-serif text-2xl text-navy md:text-3xl">
                <span className="text-base text-gold">{String(i + 1).padStart(2, "0")}</span>
                {s.h}
              </h2>
              <div className="mt-4 space-y-4 border-l border-line pl-6">
                {s.p.map((para, j) => (
                  <p key={j} className="text-[15px] leading-relaxed text-muted">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
