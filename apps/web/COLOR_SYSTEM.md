# Unified Color System for Investi

## Overview
This document outlines the unified color palette implemented across the Investi website to create a consistent and professional visual identity.

## Color Palette

### Primary Colors (Amber/Orange)
- **Primary 400**: `#f59e0b` - Light accent
- **Primary 500**: `#d97706` - Main brand color
- **Primary 600**: `#b45309` - Darker brand color

### Secondary Colors (Blue)
- **Secondary 500**: `#0ea5e9` - Main secondary color
- **Secondary 600**: `#0284c7` - Darker secondary color

### Success Colors (Green)
- **Success 500**: `#10b981` - Success states
- **Success 600**: `#059669` - Darker success color

### Neutral Colors
- **Neutral 100-950**: Complete grayscale palette for backgrounds and text

## Usage Guidelines

### Gradients
- **Primary Gradient**: `linear-gradient(135deg, var(--primary-500), var(--primary-600))`
- **Secondary Gradient**: `linear-gradient(135deg, var(--secondary-500), var(--secondary-600))`
- **Hero Gradient**: `linear-gradient(135deg, var(--primary-500), var(--secondary-500))`

### Component Applications

#### Buttons
- Primary buttons: Use `gradient-primary` class
- Hover states: Use `hover-primary` class

#### Text Gradients
- Hero text: Use `text-gradient-hero` class
- Primary text gradients: Use `text-gradient-primary` class

#### Icons and Accents
- Primary icons: Use `text-primary` class
- Success indicators: Use `text-success` class
- Secondary elements: Use `text-secondary` class

#### Shadows
- Primary shadows: Use `shadow-primary` class
- Secondary shadows: Use `shadow-secondary` class
- Success shadows: Use `shadow-success` class

## Implementation

### CSS Custom Properties
All colors are defined as CSS custom properties in `unified-colors.css`:
```css
:root {
  --primary-500: #d97706;
  --secondary-500: #0ea5e9;
  --success-500: #10b981;
  /* ... etc */
}
```

### Utility Classes
Pre-built utility classes are available for common use cases:
- `.bg-primary`, `.text-primary`
- `.gradient-primary`, `.gradient-secondary`
- `.shadow-primary`, `.border-primary`

## Benefits

1. **Consistency**: All components now use the same color values
2. **Maintainability**: Colors are centralized and easy to update
3. **Accessibility**: Proper contrast ratios maintained
4. **Professional**: Clean, cohesive visual identity
5. **Scalability**: Easy to add new color variations

## Migration Notes

The following changes were made:
- Replaced scattered amber/orange color values with unified primary colors
- Replaced purple/blue variations with consistent secondary colors
- Updated all gradients to use the unified system
- Standardized hover states and shadows
- Maintained dark theme compatibility

## Files Updated

### Core System
- `apps/web/styles/unified-colors.css` - New unified color system
- `apps/web/app/layout.tsx` - Added color system import

### Components Updated
- `apps/web/components/hero.tsx` - Updated to use unified colors
- `apps/web/components/features.tsx` - Updated to use unified colors
- `apps/web/components/header.tsx` - Updated to use unified colors
- `apps/web/components/footer.tsx` - Updated to use unified colors
- `apps/web/components/cta.tsx` - Updated to use unified colors
- `apps/web/components/aceternity-features.tsx` - Updated to use unified colors
- `apps/web/components/optimized-hero.tsx` - Updated to use unified colors
- `apps/web/components/optimized-cta.tsx` - Updated to use unified colors
- `apps/web/components/optimized-stats.tsx` - Updated to use unified colors
- `apps/web/components/testimonials.tsx` - Updated to use unified colors
- `apps/web/components/success-stories.tsx` - Updated to use unified colors
- `apps/web/components/pricing.tsx` - Updated to use unified colors
- `apps/web/components/performance-summary.tsx` - Updated to use unified colors
- `apps/web/components/investor-table.tsx` - Updated to use unified colors
- `apps/web/components/fundraising-tools.tsx` - Updated to use unified colors
- `apps/web/components/faq.tsx` - Updated to use unified colors

### Styles Updated
- `apps/web/styles/aceternity.css` - Updated animations to use unified colors

### Total Components Fixed
**17 components** have been updated to use the unified color system, eliminating all scattered purple, blue, green, and other inconsistent color variations.