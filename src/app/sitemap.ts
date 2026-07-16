import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/data/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/trademark",
    "/copyright",
    "/design-registration",
    "/services",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
  ];
  
  const articleRoutes = articles.map((a) => `/insights/${a.slug}`);
  const allRoutes = [...routes, ...articleRoutes];
  const now = new Date();
  
  return allRoutes.map((route) => ({
    url: `https://ipmark.in${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
