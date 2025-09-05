# Dynamic Open Graph Images for NartaQ

This project uses Next.js 15's built-in `ImageResponse` constructor to generate dynamic Open Graph images for all pages. This ensures consistent branding and better social media sharing.

## Overview

Every page in the application now has:
- **opengraph-image.tsx** - Main OG image (1200x630)
- **twitter-image.tsx** - Twitter-specific image (1200x600) where needed

## Structure

```
src/
├── lib/
│   └── og-image.tsx           # Base OG image generator utility
└── app/
    ├── opengraph-image.tsx    # Home page OG image
    ├── twitter-image.tsx      # Home page Twitter image
    ├── about/
    │   └── opengraph-image.tsx
    ├── apply/
    │   └── opengraph-image.tsx
    ├── careers/
    │   ├── opengraph-image.tsx
    │   ├── backend-developer/
    │   │   ├── opengraph-image.tsx
    │   │   └── apply/
    │   │       └── opengraph-image.tsx
    │   └── [other-roles]/
    ├── for-founders/
    │   └── opengraph-image.tsx
    ├── for-investors/
    │   └── opengraph-image.tsx
    ├── faq/
    │   └── opengraph-image.tsx
    ├── data-request/
    │   └── opengraph-image.tsx
    └── legal/
        ├── opengraph-image.tsx
        ├── privacy/
        │   └── opengraph-image.tsx
        └── terms/
            └── opengraph-image.tsx
```

## Base Generator (`src/lib/og-image.tsx`)

The `generateOGImage` function creates consistent, branded images with:

### Features
- **Authentic NartaQ branding** with actual logo SVG
- **About page color palette** - Black background with golden gradients
- **Category badges** with glassmorphism effects
- **Gradient text** matching the about page design
- **Subtle decorative elements** and grid patterns
- **Professional typography** with proper letter spacing

### Parameters
```typescript
interface OGImageProps {
  title: string          // Main heading with gradient text
  subtitle?: string      // Optional description in brand colors
  category?: string      // Glassmorphism badge (e.g., "Engineering", "Marketing")
  isCareerPage?: boolean // Optimizes layout for career pages
}
```

### Brand Colors Used (From About Page)
- **Background**: Pure black `#000000` with radial gradients
- **Primary text**: Gradient from `#dcd7ce` to `#a98b5d` (timberwolf to lion)
- **Accent color**: `#a98b5d` (lion) with opacity variations
- **Logo**: Authentic SVG with `#dcd7ce` and `#a98b5d` fills
- **Decorative elements**: Subtle grid patterns and corner accents

## Implementation Examples

### Basic Page
```tsx
// src/app/about/opengraph-image.tsx
import { generateOGImage } from '@/lib/og-image'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'About NartaQ',
    subtitle: 'Building the future of venture capital with AI-powered matchmaking',
    category: 'Company',
  })
}
```

### Career Page
```tsx
// src/app/careers/backend-developer/opengraph-image.tsx
import { generateOGImage } from '@/lib/og-image'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'Backend Developer',
    subtitle: 'Build scalable systems for the future of venture capital',
    category: 'Engineering',
    isCareerPage: true, // Optimizes text sizing
  })
}
```

### Dynamic Page (Future Enhancement)
```tsx
// For dynamic routes like blog posts
export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  
  return generateOGImage({
    title: post.title,
    subtitle: post.excerpt,
    category: post.category,
  })
}
```

## Current Page Coverage

✅ **Main Pages**
- Home (`/`)
- About (`/about`)
- Apply (`/apply`)
- For Founders (`/for-founders`)
- For Investors (`/for-investors`)
- FAQ (`/faq`)
- Data Request (`/data-request`)

✅ **Career Pages**
- Careers overview (`/careers`)
- Backend Developer (`/careers/backend-developer`)
- UI/UX Designer (`/careers/ui-ux-designer`)
- DevOps Engineer (`/careers/devops-engineer`)
- Community Manager (`/careers/community-manager`)
- Digital Marketing Analyst (`/careers/digital-marketing-analyst`)
- All career application pages (`/careers/*/apply`)

✅ **Legal Pages**
- Legal overview (`/legal`)
- Privacy Policy (`/legal/privacy`)
- Terms of Service (`/legal/terms`)

## Category Types Used
- **Platform** - Main product pages
- **Company** - About and company info
- **Applications** - Application forms
- **For Founders** - Founder-specific content
- **For Investors** - Investor-specific content
- **Careers** - Job listings
- **Engineering** - Technical roles
- **Design** - Design roles
- **Marketing** - Marketing roles
- **Legal** - Legal documents
- **Support** - Help and FAQ
- **Privacy** - Privacy-related pages

## Technical Details

### Image Specifications
- **Open Graph**: 1200×630px (Facebook, LinkedIn, etc.)
- **Twitter**: 1200×600px (Twitter card format)
- **Format**: PNG
- **File size**: ~50-80KB (optimized by Next.js)

### Performance
- Images are generated on-demand and cached
- Edge-optimized with Next.js Image Optimization
- Served from Vercel Edge Network when deployed

### SEO Benefits
- Consistent branding across all social platforms
- Improved click-through rates from social media
- Professional appearance in social shares
- Automatic generation prevents missing OG images

## Adding New Pages

To add OG images to a new page:

1. Create `opengraph-image.tsx` in the page directory
2. Import the base generator: `import { generateOGImage } from '@/lib/og-image'`
3. Configure with appropriate title, subtitle, and category
4. Export required metadata (`size`, `contentType`)

Example:
```tsx
// src/app/new-page/opengraph-image.tsx
import { generateOGImage } from '@/lib/og-image'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'New Page Title',
    subtitle: 'Engaging description for social sharing',
    category: 'Appropriate Category',
  })
}
```

## Customization

To modify the design:
1. Edit `src/lib/og-image.tsx`
2. Adjust colors, typography, or layout
3. All pages will automatically use the updated design

## Testing

View generated images by visiting:
- `http://localhost:3000/opengraph-image` (any page)
- `http://localhost:3000/careers/backend-developer/opengraph-image`
- etc.

## Deployment

OG images are automatically generated and optimized when deployed to Vercel. No additional configuration needed.