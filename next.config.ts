import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      '@prisma/client', 'prisma'
    ],
  },
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
