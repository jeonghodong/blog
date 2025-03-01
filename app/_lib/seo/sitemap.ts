import { MetadataRoute } from "next";
import { getAllPosts } from "../posts";
import { SITE_CONFIG } from "./config";

/**
 * 사이트맵 생성 함수
 */
export function generateSitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const posts = getAllPosts();

  // 블로그 포스트 URL 생성
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 정적 페이지 URL 추가
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // 모든 URL 합치기
  return [...staticPages, ...postUrls];
}
