export const locales = ['es', 'en'] as const;
export type LocaleType = (typeof locales)[number];
export const defaultLocale: LocaleType = 'es';
