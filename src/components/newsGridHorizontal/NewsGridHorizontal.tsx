import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import styles from "./NewsGridHorizontal.module.css";
import type { NewsItem } from "@/types/news";
import { getRelativeTime } from "@/utils/date";
import {
  createNewsUrl,
  generateImageAlt,
  getNewsTitle,
  type Locale,
} from "@/utils/newsUtils";

// Shown in news article list view

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// This have Text and Image side by side, small and horizontal
export default function NewsGridHorizontal({
  newsList,
}: {
  newsList: NewsItem[];
}) {
  const locale = useLocale() as Locale;

  return (
    <div className={styles.grid}>
      {newsList.map((news) => {
        // Varmista että id on number-tyyppiä
        const newsId =
          typeof news.id === "string" ? parseInt(news.id, 10) : news.id;

        // Tarkista että ID on validi numero
        if (isNaN(newsId)) {
          console.warn(`Invalid news ID: ${news.id}`);
          return null;
        }

        // Luo SEO-ystävällinen URL utils-funktiolla
        const titleForUrl = getNewsTitle(news);
        const url = createNewsUrl(titleForUrl, newsId, locale);

        // Hae ensimmäinen kategoria ja formatoi se
        const firstCategory =
          news.categories && news.categories.length > 0
            ? news.categories[0].charAt(0).toUpperCase() +
              news.categories[0].slice(1)
            : null;

        // Käytä alkuperäistä getRelativeTime funktiota
        const relativeTime = news.published_at
          ? getRelativeTime(news.published_at)
          : "";

        // Geneeraa kuvan alt-teksti
        const imageAlt = generateImageAlt(news, locale);

        return (
          <article key={news.id} className={styles.card}>
            <Link href={url} className={styles.cardLink}>
              <div className={styles.content}>
                <h3 className={styles.title}>
                  {news.lead && news.lead.length > 200
                    ? `${news.lead.substring(0, 200)}...`
                    : news.lead}
                </h3>
                <div className={styles.meta}>
                  {firstCategory && (
                    <span className={styles.category}>{firstCategory}</span>
                  )}
                  {relativeTime && (
                    <time className={styles.time}>{relativeTime}</time>
                  )}
                </div>
              </div>
              <div className={styles.imgBox}>
                <Image
                  src={
                    news.hero_image_url
                      ? `${baseUrl}${news.hero_image_url}`
                      : "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={imageAlt}
                  width={72}
                  height={72}
                  className={styles.image}
                  style={{ objectFit: "cover" }}
                  sizes="72px"
                />
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
