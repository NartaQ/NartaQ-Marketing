# NartaQ AI Agent Guidelines

## Project Architecture

**NartaQ** is a AI-powered venture matchmaking platform connecting founders with investors globally, with a focus on Africa and developing countries. The app uses App Router, Prisma ORM with PostgreSQL, Azure Blob Storage for file uploads, and features a proprietary DAO-based blockchain governance system (Hyperledger Fabric).

### Key Application Flow
1. **Multi-step forms** (`src/components/forms/`) collect founder/investor/career applications with conditional field logic
2. **Server actions** (`src/app/actions/`) handle form submission with Zod validation and email queue integration
3. **Prisma models** store applications with duplicate prevention logic
4. **Azure Blob Service** manages file uploads (pitch decks, CVs)
5. **Email system** (`src/lib/email-service.ts`, `email-queue-service.ts`) handles SendGrid integration with queue processing
6. **Blockchain governance** (proprietary IP) - each startup gets its own DAO with tokenized equity
7. **Post-deployment scripts** (`scripts/`) provide comprehensive testing

## Development Patterns

### Server Actions Architecture
```typescript
// All server actions follow this pattern:
'use server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { queueEmail } from '@/lib/email-queue-service'

const schema = z.object({ /* validation */ })

export async function actionName(data: FormData) {
  // 1. Validate with Zod
  // 2. Check for duplicates using OR conditions
  // 3. Create/update database record
  // 4. Queue confirmation email (non-blocking)
  // 5. Return { success, data?, error?, message? }
}
```

### Investor Form Conditional Logic
InvestorMultiStepForm implements conditional step skipping:
- **Angel investors** (`investorType === 'angel'`) skip Step 2 (firm details)
- Use `fieldState.isTouched` to prevent premature error display
- LinkedIn field conditionally required based on investor type

### Multi-Step Form Pattern
Forms use react-hook-form + Zod + framer-motion. See `src/components/forms/FounderMultiStepForm.tsx`:
- Form state managed with useForm + zodResolver
- Steps tracked with useState
- AnimatePresence for step transitions
- File uploads integrated with Azure Blob Service

### Database Operations
Always check for duplicates before creation:
```typescript
const existing = await prisma.model.findFirst({
  where: {
    OR: [
      { email: data.email },
      { AND: [{ name: data.name }, { company: data.company }] }
    ]
  }
})
```

## Development Workflow

### Essential Commands
```bash
# Development with Turbopack
npm run dev

# Database operations (run after schema changes)
npm run postinstall  # Generates client + pushes schema

# Testing suite
npm run test:post-deployment  # Full deployment validation
npm run test:smoke           # Business logic tests
npm run test:health          # Infrastructure checks
```

### Testing Strategy
- **Unit tests**: Jest with jest-mock-extended for Prisma mocking
- **Server actions**: Comprehensive validation, error handling, and edge case testing
- **Post-deployment**: Real environment validation in `scripts/`

### File Upload Integration
Use `azureBlobService` from `src/lib/azure-blob-service.ts`:
```typescript
const url = await azureBlobService.uploadFile(buffer, filename, contentType)
```

## Project Conventions

### Component Organization
- `src/components/forms/`: Multi-step forms for each application type
- `src/components/ui/`: Reusable UI components (shadcn/ui based)
- `src/components/pages/`: Page-specific components and layouts
  - `GovernanceSection.tsx`: Blockchain DAO value proposition (added to homepage)
  - `FaqSection.tsx`: Accordion FAQ with governance tokens explanation
  - `Footer.tsx`: Investment disclaimer + legal information (NartaQ SAS)
  - `NeonHeroSection.tsx`: Homepage hero with gradient effects
  - `NewsletterSection.tsx`: CTA section (misnamed, actually "Join Founding Cohort")

### Styling & UI
- **Tailwind CSS** with custom design system
- **Dark mode** by default (`html class='dark'`)
- **Framer Motion** for animations (mocked in tests)
- **Custom fonts**: Playfair Display (serif), Source Sans 3 (sans)

### Database Schema Patterns
- `cuid()` IDs for all models
- Array fields for multi-select data (sectors, locations)
- Optional `other*` fields for custom selections
- Consistent timestamps (`createdAt`, `updatedAt`)

## Important Gotchas

### Brand & Legal Identity
- **Legal Entity**: NartaQ SAS (Société par actions simplifiée)
- **RCS Number**: RCS Paris 992 848 242
- **Address**: 60 rue François 1er, 75008 Paris, France
- **Positioning**: SaaS platform (not "protocol") - AngelList competitor
- **Geographic Focus**: Global with emphasis on Africa and developing countries (not France-Tunisia corridor)
- **Investment Disclaimer**: Required on all pages footer - platform doesn't provide financial advice

### Blockchain Governance
- **Architecture**: Proprietary DAO system (Hyperledger Fabric backend - keep confidential)
- **Value Prop**: Each startup gets own DAO, governance tokens = company shares
- **Marketing Balance**: Explain value without revealing technical implementation
- **Key Messaging**: "Institutional-grade infrastructure from day one", "Traditional cap tables live in spreadsheets"

### Environment Dependencies
- `DATABASE_URL` required for all database operations
- Azure Storage credentials needed for file uploads
- SendGrid API key (`SENDGRID_API_KEY`) for email service
- PostHog analytics configured with EU endpoints (see next.config.ts rewrites)

### Build Process
- Prisma generation happens in both `build` and `postinstall` scripts
- Turbopack optimizations enabled for dev mode
- Vercel-specific build command includes Prisma generation

### Testing Mocks
- Framer Motion extensively mocked in `jest.setup.js`
- Prisma Client mocked with jest-mock-extended
- Console errors suppressed during test runs

## Quick References

### Competitor Analysis Insights
- **AngelList**: Authority-driven ("half of all top-tier VC deals"), testimonials with attribution, data reports
- **Carta**: "One platform, unlimited potential", 2.6M+ equity owners, $4T+ assets, enterprise-grade positioning
- **Gust**: "Startup Smarter", 800K+ founders, supportive/educational tone, community emphasis
- **Key Patterns**: Lead with numbers, prove with testimonials, reinforce with authority statements

### Homepage Marketing Priorities
- **Missing Trust Signals**: Platform stats, founder success stories, investor testimonials
- **Phase 1 Needs**: Stats Section, Testimonials Section, Comparison Table, "What to Expect" timeline
- **Copywriting Tone**: Data-driven, authority-building, outcome-focused (vs vague promises)

### Main Application Models
- FounderApplication, InvestorApplication, CareerApplication, Newsletter
- **Key server actions**: `src/app/actions/founder-application.ts`, `src/app/actions/investor-application.ts`
- **Form validation schemas**: Defined in both server actions and form components
- **Deployment validation**: `scripts/post-deployment-tests.ts` for full system verification

When adding new features, follow the established patterns: create Zod schemas, implement server actions with error handling, build multi-step forms with proper validation, and write comprehensive tests covering validation, duplicates, and edge cases.