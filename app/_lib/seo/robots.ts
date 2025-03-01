import { MetadataRoute } from "next";
import { SITE_CONFIG } from "./config";

/**
 * robots.txt 생성 함수
 */
export function generateRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
