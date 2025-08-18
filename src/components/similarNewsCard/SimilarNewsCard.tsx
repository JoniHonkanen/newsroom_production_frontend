import Link from "next/link";
import styles from "./SimilarNewsCard.module.css";
import Image from "next/image";
import { 
  createNewsUrl,
  generateImageAlt,
  formatCategories,
  getNewsTitle,
  type Locale 
} from "@/utils/newsUtils";

// LAYOUT OF ONE SIMILAR ARTICLE CARD (shown in single article page (bottom part))

interface SimilarNewsCardProps {
  news: {
    id: string | number;
    language?: string;
    lead?: string;
    summary?: string;
    title?: string;
    published_at?: string;
    updated_at?: string;
    image_url?: string;
    categories?: string[];
    hero_image_url?: string;
  };
  locale?: string;
  isLast?: boolean;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function SimilarNewsCard({
  news,
  locale = "fi",
  isLast,
}: SimilarNewsCardProps) {
  // Varmista että id on number-tyyppiä
  const newsId = typeof news.id === 'string' ? parseInt(news.id, 10) : news.id;
  
  // Tarkista että ID on validi numero
  if (isNaN(newsId)) {
    console.warn(`Invalid news ID: ${news.id}`);
    return null;
  }

  // Käytä utils-funktioita
  const titleForUrl = getNewsTitle(news);
  const url = createNewsUrl(titleForUrl, newsId, locale as Locale);
  const imageAlt = generateImageAlt(news, locale as Locale);

  // Tekstin katkaisufunktio (säilytetään koska spesifinen tälle komponentille)
  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  // Käytä utils-funktiota päivämäärän formatointiin, mutta custom short format
  const formatShortDate = (dateString?: string) => {
    if (!dateString) return "";

    try {
      return new Date(dateString).toLocaleDateString(locale, {
        day: "numeric",
        month: "short",
      });
    } catch {
      return "";
    }
  };

  const displayTitle = getNewsTitle(news);
  const formattedCategories = news.categories ? formatCategories(news.categories) : [];

  return (
    <Link href={url} className={styles.cardLink}>
      <article className={`${styles.card} ${isLast ? styles.noBorder : ""}`}>
        <div className={styles.content}>
          {formattedCategories.length > 0 && (
            <div className={styles.category}>
              {formattedCategories.join(" • ")}
            </div>
          )}

          <h3 className={styles.title}>{truncateText(displayTitle)}</h3>

          <time className={styles.meta}>
            {formatShortDate(news.published_at || news.updated_at)}
          </time>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={
              news.hero_image_url
                ? `${baseUrl}${news.hero_image_url}`
                : "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
            }
            alt={imageAlt}
            width={100}
            height={100}
            className={styles.image}
            style={{ objectFit: "cover" }}
            sizes="100px"
          />
        </div>
      </article>
    </Link>
  );
}