import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@rive-app/react-canvas",
      "react-hook-form",
      "zod",
      "posthog-js",
    ],
    serverActions: {
      bodySizeLimit: "20mb",
    },
    esmExternals: true,
    optimizeCss: true,
    webpackBuildWorker: true,
    cssChunking: true,
    // Configure Turbopack-specific optimizations
  },

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true,
  },

  // Enable gzip compression
  compress: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days (optimal from docs)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for performance and security
  async headers() {
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // Base CSP for production
    const baseCSP = [
      "default-src 'self'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https://www.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://static.intercomcdn.com https://downloads.intercomcdn.com https://uploads.intercomusercontent.com https://eu.i.posthog.com",
      "frame-src 'self' https://widget.intercom.io",
      "media-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ];

    // Development-specific CSP adjustments
    const scriptSrc = isDevelopment
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost:* https://localhost:* https://www.googletagmanager.com https://www.google-analytics.com https://vitals.vercel-insights.com https://vercel.live https://va.vercel-scripts.com https://widget.intercom.io https://js.intercomcdn.com https://eu.i.posthog.com https://eu-assets.i.posthog.com"
      : "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vitals.vercel-insights.com https://vercel.live https://va.vercel-scripts.com https://widget.intercom.io https://js.intercomcdn.com https://eu.i.posthog.com https://eu-assets.i.posthog.com";

    const connectSrc = isDevelopment
      ? "connect-src 'self' http://localhost:* https://localhost:* ws://localhost:* wss://localhost:* https://www.google-analytics.com https://vitals.vercel-insights.com https://vercel.live https://va.vercel-scripts.com https://api-iam.intercom.io https://api.intercom.io https://nexus-websocket-a.intercom.io https://nexus-websocket-b.intercom.io wss://nexus-websocket-a.intercom.io wss://nexus-websocket-b.intercom.io https://eu.i.posthog.com https://eu-assets.i.posthog.com"
      : "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://vercel.live https://va.vercel-scripts.com https://api-iam.intercom.io https://api.intercom.io https://nexus-websocket-a.intercom.io https://nexus-websocket-b.intercom.io wss://nexus-websocket-a.intercom.io wss://nexus-websocket-b.intercom.io https://eu.i.posthog.com https://eu-assets.i.posthog.com";

    const cspString = [scriptSrc, connectSrc, ...baseCSP].join("; ");

    return [
      {
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          {
            key: "Service-Worker-Allowed",
            value: "/",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Strict Transport Security (HSTS) - only for production
          ...(isDevelopment ? [] : [{
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          }]),
          // Cross-Origin-Opener-Policy (COOP)
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          // Cross-Origin-Embedder-Policy (COEP) - using unsafe-none for compatibility
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
          // Content Security Policy (CSP) - environment-aware
          {
            key: "Content-Security-Policy",
            value: cspString,
          },
        ],
      },
    ];
  },

  // Logging configuration for debugging (from docs)
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === "development",
    },
  },

  serverExternalPackages: ["@prisma/client", "prisma"],
  turbopack: {
    // Turbopack-specific optimizations
    rules: {
      // Optimize PostHog rrweb modules for better tree-shaking
      "*.js": {
        loaders: [],
        as: "*.js",
      },
    },
    resolveAlias: {
      "react-dom/server": "react-dom/server.browser",
    },
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
    moduleIds: "named",
  },
  distDir: ".next",
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
