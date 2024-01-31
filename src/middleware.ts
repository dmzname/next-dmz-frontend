import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

import {match as matchLocale} from '@formatjs/intl-localematcher'
import {i18n} from "@/app/i18n";

function getLocale(request: NextRequest): string | undefined {
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales

    return matchLocale(['ua', 'ru'], locales, i18n.defaultLocale)
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}/`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        )
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}


// TODO: Навести порядок с мультилэнгом
//TODO: Добавить страницу ошибки и разбить лэйоут на два компонента постараться добиться мультилэнга на нот ваунд
