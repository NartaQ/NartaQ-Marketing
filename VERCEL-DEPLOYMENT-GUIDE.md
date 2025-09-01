# Vercel Deployment Guide for NartaQ

## Problem Solved
This configuration resolves the Prisma Client deployment error on Vercel:
```
Prisma Client could not locate the Query Engine for runtime 'rhel-openssl-3.0.x'
```

## Key Configuration Changes

### 1. Prisma Schema Binary Targets
The `prisma/schema.prisma` now includes the necessary binary targets:
```prisma
generator client {
  provider = "prisma-client-js"
  binaryTargets = ["native", "rhel-openssl-3.0.x"]
}
```

### 2. Next.js Configuration
The `next.config.ts` is optimized for serverless deployment:
```typescript
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
  distDir: '.next'
};
```

### 3. Package.json Scripts
Updated build scripts for proper Prisma generation:
```json
{
  "scripts": {
    "build": "prisma generate && next build",
    "postinstall": "prisma generate",
    "vercel-build": "prisma generate && next build"
  }
}
```

### 4. Prisma Client Configuration
Enhanced `src/lib/prisma.ts` for serverless environments:
```typescript
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error'],
    datasourceUrl: process.env.DATABASE_URL,
    ...(process.env.NODE_ENV === 'production' && {
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    }),
  })
```

## Environment Variables Required

Ensure these environment variables are set in Vercel:

### Database
```env
DATABASE_URL="your_postgresql_connection_string"
```

### SEO Configuration
```env
NEXT_PUBLIC_SITE_URL="https://nartaq.com"
```

## Deployment Process

1. **Commit Changes**: Ensure all configuration changes are committed
2. **Environment Variables**: Set up environment variables in Vercel dashboard
3. **Database Migration**: Run migrations if needed (should be done before deployment)
4. **Deploy**: Push to main branch or manually trigger deployment

## Binary Verification

The following binaries should be included in the deployment:
- `libquery_engine-rhel-openssl-3.0.x.so.node` (for Vercel runtime)
- `libquery_engine-debian-openssl-1.1.x.so.node` (for local development)

## Troubleshooting

### If deployment still fails:
1. Check Vercel function logs for specific errors
2. Verify DATABASE_URL is properly set and accessible
3. Ensure database is accepting connections from Vercel's IP ranges
4. Try redeploying after clearing Vercel's build cache

### Database Connection Issues:
1. Verify PostgreSQL connection string format
2. Check database hosting service (ensure it supports serverless connections)
3. Consider connection pooling if experiencing timeout issues

## Production Readiness Checklist

- [x] Prisma binary targets configured for RHEL OpenSSL 3.0.x
- [x] Next.js configuration optimized for serverless
- [x] Build process includes Prisma generation
- [x] Environment variables documented
- [x] Database connection optimized for production
- [x] Error handling implemented in server actions
- [x] Performance optimizations applied
- [x] SEO configuration complete

## Success Indicators

After successful deployment, you should see:
1. All pages loading without Prisma errors
2. Form submissions working correctly
3. Database operations executing successfully
4. Performance metrics within acceptable ranges

## Support

If you encounter issues during deployment:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Test database connectivity outside of the application
4. Review Prisma Client documentation for serverless best practices