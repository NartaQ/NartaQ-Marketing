# NartaQ AI Agent Guidelines

## Project Architecture

**NartaQ** is a Next.js 15 venture matchmaking platform connecting founders with investors in the France-Tunisia corridor. The app uses App Router, Prisma ORM with PostgreSQL, and Azure Blob Storage for file uploads.

### Key Application Flow
1. **Multi-step forms** (`src/components/forms/`) collect founder/investor/career applications
2. **Server actions** (`src/app/actions/`) handle form submission with Zod validation
3. **Prisma models** store applications with duplicate prevention logic
4. **Azure Blob Service** manages file uploads (pitch decks, CVs)
5. **Post-deployment scripts** (`scripts/`) provide comprehensive testing

## Development Patterns

### Server Actions Architecture
```typescript
// All server actions follow this pattern:
'use server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const schema = z.object({ /* validation */ })

export async function actionName(data: FormData) {
  // 1. Validate with Zod
  // 2. Check for duplicates using OR conditions
  // 3. Create/update database record
  // 4. Return { success, data?, error?, message? }
}
```

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

### Environment Dependencies
- `DATABASE_URL` required for all database operations
- Azure Storage credentials needed for file uploads
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

- **Main application models**: FounderApplication, InvestorApplication, CareerApplication, Newsletter
- **Key server actions**: `src/app/actions/founder-application.ts`, `src/app/actions/investor-application.ts`
- **Form validation schemas**: Defined in both server actions and form components
- **Deployment validation**: `scripts/post-deployment-tests.ts` for full system verification

When adding new features, follow the established patterns: create Zod schemas, implement server actions with error handling, build multi-step forms with proper validation, and write comprehensive tests covering validation, duplicates, and edge cases.