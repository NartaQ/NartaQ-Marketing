import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Backend Developer (NestJS) - Careers at NartaQ',
  description: 'Join NartaQ as a Backend Developer working with NestJS and PostgreSQL. Build scalable APIs and AI-powered matching algorithms for our venture matchmaking platform.',
  keywords: [
    'backend developer jobs',
    'NestJS developer',
    'PostgreSQL',
    'API development',
    'microservices',
    'remote backend job',
    'startup backend developer',
    'AI platform backend'
  ],
  openGraph: {
    title: 'Backend Developer (NestJS) - Careers at NartaQ',
    description: 'Build scalable APIs and services using NestJS and PostgreSQL. Work on AI-powered matching algorithms and data processing for our investment platform.',
    
    siteName: 'NartaQ',
  },
  twitter: {
    title: 'Backend Developer (NestJS) - Careers at NartaQ',
    description: 'Build scalable APIs and services using NestJS and PostgreSQL. Work on AI-powered matching algorithms.',
  },
  alternates: {
    canonical: 'https://www.nartaq.com/careers/backend-developer',
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children;
}