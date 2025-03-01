/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata, ResolvingMetadata } from "next";
import { DEFAULT_METADATA, SITE_CONFIG } from "./config";
import { PostData } from "../posts";

/**
 * 정적 페이지 메타데이터 생성 함수
 */
export function createPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_CONFIG.title}`,
      description,
      url: `${SITE_CONFIG.url}${path}`,
      images: DEFAULT_METADATA.openGraph?.images,
    },
    twitter: {
      title: `${title} | ${SITE_CONFIG.title}`,
      description,
      images: DEFAULT_METADATA.twitter?.images,
    },
  };
}

/**
 * 블로그 포스트 메타데이터 생성 함수
 */
export async function createPostMetadata(post: PostData, parent: ResolvingMetadata): Promise<Metadata> {
  const { title, thumbnail, slug, tags, date, excerpt, content }: any = post;

  // 부모 메타데이터의 이미지 참조 (fallback용)
  const previousImages = (await parent)?.openGraph?.images || [];

  // 첫 150자를 설명으로 사용 (excerpt가 없는 경우)
  const description = excerpt || content.substring(0, 150).replace(/[#*`]/g, "") + "...";

  // 실제 썸네일 URL (상대 경로인 경우 절대 경로로 변환)
  const absoluteThumbnail = thumbnail.startsWith("http") ? thumbnail : `${process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url}${thumbnail}`;

  return {
    title,
    description,
    keywords: [...((DEFAULT_METADATA.keywords as string[]) || []), ...tags],
    authors: [{ name: SITE_CONFIG.author }],

    // 오픈그래프 메타데이터
    openGraph: {
      type: "article",
      title,
      description,
      url: `${SITE_CONFIG.url}/post/${slug}`,
      images: [
        {
          url: absoluteThumbnail,
          width: 1200,
          height: 630,
          alt: title,
        },
        ...previousImages,
      ],
      publishedTime: date,
      tags,
    },

    // 트위터 카드 메타데이터
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteThumbnail],
    },

    // 구조화된 데이터 (JSON-LD)
    other: {
      "structured-data": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        image: absoluteThumbnail,
        datePublished: date,
        dateModified: date,
        author: {
          "@type": "Person",
          name: SITE_CONFIG.author,
        },
        keywords: tags.join(", "),
        description,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_CONFIG.url}/post/${slug}`,
        },
      }),
    },
  };
}
