import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      'lucide-react', 'framer-motion'
    ],
  },
  serverExternalPackages: ['@prisma/client', 'prisma'],
  turbopack: {
    // Turbopack-specific optimizations
    resolveAlias: {
      // Add any module aliases if needed
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    // Configure loaders for specific file types if needed
    rules: {
      // Example: if you need SVG support
      // '*.svg': {
      //   loaders: ['@svgr/webpack'],
      //   as: '*.js',
      // },
    },
  },
  // Remove webpack config as Turbopack handles optimization automatically
  // Ensure static files are properly handled
  distDir: '.next'
};

export default nextConfig;
