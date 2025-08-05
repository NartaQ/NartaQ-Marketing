import type { Pathnames } from 'next-intl/routing';

export const locales = ['en', 'fr', 'es', 'de'] as const;
export type Locale = (typeof locales)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export function isValidLocale(locale: any): locale is Locale {
  return locales.includes(locale);
}

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    fr: '/chemins',
    es: '/rutas',
    de: '/pfadnamen',
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
