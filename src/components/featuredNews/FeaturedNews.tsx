import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import styles from "./FeaturedNews.module.css";
import { NewsItem } from "@/types/news";
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

// Shown in news article list view - FEATURED - big layout

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function FeaturedNews({ news }: { news: NewsItem }) {
  const locale = useLocale() as Locale;

  // Early return jos ei ole summary:a
  if (!news.summary) {
    return null;
  }

  // Luo SEO-ystävällinen URL utils-funktiolla
  const titleForUrl = getNewsTitle(news);
  const url = createNewsUrl(titleForUrl, Number(news.id), locale);

  // Formatoi päivämäärä
  const publishDate = news.published_at || news.updated_at;
  const formattedDate = publishDate ? formatNewsDate(publishDate, locale) : "";

  // Geneeraa kuvan alt-teksti
  const imageAlt = generateImageAlt(news, locale);

  return (
    <article className={styles.featuredNews}>
      <Link href={url} className={styles.cardLink}>
        <div className={styles.featuredContent}>
          <h2 className={styles.title}>{news.lead || news.summary}</h2>

          {/* Näytä summary vain jos lead on olemassa ja eri kuin summary */}
          {shouldShowSummary(news.lead, news.summary) && (
            <p className={styles.summary}>{news.summary}</p>
          )}

          <div className={styles.meta}>
            {news.author && (
              <span className={styles.author}>{news.author}</span>
            )}
            {formattedDate && (
              <time className={styles.publishDate}>{formattedDate}</time>
            )}

            {/* Näytä kieli jos ei ole nykyinen locale */}
            {news.language && news.language !== locale && (
              <span
                className={styles.language}
                aria-label={getLocalizedText.language(locale)}
              >
                {news.language.toUpperCase()}
              </span>
            )}

            {/* Kategoriat */}
            {news.categories && news.categories.length > 0 && (
              <div
                className={styles.categories}
                aria-label={getLocalizedText.categories(locale)}
              >
                {formatCategories(news.categories).map((category, index) => (
                  <span key={index} className={styles.category}>
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sijainti-tagit */}
          {news.location_tags?.locations &&
            news.location_tags.locations.length > 0 && (
              <div
                className={styles.locationTags}
                aria-label={getLocalizedText.locations(locale)}
              >
                {news.location_tags.locations.map((location, index) => (
                  <span key={index} className={styles.locationTag}>
                    {location.city || location.region || location.country}
                  </span>
                ))}
              </div>
            )}

          {/* Lähteet */}
          {news.sources && news.sources.length > 0 && (
            <div className={styles.sources}>
              <span className={styles.sourcesLabel}>
                {getLocalizedText.sources(locale)}
              </span>
              {news.sources.map((source, index) => (
                <span key={index} className={styles.source}>
                  {source}
                  {index < news.sources!.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className={styles.featuredImage}>
          <Image
            src={
              news.hero_image_url
                ? `${baseUrl}${news.hero_image_url}`
                : "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
            }
            alt={imageAlt}
            width={680}
            height={420}
            className={styles.image}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
          />
        </div>
      </Link>
    </article>
  );
}
