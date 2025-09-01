import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      'lucide-react', 'framer-motion'
    ]
  },
  serverExternalPackages: ['@prisma/client', 'prisma'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        '@prisma/client': '@prisma/client',
      })
    }
    return config
  },
  // Ensure static files are properly handled
  distDir: '.next'
};

export default nextConfig;
