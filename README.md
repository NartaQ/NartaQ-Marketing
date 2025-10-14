This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## NartaQ Platform

AI-Powered Venture Matchmaking connecting founders with investors across the France-Tunisia corridor.

### Key Features

- **Smart Matching Engine**: AI-powered founder-investor matching
- **Multi-step Applications**: Founder, Investor, and Career applications with validation
- **Azure Blob Storage**: Secure file uploads for pitch decks and CVs
- **Email Automation**: SendGrid-powered transactional emails
- **Analytics Integration**: PostHog, Google Analytics, Facebook Pixel, LinkedIn tracking
- **GDPR Compliance**: Cookie consent and EU data residency

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email Integration

NartaQ uses **SendGrid** for transactional email delivery. See [SendGrid Setup Guide](./docs/SENDGRID_SETUP.md) for detailed configuration.

### Quick Setup

1. Get your SendGrid API key from [sendgrid.com](https://sendgrid.com)
2. Add to `.env`:
   ```bash
   SENDGRID_API_KEY="your_api_key_here"
   SENDGRID_FROM_EMAIL="noreply@nartaq.com"
   ADMIN_EMAIL="admin@nartaq.com"
   ```
3. Verify sender email in SendGrid dashboard

### Email Types

- **Newsletter Welcome**: Sent on newsletter subscription
- **Application Confirmations**: Founder, Investor, Career applications
- **Admin Notifications**: New application alerts to admin team

### Testing

```bash
npm test -- src/lib/__tests__/sendgrid-service.test.ts
```

## Environment Variables

Required environment variables (see `.env.example`):

```bash
# Database
DATABASE_URL="postgresql://..."

# SendGrid Email
SENDGRID_API_KEY="your_key"
SENDGRID_FROM_EMAIL="noreply@nartaq.com"
ADMIN_EMAIL="admin@nartaq.com"

# Azure Storage
AZURE_STORAGE_ACCOUNT_NAME="..."
AZURE_STORAGE_ACCOUNT_KEY="..."
AZURE_STORAGE_CONTAINER_NAME="..."

# Analytics
NEXT_PUBLIC_POSTHOG_KEY="..."
NEXT_PUBLIC_POSTHOG_HOST="https://eu.i.posthog.com"

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID="..."
SANITY_API_TOKEN="..."
```

## Testing

```bash
# Run all tests
npm test

# Run specific test suite
npm test -- <test-file-path>

# Run with coverage
npm run test:coverage

# Post-deployment tests
npm run test:post-deployment
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── actions/           # Server actions (form submissions, etc.)
│   └── ...
├── components/            # React components
│   ├── forms/            # Multi-step form components
│   ├── ui/               # Reusable UI components
│   └── ...
├── lib/                   # Utilities and services
│   ├── sendgrid-service.ts    # Email service
│   ├── email-templates.ts     # Email HTML templates
│   ├── azure-blob-service.ts  # File upload service
│   └── prisma.ts              # Database client
prisma/
├── schema.prisma          # Database schema
└── migrations/            # Database migrations
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
