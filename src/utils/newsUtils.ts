// utils/newsUtils.ts

export const SLUGS = { fi: "uutinen", en: "news", sv: "nyhet" } as const;
export type Locale = keyof typeof SLUGS;

const DEFAULT_TIME_ZONE =
  process.env.NEXT_PUBLIC_TIME_ZONE || "Europe/Helsinki";

const dayFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: DEFAULT_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const getDayStartInTimezone = (date: Date): number => {
  const formatted = dayFormatter.format(date); // YYYY-MM-DD in target TZ
  return Date.parse(formatted); // Midnight in UTC for that day
};

const formatTimeWithColon = (date: Date, locale: Locale): string => {
  const formatter = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    hourCycle: "h23",
    timeZone: DEFAULT_TIME_ZONE,
  });

  const parts = formatter.formatToParts(date);
  const hour = parts.find((part) => part.type === "hour")?.value ?? "00";
  const minute =
    parts.find((part) => part.type === "minute")?.value ?? "00";

  return `${hour}:${minute}`;
};

// Apufunktio SEO-ystävällisen slug:n luomiseen
export function createNewsSlug(title: string, id: number): string {
  const cleanTitle = title
    .toLowerCase()
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/å/g, "a")
    .replace(/[^a-z0-9\s-]/g, "") // Poista erikoismerkit
    .replace(/\s+/g, "-") // Välilyönnit -> viivat
    .replace(/-+/g, "-") // Useita viivoja -> yksi viiva
    .replace(/^-|-$/g, ""); // Poista viivat alusta/lopusta

  return `${id}-${cleanTitle}`;
}

// Apufunktio koko URL:n luomiseen
export function createNewsUrl(
  title: string,
  id: number,
  locale: Locale
): string {
  const slug = SLUGS[locale] || SLUGS.fi;
  const newsSlug = createNewsSlug(title, id);
  // Return a locale-relative path. Locale prefix will be added by the
  // i18n-aware Link component from '@/i18n/navigation'. This avoids
  // duplicate locale segments like '/en/en/...'.
  return `/${slug}/${newsSlug}`;
}

// Päivämäärän formatointi uutisille
export function formatNewsDate(dateString: string, locale: Locale): string {
  try {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
      return "";
    }

    const now = new Date();
    
    // Lasketaan päivien ero halutussa aikavyöhykkeessä
    const todayStart = getDayStartInTimezone(now);
    const newsDayStart = getDayStartInTimezone(date);
    const diffDays = Math.floor((todayStart - newsDayStart) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      // Tänään - näytä kellonaika
      return formatTimeWithColon(date, locale);
    }
    
    if (diffDays === 1) {
      // Eilen
      const yesterdayTexts = {
        fi: "Eilen",
        en: "Yesterday",
        sv: "Igår",
      };
      return yesterdayTexts[locale] || yesterdayTexts.fi;
    }

    // Muut päivät - näytä päivämäärä
    return date.toLocaleDateString(locale, {
      day: "numeric",
      month: "numeric",
      year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
      timeZone: DEFAULT_TIME_ZONE,
    });
    
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
}

// Kuvan alt-tekstin generointi
export function generateImageAlt(
  news: { lead?: string; summary?: string; title?: string },
  locale: Locale
): string {
  const altTexts = {
    fi: "Kuva uutisesta:",
    en: "News image:",
    sv: "Nyhetsbild:",
  };

  const prefix = altTexts[locale] || altTexts.fi;
  const title = news.lead || news.summary || news.title;

  return title ? `${prefix} ${title}` : "Uutiskuva";
}

// Lokalisoitujen tekstien apufunktiot
export const getLocalizedText = {
  sources: (locale: Locale): string => {
    const texts = { fi: "Lähteet:", en: "Sources:", sv: "Källor:" };
    return texts[locale] || texts.fi;
  },

  categories: (locale: Locale): string => {
    const texts = { fi: "Kategoriat", en: "Categories", sv: "Kategorier" };
    return texts[locale] || texts.fi;
  },

  locations: (locale: Locale): string => {
    const texts = { fi: "Sijainnit", en: "Locations", sv: "Platser" };
    return texts[locale] || texts.fi;
  },

  language: (locale: Locale): string => {
    const texts = { fi: "Kieli:", en: "Language:", sv: "Språk:" };
    return texts[locale] || texts.fi;
  },
};

// Apufunktio kategorioiden formatointiin
export function formatCategories(categories: string[]): string[] {
  return categories.map(
    (category) => category.charAt(0).toUpperCase() + category.slice(1)
  );
}

export function formatFeaturedCategories(categories: string[]): string[] {
  console.log(categories);
  console.log(categories.length);
  
  return categories.map((category, index) => {
    const formatted = category.charAt(0).toUpperCase() + category.slice(1);
    // Lisää pilkku kaikille paitsi viimeiselle
    return index < categories.length - 1 ? formatted + ", " : formatted;
  });
}

// Tarkista onko lead ja summary erilaisia
export function shouldShowSummary(lead?: string, summary?: string): boolean {
  return !!(lead && summary && lead !== summary);
}

// Hae pääotsikko uutiselle
export function getNewsTitle(news: {
  lead?: string;
  summary?: string;
  title?: string;
}): string {
  return news.lead || news.summary || news.title || "";
}
