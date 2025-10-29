import React from "react";
import type { Metadata } from "next";
import {
  Roboto,
  Inter,
  Lora,
  UnifrakturCook,
  Crimson_Text,
  Playfair_Display,
} from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import SidebarComponent from "@/components/sidebar/SidebarComponent";
import styles from "./layout.module.css";

import "../globals.css";
import Header from "@/components/headers/Header";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const unifrakturCook = UnifrakturCook({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-unifraktur-cook",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-crimson-text",
});

export const metadata: Metadata = {
  title: "Newsroom - tekoälytoimitus",
  description: "Tekoälyn johtama uutistoimitus on Tampereen yliopiston tutkimusprojekti, jossa rakennetaan tekoälyllä toimiva uutistoimitus.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${roboto.variable} ${lora.variable} ${inter.variable} ${unifrakturCook.variable} ${crimsonText.variable} ${playfairDisplay.variable}`}
      >
        <NextIntlClientProvider locale={locale}>
          <Header />
          <div className={styles.layoutShell}>
            <div className={styles.sidebarWrapper}>
              <SidebarComponent />
            </div>
            <div className="content_wrapper">{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
