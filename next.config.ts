import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      'lucide-react', 'framer-motion'
    ],
    turbopackMinify: true,
    serverActions: {
      bodySizeLimit: '25mb',
    },
  },
  serverExternalPackages: ['@prisma/client', 'prisma'],

  // Ensure static files are properly handled
  distDir: '.next'
};

export default nextConfig;
