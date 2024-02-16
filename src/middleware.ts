import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import { i18n } from '@/app/i18n';

function getLocale(request: NextRequest): string | undefined {
	/*
        // An HTTP content negotiator for Node.js.
        // Returns an array of preferred languages ordered by the client preference.
        const negotiatorHeaders: Record<string, string> = {};
        request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
        const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
	*/

	const locales: string[] = [...i18n.locales];

	return matchLocale(locales, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	if (
		[
			'/favicons/site.webmanifest',
			'/favicons/favicon.ico',
			'/favicons/apple-touch-icon.png',
			'/favicons/favicon-32x32.png',
			'/favicons/favicon-16x16.png',
			'/favicons/safari-pinned-tab.svg',
			'/favicons/android-chrome-192x192.png',
			'/favicons/android-chrome-512x512.png',
			'/zabelin_dmitro.pdf',
			// Your other files in `public`
		].includes(pathname)
	)
		return;

	const pathnameIsMissingLocale = i18n.locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}/`,
	);

	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);
		return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
	}
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

// TODO: Реализовать SEO
// TODO: Добавить разный декор на страницы
// TODO: Реализовать линк компонент
// TODO: Реализовать форму обратной связи
// TODO: Настроить все согласно замечаниям PageSpeed
