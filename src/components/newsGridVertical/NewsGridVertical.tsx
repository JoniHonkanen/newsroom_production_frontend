import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import styles from "./NewsGridVertical.module.css";
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

// This have Text and Image Column
export default function NewsGridVertical({
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

        // Geneeraa kuvan alt-teksti
        const imageAlt = generateImageAlt(news, locale);

        // Käytä getRelativeTime funktiota, varmista että päivämäärä on olemassa
        const displayDate =
          news.published_at || news.updated_at || news.created_at;
        const relativeTime = displayDate ? getRelativeTime(displayDate) : "";

        return (
          <article key={news.id} className={styles.card}>
            <Link href={url} className={styles.cardLink}>
              <div className={styles.imgBox}>
                <Image
                  src={
                    news.hero_image_url
                      ? `${baseUrl}${news.hero_image_url}`
                      : "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={imageAlt}
                  width={250}
                  height={200}
                  className={styles.image}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 250px"
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>
                  {news.lead && news.lead.length > 200
                    ? `${news.lead.substring(0, 200)}...`
                    : news.lead}
                </h3>
                {relativeTime && (
                  <time className={styles.time}>{relativeTime}</time>
                )}
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
