import { createApolloClient } from "@/lib/apolloClient";
import { GET_NEWS_ITEM } from "@/graphql/queries";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { SingleNews } from "@/components/singleNews/SingleNews";
import { NewsItem } from "@/types/news";
import { SLUGS, type Locale } from "@/utils/newsUtils";

interface NewsPageParams {
  locale: Locale;
  slug: string;
  id: string;
}

export default async function NewsPage({ params }: { params: NewsPageParams }) {
  const { locale, slug, id: idWithSlug } = await params;

  // Tarkista että slug vastaa kieltä
  if (SLUGS[locale] !== slug) return notFound();

  // Pura ID slug:sta (ensimmäinen osa ennen ensimmäistä viivaa)
  const id = idWithSlug.split("-")[0];
  if (!id || !/^\d+$/.test(id)) {
    return notFound();
  }

  const headerObj = await headers();
  const nextHeaders = Object.fromEntries(headerObj.entries());

  const apolloClient = createApolloClient(nextHeaders);

  try {
    // Hae uutinen backend:lta ID:n perusteella
    const { data } = await apolloClient.query<{ newsArticle: NewsItem }>({
      query: GET_NEWS_ITEM,
      variables: { newsArticleId: id },
    });

    const news = data?.newsArticle;
    if (!news) return notFound();

    return <SingleNews news={news} locale={locale} />;
  } catch (error) {
    console.error("Error fetching news:", error);
    return notFound();
  }
}

// Metadata-generointi SEO:ta varten
export async function generateMetadata({
  params,
}: {
  params: Promise<NewsPageParams>;
}) {
  const resolvedParams = await params;
  const { locale, slug, id: idWithSlug } = resolvedParams;

  if (SLUGS[locale] !== slug) return {};

  const id = idWithSlug.split("-")[0];
  if (!id || !/^\d+$/.test(id)) return {};

  try {
    const headerObj = await headers();
    const nextHeaders = Object.fromEntries(headerObj.entries());
    const apolloClient = createApolloClient(nextHeaders);

    const { data } = await apolloClient.query<{ newsArticle: NewsItem }>({
      query: GET_NEWS_ITEM,
      variables: { newsArticleId: id },
    });

    const news = data?.newsArticle;
    if (!news) return {};

    const title = news.lead || news.summary || news.title;

    return {
      title: title,
      description: news.summary || news.content?.substring(0, 160),
      openGraph: {
        title: title,
        description: news.summary,
        url: `/${locale}/${slug}/${idWithSlug}`,
        type: "article",
        publishedTime: news.published_at,
        authors: news.author ? [news.author] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: news.summary,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}
