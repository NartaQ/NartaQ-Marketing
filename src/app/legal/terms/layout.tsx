import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - NartaQ",
  description:
    "NartaQ's terms of service covering platform usage, user responsibilities, and service conditions for our venture matchmaking platform.",
  keywords: [
    "terms of service",
    "user agreement",
    "platform rules",
    "service conditions",
    "user responsibilities",
    "venture matchmaking",
    "legal terms",
  ],
  openGraph: {
    title: "Terms of Service - NartaQ",
    description: "Review NartaQ's terms of service and user agreement for our venture matchmaking platform.",
    siteName: "NartaQ",
  },
  twitter: {
    title: "Terms of Service - NartaQ",
    description:
      "Review NartaQ's terms of service and user agreement for our venture matchmaking platform.",
  },
  alternates: {
    canonical: "https://www.nartaq.com/legal/terms",
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