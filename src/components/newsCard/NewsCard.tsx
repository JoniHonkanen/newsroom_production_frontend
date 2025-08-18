import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import styles from "./NewsCard.module.css";
import type { NewsItem } from "@/types/news";
import {
  createNewsUrl,
  formatNewsDate,
  generateImageAlt,
  getLocalizedText,
  formatCategories,
  shouldShowSummary,
  getNewsTitle,
  type Locale,
} from "@/utils/newsUtils";

// Shown in news article list view

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function NewsCard({ news }: { news: NewsItem }) {
  const locale = useLocale() as Locale;

  // Käytä published_at jos saatavilla, muuten updated_at tai created_at
  const displayDate = news.published_at || news.updated_at || news.created_at;
  const formattedTime = displayDate ? formatNewsDate(displayDate, locale) : "";

  // Luo SEO-ystävällinen URL utils-funktiolla
  const titleForUrl = getNewsTitle(news);
  const url = createNewsUrl(titleForUrl, Number(news.id), locale);

  // Geneeraa kuvan alt-teksti
  const imageAlt = generateImageAlt(news, locale);

  return (
    <article className={styles.card}>
      <Link href={url} className={styles.cardLink}>
        <div className={styles.content}>
          <h3 className={styles.title}>{news.lead}</h3>

          {/* Näytä summary vain jos lead on olemassa ja eri kuin summary */}
          {shouldShowSummary(news.lead, news.summary) && (
            <p className={styles.summary}>{news.summary}</p>
          )}

          <div className={styles.meta}>
            {formattedTime && (
              <time className={styles.time}>{formattedTime}</time>
            )}
            {news.author && (
              <span className={styles.author}>{news.author}</span>
            )}
            {news.read_time_minutes && (
              <span className={styles.readTime}>
                {news.read_time_minutes} min
              </span>
            )}

            {/* Näytä kieli jos eri kuin nykyinen locale */}
            {news.language && news.language !== locale && (
              <span
                className={styles.language}
                aria-label={getLocalizedText.language(locale)}
              >
                {news.language.toUpperCase()}
              </span>
            )}

            {/* Näytä status jos ei julkaistu */}
            {news.status && news.status !== "published" && (
              <span className={styles.status}>{news.status}</span>
            )}

            {/* Kategoriat */}
            {news.categories && news.categories.length > 0 && (
              <span
                className={styles.categories}
                aria-label={getLocalizedText.categories(locale)}
              >
                {formatCategories(news.categories).join(", ")}
              </span>
            )}
          </div>

          {/* Sijainti-tagit */}
          {news.location_tags &&
            Array.isArray(news.location_tags) &&
            news.location_tags.length > 0 && (
              <div
                className={styles.locationTags}
                aria-label={getLocalizedText.locations(locale)}
              >
                {news.location_tags.map((tag, index) => {
                  try {
                    const parsed = JSON.parse(tag);
                    if (parsed.locations && Array.isArray(parsed.locations)) {
                      type Location = {
                        city?: string;
                        region?: string;
                        country?: string;
                      };
                      return parsed.locations.map(
                        (location: Location, locIndex: number) => (
                          <span
                            key={`${index}-${locIndex}`}
                            className={styles.locationTag}
                          >
                            {location.city ||
                              location.region ||
                              location.country}
                          </span>
                        )
                      );
                    }
                  } catch (e: unknown) {
                    console.log("Error parsing location tag:", e);
                    return (
                      <span key={index} className={styles.locationTag}>
                        {tag}
                      </span>
                    );
                  }
                  return null;
                })}
              </div>
            )}

          {/* Lähteet */}
          {news.sources &&
            Array.isArray(news.sources) &&
            news.sources.length > 0 && (
              <div className={styles.sources}>
                <span className={styles.sourcesLabel}>
                  {getLocalizedText.sources(locale)}
                </span>
                {news.sources.slice(0, 2).map((source, index) => (
                  <span key={index} className={styles.source}>
                    {source}
                    {index < Math.min(news.sources?.length || 0, 2) - 1
                      ? ", "
                      : ""}
                  </span>
                ))}
                {(news.sources?.length || 0) > 2 && (
                  <span className={styles.moreSources}>
                    +{(news.sources?.length || 0) - 2} more
                  </span>
                )}
              </div>
            )}
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={
              news.hero_image_url
                ? `${baseUrl}${news.hero_image_url}`
                : "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
            }
            alt={imageAlt}
            width={180}
            height={110}
            className={styles.image}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 50vw, 180px"
          />
        </div>
      </Link>
    </article>
  );
}
