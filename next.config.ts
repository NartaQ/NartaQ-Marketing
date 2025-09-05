import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['eu-assets.i.posthog.com', 'eu.i.posthog.com', 'cdn.sanity.io'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    serverActions: {
      bodySizeLimit: '20mb',
    },
    // turbopackMinify: true,
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
  distDir: '.next',
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://eu.i.posthog.com/:path*',
      },
    ]
  },
  skipTrailingSlashRedirect: true,
}

export default nextConfig
