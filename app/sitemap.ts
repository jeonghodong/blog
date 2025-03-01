import { MetadataRoute } from "next";
import { generateSitemap } from "./_lib/seo/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}
