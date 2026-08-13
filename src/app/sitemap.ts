import { MetadataRoute } from "next";
import { navigation } from "@/data/site";
import { productCategories } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kenyagenerators.co.ke";

  // Static pages from navigation
  const staticPages = navigation
    .filter((n) => !n.children)
    .map((n) => ({
      url: `${baseUrl}${n.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: n.href === "/" ? 1 : 0.8,
    }));

  // Product category pages
  const productPages = productCategories.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Services sub-pages
  const servicePages = [
    { url: `${baseUrl}/services#electrical`, priority: 0.6 },
    { url: `${baseUrl}/services#maintenance`, priority: 0.6 },
    { url: `${baseUrl}/services#installation`, priority: 0.6 },
  ].map((s) => ({
    ...s,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...staticPages,
    ...productPages,
    ...servicePages,
  ];
}