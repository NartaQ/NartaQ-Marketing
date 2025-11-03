# Email Queue System

## Overview

Simple, reliable email queue system using PostgreSQL and Vercel Cron Jobs.

## How It Works

```
Form Submit → Queue Email → Vercel Cron (every 4 hours) → Send via SendGrid
```

### Queue Process

1. **User submits form** - Email immediately queued in database
2. **Vercel Cron runs** - Every 4 hours, processes pending emails
3. **SendGrid sends** - Emails delivered with retry logic
4. **Status tracked** - Database updated with sent/failed status

## Architecture

### Database Model

```prisma
model EmailQueue {
  id          String   @id @default(cuid())
  to          String
  subject     String
  htmlContent String
  type        String   // 'welcome', 'confirmation', 'newsletter', 'campaign'
  status      String   // 'pending', 'sent', 'failed'
  attempts    Int      @default(0)
  maxAttempts Int      @default(3)
  lastError   String?
  scheduledAt DateTime
  sentAt      DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Processing Schedule

**Vercel Cron Job** (Pro tier required):
- Runs every 4 hours: 12am, 4am, 8am, 12pm, 4pm, 8pm UTC
- Processes up to 10 emails per batch
- Configured in `vercel.json`

**Manual Trigger** (Free tier compatible):
```bash
curl -X GET https://nartaq.com/api/cron/process-emails
```

## Setup

### 1. Environment Variables

```env
# Required for email sending
SENDGRID_API_KEY="SG.your_api_key"
SENDGRID_FROM_EMAIL="noreply@nartaq.com"
ADMIN_EMAIL="admin@nartaq.com"

# Optional: Protect cron endpoint
CRON_SECRET="your-random-secret"
```

### 2. Vercel Configuration

File: `vercel.json`

```json
{
  "crons": [
    {
      "path": "/api/cron/process-emails",
      "schedule": "0 */4 * * *"
    }
  ]
}
```

**Note**: Vercel Cron requires Pro tier ($20/month). On free tier, use manual triggers.

### 3. Database Migration

```bash
npm run postinstall  # Generates Prisma client and syncs schema
```

## Usage

### Queue an Email

```typescript
import { queueWelcomeEmail } from '@/lib/email-queue-service'

// In server action
await queueWelcomeEmail('user@example.com', 'John Doe')
```

### Available Queue Functions

```typescript
// Newsletter welcome
queueWelcomeEmail(email: string, name?: string)

// Founder confirmation
queueFounderConfirmation(email: string, name: string, company: string)

// Investor confirmation
queueInvestorConfirmation(email: string, name: string, type: string)

// Career confirmation
queueCareerConfirmation(email: string, name: string, position: string)
```

### Check Queue Status

```bash
# Via API
curl https://nartaq.com/api/cron/process-emails

# Response:
{
  "success": true,
  "processed": 5,
  "sent": 5,
  "failed": 0,
  "queue": {
    "pending": 2,
    "sent": 143,
    "failed": 0,
    "total": 145
  }
}
```

## Monitoring

### Database Queries

```sql
-- Pending emails
SELECT * FROM email_queue WHERE status = 'pending' ORDER BY scheduled_at;

-- Failed emails (need investigation)
SELECT * FROM email_queue WHERE status = 'failed' ORDER BY updated_at DESC;

-- Queue statistics
SELECT status, COUNT(*) FROM email_queue GROUP BY status;

-- Recent activity
SELECT * FROM email_queue 
WHERE created_at >= NOW() - INTERVAL '24 hours'
ORDER BY created_at DESC;
```

### API Monitoring

The processing endpoint returns detailed statistics:

```json
{
  "success": true,
  "processed": 10,
  "sent": 9,
  "failed": 1,
  "queue": {
    "pending": 5,
    "sent": 234,
    "failed": 3,
    "total": 242
  },
  "timestamp": "2025-11-03T14:30:00.000Z"
}
```

## Retry Logic

- **Max attempts**: 3 per email
- **Failure handling**: Status updated to 'failed' after max attempts
- **Error logging**: `lastError` column stores failure reason

## Deployment Options

### Option 1: Vercel Pro (Recommended)

**Cost**: $20/month

**Features**:
- Automatic cron every 4 hours
- Zero maintenance
- Reliable scheduling

**Setup**: Already configured in `vercel.json`

### Option 2: Vercel Free + Manual Triggers

**Cost**: $0/month

**Features**:
- Queue system works normally
- Manual processing via API calls
- External cron service triggers endpoint

**Setup**:

1. Use external cron service (e.g., cron-job.org, EasyCron)
2. Configure to call: `https://nartaq.com/api/cron/process-emails`
3. Schedule: Every 4 hours
4. Add `Authorization: Bearer YOUR_CRON_SECRET` header

### Option 3: Development (Immediate Send)

For development, you can bypass the queue and send immediately:

```typescript
import { sendEmail } from '@/lib/email-service'

// Sends immediately without queueing
await sendEmail({
  to: 'user@example.com',
  subject: 'Test',
  html: '<p>Hello</p>'
})
```

## Troubleshooting

### Emails stuck in queue?

1. **Check Vercel tier**: Cron jobs require Pro tier
2. **Manually trigger**: `curl https://nartaq.com/api/cron/process-emails`
3. **Check logs**: Vercel dashboard → Functions → Logs

### Emails failing?

1. **Verify SendGrid API key**: Check environment variables
2. **Check SendGrid limits**: Free tier = 100 emails/day
3. **Review errors**: Query `SELECT * FROM email_queue WHERE status = 'failed'`

### Cron not running?

1. **Verify Pro tier**: `vercel.json` crons only work on Pro
2. **Check Vercel dashboard**: Settings → Cron Jobs
3. **Alternative**: Set up external cron service

## Best Practices

1. **Rate limiting**: Current limit is 10 emails per batch
2. **Monitoring**: Check queue daily for failed emails
3. **Clean up**: Archive old sent emails periodically
4. **Testing**: Use manual trigger before relying on cron

## Files

```
prisma/schema.prisma                      # EmailQueue model
src/lib/email-queue-service.ts           # Queue management
src/app/api/cron/process-emails/route.ts # Processing endpoint
vercel.json                               # Cron configuration
```

## Migration from Direct Sending

All server actions have been updated:
- ✅ `newsletter.ts` → Uses `queueWelcomeEmail()`
- ✅ `founder-application.ts` → Uses `queueFounderConfirmation()`
- ✅ `investor-application.ts` → Uses `queueInvestorConfirmation()`
- ✅ `career-application.ts` → Uses `queueCareerConfirmation()`

Admin notifications still send immediately for urgent alerts.
