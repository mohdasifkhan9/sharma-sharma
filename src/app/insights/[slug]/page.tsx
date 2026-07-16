import { notFound } from "next/navigation";
import { articles } from "@/data/insights";
import { ArticleClient } from "@/components/article-client";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Find related articles
  const relatedArticles = articles.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  ).slice(0, 3);

  // Find prev/next articles
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <ArticleClient
      article={article}
      relatedArticles={relatedArticles}
      prevArticle={prevArticle}
      nextArticle={nextArticle}
    />
  );
}
