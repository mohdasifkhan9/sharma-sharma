import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sharma & Sharma collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      label="Legal"
      title="Privacy Policy"
      updated="January 2026"
      sections={[
        {
          h: "Information We Collect",
          p: [
            "We collect information you provide directly to us, such as when you request a consultation, correspond with us, or engage our services. This may include your name, email address, telephone number, company details and the substance of your enquiry.",
            "We also collect limited technical information automatically, such as browser type and pages visited, to improve our website.",
          ],
        },
        {
          h: "How We Use Your Information",
          p: [
            "We use your information to respond to enquiries, provide legal services, comply with our professional and legal obligations, and communicate with you about matters relevant to your instructions.",
          ],
        },
        {
          h: "Confidentiality",
          p: [
            "As an intellectual property law firm, we treat all client information with the highest standard of confidentiality and in accordance with applicable professional conduct rules.",
          ],
        },
        {
          h: "Data Sharing",
          p: [
            "We do not sell your personal information. We may share information with foreign associates and registries strictly as necessary to file and prosecute your applications, and only with your authorisation.",
          ],
        },
        {
          h: "Your Rights",
          p: [
            "You may request access to, correction of, or deletion of your personal information by contacting us at info@reservemark.com.",
          ],
        },
      ]}
    />
  );
}
