export const i18n = {
    defaultLocale: 'en',
    locales: ['ua', 'en', 'ru']
} as const

export type Locale = (typeof i18n)['locales'][number]