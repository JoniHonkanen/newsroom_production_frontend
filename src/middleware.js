import { NextResponse } from "next/server";
import createIntlMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER || "admin";
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD;

const decodeBase64 = (value) => {
  if (typeof atob === "function") {
    return atob(value);
  }
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value, "base64").toString("utf-8");
  }
  throw new Error("No base64 decoder available");
};

// Luo intl middleware
const intlMiddleware = createIntlMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: 'as-needed'
});

export function middleware(request) {
  // Tarkista Basic Auth ensin
  if (BASIC_AUTH_PASSWORD) {
    const authHeader = request.headers.get("authorization");

    if (authHeader?.startsWith("Basic ")) {
      const encoded = authHeader.split(" ")[1] || "";
      try {
        const decoded = decodeBase64(encoded);
        const [username, password] = decoded.split(":");

        if (username !== BASIC_AUTH_USER || password !== BASIC_AUTH_PASSWORD) {
          return new NextResponse("Authentication required", {
            status: 401,
            headers: {
              "WWW-Authenticate": 'Basic realm="Protected"',
            },
          });
        }
      } catch (error) {
        console.error("Failed to decode auth header", error);
        return new NextResponse("Authentication required", {
          status: 401,
          headers: {
            "WWW-Authenticate": 'Basic realm="Protected"',
          },
        });
      }
    } else {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Protected"',
        },
      });
    }
  }

  // Jos auth ok (tai ei käytössä), aja intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};