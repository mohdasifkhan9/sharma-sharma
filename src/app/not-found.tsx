import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scale, Compass, PhoneCall } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "404 – Page Not Found | Sharma & Sharma",
  description: "The requested legal page or resource could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};

const importantServices = [
  {
    title: "Trademark Registration",
    desc: "Comprehensive brand protection, search, filing, and opposition defense across all 45 Nice classes.",
    href: "/trademark",
    icon: ShieldCheck,
  },
  {
    title: "Copyright Registration",
    desc: "Statutory protection for software source code, literary, artistic, and musical creations.",
    href: "/copyright",
    icon: Scale,
  },
  {
    title: "Design Registration",
    desc: "Protection for product shapes, packaging, and industrial design under Locarno classification.",
    href: "/design-registration",
    icon: Compass,
  },
  {
    title: "WIPO Madrid Protocol",
    desc: "International portfolio extension across 150+ member jurisdictions from an Indian origin filing.",
    href: "/madrid-protocol-india",
    icon: PhoneCall,
  },
];

export default function NotFound() {
  return (
    <section className="relative w-full bg-cream pt-36 md:pt-48 pb-24 px-5 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        {/* HERO ERROR BLOCK */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="overline inline-block text-gold text-xs font-mono tracking-[0.3em] uppercase bg-gold/10 px-4 py-1.5 rounded-full mb-6">
            Error 404
          </span>
          <h1 className="font-serif text-[clamp(2.8rem,7vw,6.5rem)] text-navy leading-[1.05] tracking-tight">
            404 – Page Not Found
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted font-light leading-relaxed max-w-xl mx-auto">
            The legal resource or page you are looking for has moved, been renamed, or does not exist. Let us guide you back to protected ground.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-navy hover:bg-navy-soft text-cream px-8 py-4 text-xs font-sans tracking-[0.2em] uppercase rounded-[2px] transition-colors duration-300 shadow-sm"
            >
              Return to Homepage
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-navy/5 text-navy border border-navy/30 hover:border-navy px-8 py-4 text-xs font-sans tracking-[0.2em] uppercase rounded-[2px] transition-colors duration-300"
            >
              Contact Counsel
            </Link>
          </div>
        </div>

        {/* IMPORTANT SERVICES SECTION */}
        <div className="mt-24 pt-16 border-t border-line/60">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-gold uppercase tracking-[0.2em]">Recommended Navigation</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2">Explore Our Key IP Practice Areas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-paper border border-line/70 p-8 rounded-[4px] hover:border-gold transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <Icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-serif text-xl text-navy group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-xs text-muted font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-line/40 flex items-center justify-between text-xs text-gold font-mono uppercase tracking-wider">
                    <span>View Practice</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
