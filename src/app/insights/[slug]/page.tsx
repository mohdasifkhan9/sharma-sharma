import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/data/insights";
import { ArticleClient } from "@/components/article-client";
import { site } from "@/lib/site";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | IP Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `${site.url}/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${site.url}/insights/${article.slug}`,
      siteName: site.name,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [site.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Find related articles
  const relatedArticles = articles
    .filter((a) => article.relatedSlugs.includes(a.slug))
    .slice(0, 3);

  // Find prev/next articles
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  const articleSchema = getArticleSchema({
    title: article.title,
    description: article.excerpt,
    url: `${site.url}/insights/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Insights", url: `${site.url}/insights` },
    { name: article.title, url: `${site.url}/insights/${article.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArticleClient
        article={article}
        relatedArticles={relatedArticles}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
      />
    </>
  );
}
