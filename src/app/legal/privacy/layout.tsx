import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - NartaQ",
  description:
    "NartaQ's comprehensive privacy policy covering data collection, processing, and your rights under GDPR and other privacy regulations.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "personal data",
    "privacy rights",
    "data processing",
    "cookies policy",
  ],
  openGraph: {
    title: "Privacy Policy - NartaQ",
    description: "Learn about how NartaQ protects your personal data and respects your privacy rights.",
    siteName: "NartaQ",
  },
  twitter: {
    title: "Privacy Policy - NartaQ",
    description:
      "Learn about how NartaQ protects your personal data and respects your privacy rights.",
  },
  alternates: {
    canonical: "https://www.nartaq.com/legal/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children;
}