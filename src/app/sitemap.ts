import type { MetadataRoute } from "next";
import { getDictionary } from "@/content";
import { defaultLocale } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const { insights } = getDictionary(defaultLocale);
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/insights`, changeFrequency: "weekly", priority: 0.8 },
    ...insights.map((item) => ({
      url: `${base}/insights/${item.slug}`,
      lastModified: new Date(item.publishDate),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
