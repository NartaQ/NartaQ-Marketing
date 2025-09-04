import {
  Database,
  Download,
  Trash2,
  Shield,
  Mail,
  FileText,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Data Request - Access, Download, or Delete Your Personal Data | NartaQ",
  description:
    "Submit a request to access, download, or delete your personal data from NartaQ. GDPR compliant data management and privacy protection.",
  keywords: [
    "data request",
    "GDPR compliance",
    "data protection",
    "privacy rights",
    "data access",
    "data deletion",
    "right to be forgotten",
    "personal data",
    "data privacy",
    "data download",
  ],
  openGraph: {
    title: "Data Request - Manage Your Personal Data",
    description:
      "Request access, download, or deletion of your personal data in compliance with GDPR and privacy regulations.",
    type: "website",
  },
  twitter: {
    title: "Data Request - Manage Your Personal Data",
    description:
      "Request access, download, or deletion of your personal data in compliance with GDPR and privacy regulations.",
  },
  alternates: {
    canonical: "/data-request",
  },
};

export default function DataRequestPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Header */}
          <div className="inline-flex items-center space-x-2 bg-[#a98b5d]/10 border border-[#a98b5d]/20 rounded-full px-4 py-2 mb-6">
            <Database className="w-5 h-5 text-[#a98b5d]" />
            <span className="text-[#a98b5d] text-sm font-medium">
              DATA PRIVACY
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#dcd7ce] mb-6">
            Data{" "}
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
              Requests
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Manage your personal data with NartaQ. Request access, download, or
            deletion of your information in compliance with GDPR and privacy
            regulations.
          </p>
        </div>

        {/* Request Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Access Request */}
          <div className="bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8 hover:border-[#a98b5d]/40 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
              <Download className="w-8 h-8 text-[#a98b5d]" />
            </div>
            <h2 className="text-2xl font-bold text-[#dcd7ce] mb-4 text-center">
              Access Request
            </h2>
            <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-center mb-6">
              Download a copy of all personal data we have about you, including
              applications, communications, and profile information.
            </p>
            <div className="text-center">
              <Link
                title='Request Data Access'
                className="border-[#a98b5d]/50 text-[#a98b5d] hover:bg-[#a98b5d]/10"
                href="mailto:privacy@nartaq.com?subject=Data Access Request&body=Please provide me with a copy of all my personal data held by NartaQ.%0A%0AName: %0AEmail: %0AAccount Details: "
              >
                Request Data
              </Link>
            </div>
          </div>

          {/* Deletion Request */}
          <div className="bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8 hover:border-[#a98b5d]/40 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
              <Trash2 className="w-8 h-8 text-[#a98b5d]" />
            </div>
            <h2 className="text-2xl font-bold text-[#dcd7ce] mb-4 text-center">
              Deletion Request
            </h2>
            <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-center mb-6">
              Request permanent deletion of your personal data from our systems
              (Right to be Forgotten under GDPR).
            </p>
            <div className="text-center">
              <Link
                title='Request Data Deletion'
                href="mailto:privacy@nartaq.com?subject=Data Deletion Request&body=I request the deletion of all my personal data from NartaQ systems.%0A%0AName: %0AEmail: %0AAccount Details: %0A%0APlease confirm this request and provide a timeline for completion."
                className="border-[#a98b5d]/50 text-[#a98b5d] hover:bg-[#a98b5d]/10"
              >
                Request Deletion
              </Link>
            </div>
          </div>

          {/* Data Processing Info */}
          <div className="bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8 hover:border-[#a98b5d]/40 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#a98b5d]" />
            </div>
            <h2 className="text-2xl font-bold text-[#dcd7ce] mb-4 text-center">
              Processing Info
            </h2>
            <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-center mb-6">
              Learn how we process your data, what information we collect, and
              the legal basis for processing.
            </p>
            <div className="text-center">
              <Link
                title='View Privacy Policy'
                href="/legal/privacy"
                className="border-[#a98b5d]/50 text-[#a98b5d] hover:bg-[#a98b5d]/10"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Process Information */}
        <div className="bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
              <Clock className="w-8 h-8 text-[#a98b5d]" />
            </div>
            <h2 className="text-3xl font-bold text-[#dcd7ce] mb-4">
              Request Processing
            </h2>
            <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-[#a98b5d] mb-4">
                Response Timeline
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#a98b5d] rounded-full mt-2"></div>
                  <span>Initial confirmation within 24 hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#a98b5d] rounded-full mt-2"></div>
                  <span>Full response within 30 days (GDPR compliant)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#a98b5d] rounded-full mt-2"></div>
                  <span>Complex requests may take up to 90 days</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#a98b5d] mb-4">
                Required Information
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#a98b5d] rounded-full mt-2"></div>
                  <span>Full name associated with your account</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#a98b5d] rounded-full mt-2"></div>
                  <span>Email address used for registration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#a98b5d] rounded-full mt-2"></div>
                  <span>Additional verification may be required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#a98b5d]/5 to-transparent border border-[#a98b5d]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
              <Shield className="w-8 h-8 text-[#a98b5d]" />
            </div>
            <h2 className="text-2xl font-bold text-[#dcd7ce] mb-4">
              Privacy & Data Protection
            </h2>
            <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-6"></div>
            <p className="text-gray-300 leading-relaxed mb-6">
              For all data requests and privacy-related inquiries, contact our
              Data Protection Officer directly.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Mail className="w-6 h-6 text-[#a98b5d]" />
              <a
                href="mailto:privacy@nartaq.com"
                className="text-xl text-[#a98b5d] hover:underline"
              >
                privacy@nartaq.com
              </a>
            </div>
            <div className="space-x-4">
              <Link title='View Privacy Policy' href="/legal/privacy">
                <Button
                  variant="outline"
                  className="border-[#a98b5d]/30 text-[#a98b5d] hover:bg-[#a98b5d]/10"
                >
                  Privacy Policy
                </Button>
              </Link>
              <Link title='Return Home' href="/">
                <Button
                  variant="outline"
                  className="border-[#a98b5d]/30 text-[#a98b5d] hover:bg-[#a98b5d]/10"
                >
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
