import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client', 'prisma'],
  optimizePackageImports: [
    '@prisma/client',
  ],
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
