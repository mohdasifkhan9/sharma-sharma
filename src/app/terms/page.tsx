import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of the Sharma & Sharma website.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      label="Legal"
      title="Terms of Use"
      updated="January 2026"
      sections={[
        {
          h: "Acceptance of Terms",
          p: [
            "By accessing this website, you agree to be bound by these Terms of Use and all applicable laws. If you do not agree, please do not use this website.",
          ],
        },
        {
          h: "No Legal Advice",
          p: [
            "The content on this website is provided for general informational purposes only and does not constitute legal advice. No attorney–client relationship is created by your use of this website or by submitting an enquiry.",
          ],
        },
        {
          h: "Intellectual Property",
          p: [
            "All content, trademarks and materials on this website are the property of Sharma & Sharma or its licensors and may not be reproduced without written permission.",
          ],
        },
        {
          h: "Limitation of Liability",
          p: [
            "Sharma & Sharma shall not be liable for any loss or damage arising from reliance on information contained on this website.",
          ],
        },
        {
          h: "Governing Law",
          p: [
            "These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of Delhi.",
          ],
        },
      ]}
    />
  );
}
