import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Monogram } from "@/components/ui/monogram";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <Monogram className="h-24 w-24 text-gold" draw={false} spin />
      <p className="overline mt-10 text-gold">Error 404</p>
      <h1 className="display mt-4 text-[clamp(3rem,12vw,9rem)] text-navy">
        Off the record.
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
        The page you&apos;re looking for has moved, expired, or never existed. Let&apos;s
        get you back to protected ground.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button href="/">Return Home</Button>
        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </div>
      <Link href="/services" className="link-underline mt-8 text-sm text-navy">
        Explore our services
      </Link>
    </section>
  );
}
