# Post-Deployment Testing Scripts

This directory contains comprehensive testing scripts to verify that the NartaQ application works correctly after deployment.

## Scripts Overview

### 🏥 Health Check (`health-check.ts`)
Verifies basic application health and infrastructure:
- ✅ Database connectivity
- ✅ Database models accessibility  
- ✅ Environment variables
- ✅ Server actions can be imported
- ✅ App routes are accessible
- ✅ Static assets are available

### 🔥 Smoke Tests (`smoke-tests.ts`)
Tests critical business functionality:
- ✅ Newsletter subscriptions work
- ✅ Form validation works correctly
- ✅ Duplicate prevention mechanisms
- ✅ Database queries and transactions
- ✅ Prisma Client generation

### 🚀 Post-Deployment Tests (`post-deployment-tests.ts`)
Comprehensive test runner that combines health checks and smoke tests with detailed reporting.

## Usage

### Run Individual Test Suites

```bash
# Health checks only
npm run test:health

# Smoke tests only  
npm run test:smoke

# Comprehensive post-deployment tests
npm run test:post-deployment
```

### Environment Variables

Ensure these environment variables are set:

```bash
DATABASE_URL="your_postgresql_connection_string"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

## CI/CD Integration

### Vercel Deployment
Add to your Vercel deployment workflow:

```yaml
- name: Run Post-Deployment Tests
  run: npm run test:post-deployment
  env:
    DATABASE_URL: ${{ secrets.DATABASE_URL }}
    NEXT_PUBLIC_SITE_URL: https://your-app.vercel.app
```

### GitHub Actions
```yaml
- name: Post-Deployment Verification
  run: |
    npm run test:post-deployment
  env:
    DATABASE_URL: ${{ secrets.DATABASE_URL }}
    NEXT_PUBLIC_SITE_URL: ${{ steps.deploy.outputs.url }}
```

## Test Results

### Success Output
```
🎯 Post-Deployment Test Suite Starting...
🌐 Target URL: https://nartaq.com
📅 Started at: 2025-09-01T10:30:00.000Z

🚀 Starting Health Checks...
==================================================
✅ Environment Variables - PASS (5ms)
✅ Database Connection - PASS (120ms)
✅ Database Models - PASS (45ms)
✅ Server Actions Validation - PASS (30ms)
✅ App Routes - PASS (890ms)
✅ Static Assets - PASS (230ms)
📊 Health Checks completed in 1320ms - ✅ PASSED

🚀 Starting Smoke Tests...
==================================================
✅ Prisma Client Generation - PASS (25ms)
✅ Database Queries - PASS (85ms)
✅ Newsletter Subscription - PASS (150ms)
✅ Founder Application Validation - PASS (40ms)
✅ Investor Application Validation - PASS (35ms)
✅ Duplicate Subscription Prevention - PASS (180ms)
✅ Duplicate Application Prevention - PASS (200ms)
📊 Smoke Tests completed in 715ms - ✅ PASSED

============================================================
📋 FINAL POST-DEPLOYMENT TEST REPORT
============================================================
📅 Completed at: 2025-09-01T10:30:02.035Z
⏱️  Total Duration: 2035ms (2.04s)
📊 Test Suites: 2/2 passed

📋 Suite Results:
   ✅ PASS Health Checks      (1320ms)
   ✅ PASS Smoke Tests        (715ms)

🎯 Overall Status: ✅ DEPLOYMENT SUCCESSFUL

🎉 All tests passed! Deployment is ready for production traffic.
============================================================
```

### Failure Output
```
❌ Database Connection - FAIL (5000ms): Connection timeout
❌ App Routes - FAIL (1200ms): Route /about returned 500

📋 FINAL POST-DEPLOYMENT TEST REPORT
============================================================
🎯 Overall Status: ❌ DEPLOYMENT ISSUES DETECTED

⚠️  Deployment Recommendations:
   - Check environment variables are properly set
   - Verify database connectivity and migrations
   - Review server logs for additional error details
   - Test manually in browser to confirm issues
============================================================
```

## Troubleshooting

### Database Connection Issues
1. Verify `DATABASE_URL` is correctly set
2. Check database server is running and accessible
3. Confirm database credentials are correct
4. Test connection from deployment environment

### Route/Asset Failures
1. Verify the application built successfully
2. Check if static files are being served correctly
3. Review server logs for error details
4. Test routes manually in browser

### Form/Validation Issues
1. Check if Prisma Client was generated correctly
2. Verify database schema matches application models
3. Test server actions independently
4. Review validation schemas for correctness

## Adding New Tests

### Health Check
Add new checks to `HealthChecker` class in `health-check.ts`:

```typescript
async checkNewFeature(): Promise<void> {
  await this.runCheck('New Feature', async () => {
    // Your test logic here
  })
}
```

### Smoke Test
Add new tests to `SmokeTestRunner` class in `smoke-tests.ts`:

```typescript
async testNewFunctionality(): Promise<void> {
  await this.runTest('New Functionality', async () => {
    // Your test logic here
  })
}
```

## Best Practices

1. **Fast Tests**: Keep tests fast (under 30s total) for CI/CD integration
2. **Clean Up**: Always clean up test data created during tests
3. **Unique Data**: Use timestamps or UUIDs for test data to avoid conflicts
4. **Error Messages**: Provide clear, actionable error messages
5. **Environment Awareness**: Make tests work in both staging and production
6. **Atomic Tests**: Each test should be independent and not depend on others
7. **Timeout Handling**: Implement proper timeouts for network requests
8. **Graceful Degradation**: Handle expected failures gracefully

## Monitoring Integration

These tests can be integrated with monitoring systems:
- Run periodically as health checks
- Alert on failures
- Track performance metrics
- Monitor deployment success rates