# Unified Color System - Earthy Theme

## Overview
This document outlines the unified earthy color palette implemented across the website to create a sophisticated, natural, and professional visual identity.

## Core Color Palette

### Primary Colors (Lion - Golden Brown)
- **Raisin Black**: `#232428` - Deepest dark tone
- **Onyx**: `#3e3f44` - Dark gray foundation
- **Davys Gray**: `#5c5d63` - Mid-tone gray
- **Lion**: `#a98b5d` - Golden brown accent (Primary)
- **Timberwolf**: `#dcd7ce` - Light warm gray

### Extended Color Scales

#### Primary Scale (Lion - Golden Brown)
- **Primary 500**: `#a98b5d` - Main brand color
- **Primary 400**: `#c7a876` - Light accent
- **Primary 600**: `#967a4f` - Darker brand color

#### Secondary Scale (Timberwolf - Warm Gray)
- **Secondary 500**: `#dcd7ce` - Main secondary color
- **Secondary 400**: `#e6ddd0` - Light secondary
- **Secondary 600**: `#c7c0b5` - Darker secondary

#### Accent Scale (Davys Gray)
- **Accent 500**: `#5c5d63` - Main accent color
- **Accent 400**: `#a8a9ae` - Light accent
- **Accent 600**: `#525359` - Darker accent

#### Dark Scale (Raisin Black & Onyx)
- **Dark 900**: `#232428` - Deepest dark
- **Dark 800**: `#3e3f44` - Primary dark
- **Dark 700**: `#5a5a5e` - Mid dark

### Neutral Colors
- **Neutral 100-950**: Complete grayscale palette for backgrounds and text

## Usage Guidelines

### Gradients
- **Primary Gradient**: `linear-gradient(135deg, var(--lion), var(--primary-600))`
- **Secondary Gradient**: `linear-gradient(135deg, var(--timberwolf), var(--secondary-600))`
- **Hero Gradient**: `linear-gradient(135deg, var(--lion), var(--davys-gray))`
- **Dark Gradient**: `linear-gradient(135deg, var(--onyx), var(--raisin-black))`
- **Accent Gradient**: `linear-gradient(135deg, var(--davys-gray), var(--accent-600))`

### Directional Gradients
- **Top**: `linear-gradient(0deg, raisin-black → onyx → davys-gray → lion → timberwolf)`
- **Right**: `linear-gradient(90deg, raisin-black → onyx → davys-gray → lion → timberwolf)`
- **Bottom**: `linear-gradient(180deg, raisin-black → onyx → davys-gray → lion → timberwolf)`
- **Left**: `linear-gradient(270deg, raisin-black → onyx → davys-gray → lion → timberwolf)`
- **Diagonal**: `linear-gradient(45deg/135deg/225deg/315deg, full palette)`
- **Radial**: `radial-gradient(full palette from center)`

### Component Applications

#### Buttons
- Primary buttons: Use `gradient-primary` or `bg-lion` class
- Secondary buttons: Use `bg-timberwolf` class
- Dark buttons: Use `bg-onyx` or `gradient-dark` class
- Hover states: Use `hover-lion`, `hover-timberwolf`, or `hover-davys-gray` class

#### Text Gradients
- Hero text: Use `text-gradient-hero` or `text-gradient-earthy` class
- Primary text gradients: Use `text-gradient-primary` class
- Dark text gradients: Use `text-gradient-dark` class

#### Icons and Accents
- Primary icons: Use `text-lion` class
- Secondary elements: Use `text-timberwolf` class
- Accent elements: Use `text-davys-gray` class
- Dark elements: Use `text-onyx` or `text-raisin-black` class

#### Backgrounds
- Light backgrounds: Use `bg-timberwolf` class
- Medium backgrounds: Use `bg-davys-gray` class
- Dark backgrounds: Use `bg-onyx` or `bg-raisin-black` class
- Accent backgrounds: Use `bg-lion` class

#### Shadows
- Primary shadows: Use `shadow-lion` class
- Secondary shadows: Use `shadow-timberwolf` class
- Accent shadows: Use `shadow-davys-gray` class

#### Borders
- Primary borders: Use `border-lion` class
- Secondary borders: Use `border-timberwolf` class
- Accent borders: Use `border-davys-gray` class
- Dark borders: Use `border-onyx` or `border-raisin-black` class

## Implementation

### CSS Custom Properties
All colors are defined as CSS custom properties in `unified-colors.css`:
```css
:root {
  /* Core Earthy Palette */
  --raisin-black: #232428;
  --onyx: #3e3f44;
  --davys-gray: #5c5d63;
  --lion: #a98b5d;
  --timberwolf: #dcd7ce;
  
  /* Extended Scales */
  --primary-500: #a98b5d; /* Lion */
  --secondary-500: #dcd7ce; /* Timberwolf */
  --accent-500: #5c5d63; /* Davys Gray */
  /* ... etc */
}
```

### Utility Classes
Pre-built utility classes are available for common use cases:

#### Core Palette Classes
- `.bg-raisin-black`, `.text-raisin-black`
- `.bg-onyx`, `.text-onyx`
- `.bg-davys-gray`, `.text-davys-gray`
- `.bg-lion`, `.text-lion`
- `.bg-timberwolf`, `.text-timberwolf`

#### Gradient Classes
- `.gradient-primary`, `.gradient-secondary`, `.gradient-accent`, `.gradient-dark`
- `.gradient-top`, `.gradient-right`, `.gradient-bottom`, `.gradient-left`
- `.gradient-top-right`, `.gradient-bottom-right`, `.gradient-top-left`, `.gradient-bottom-left`
- `.gradient-radial`

#### Text Gradients
- `.text-gradient-earthy`, `.text-gradient-dark`, `.text-gradient-hero`

#### Interactive Classes
- `.shadow-lion`, `.border-lion`, `.hover-lion`
- `.shadow-timberwolf`, `.border-timberwolf`, `.hover-timberwolf`
- `.shadow-davys-gray`, `.border-davys-gray`, `.hover-davys-gray`

## Benefits

1. **Sophisticated Design**: Earthy palette creates a premium, natural feel
2. **Consistency**: All components now use the same earthy color values
3. **Maintainability**: Colors are centralized and easy to update
4. **Accessibility**: Proper contrast ratios maintained across the palette
5. **Professional**: Clean, cohesive visual identity with natural warmth
6. **Scalability**: Easy to add new color variations within the earthy theme
7. **Versatility**: Rich gradient options for dynamic visual effects

## Migration Notes

The following changes were made:
- **Complete Palette Overhaul**: Replaced previous color system with sophisticated earthy palette
- **Core Colors**: Integrated raisin-black, onyx, davys-gray, lion, and timberwolf as foundation
- **Extended Scales**: Created full color scales for each core color
- **Rich Gradients**: Added comprehensive gradient system including directional and radial options
- **Utility Classes**: Created extensive utility class system for easy implementation
- **Maintained Structure**: Kept existing class naming conventions for seamless migration

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