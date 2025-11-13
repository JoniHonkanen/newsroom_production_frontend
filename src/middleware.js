import { NextResponse } from "next/server";
import createIntlMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

const intlMiddleware = createIntlMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: 'as-needed'
});

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Salli terms-sivu ilman tarkistuksia
  if (pathname === '/terms' || pathname.endsWith('/terms')) {
    return intlMiddleware(request);
  }

  // Tarkista onko käyttöehdot hyväksytty
  const termsAccepted = request.cookies.get('terms_accepted');
  
  if (!termsAccepted) {
    const url = request.nextUrl.clone();
    url.pathname = '/terms';
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};