/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata, ResolvingMetadata } from "next";
import MarkdownRenderer from "@/app/_components/MarkdownRenderer";
import TableOfContents from "@/app/_components/TableOfContents";
import { Typography } from "@/app/_components/Typography";
import RelatedPosts from "@/app/_components/RelatedPosts";
import JsonLd from "@/app/_components/JsonLd";
import { getPostData, getAllPosts } from "@/app/_lib/posts";
import { formatDate } from "@/app/_utils/date";
import Image from "next/image";
import { createPostMetadata } from "@/app/_lib/seo/metadata";
import { PostData } from "@/app/_lib/types";
import { SITE_CONFIG } from "@/app/_lib/seo/config";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const { id } = params;
  const post: PostData = getPostData(id);
  return createPostMetadata(post, parent);
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const post: PostData = getPostData(id);
  const allPosts: PostData[] = getAllPosts();
  const { title, thumbnail, content, slug, tags, date, lastmod }: any = post;

  // 절대 URL로 변환
  const absoluteThumbnail = thumbnail.startsWith("http") ? thumbnail : `${SITE_CONFIG.url}${thumbnail}`;
  const postUrl = `${SITE_CONFIG.url}/post/${slug}`;

  // JSON-LD 구조화된 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: absoluteThumbnail,
    datePublished: date,
    dateModified: lastmod || date,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.title,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/images/og_image.png`,
      },
    },
    keywords: tags.join(", "),
    description: post.excerpt || content.substring(0, 150).replace(/[#*`]/g, "") + "...",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="relative max-w-[700px] mx-auto px-4">
      {/* 기존 내용 */}
      <div className="flex justify-between">
        <div className="w-full lg:w-[700px]">
          {/* Image */}
          <div className="relative w-full h-[250px] md:h-[400px] mt-[36px]">
            <Image src={thumbnail} alt={title} fill className="rounded-[12px] object-cover" />
          </div>

          {/* Title */}
          <Typography variant="headline.100" color="DEFAULT" className="mt-[20px]">
            {title}
          </Typography>

          {/* Tags */}
          <div className="flex gap-2 mt-[20px]">
            {tags.map((tag: string) => (
              <div key={tag} className="bg-gray-200 dark:bg-dark-bg-1 rounded-full inline-flex items-center px-3 py-1">
                <Typography variant="caption.100" color="DEFAULT">
                  #{tag}
                </Typography>
              </div>
            ))}
          </div>

          {/* Date */}
          <div className="mt-[20px]">
            <Typography variant="caption.100" color="2">
              {formatDate(date)}
            </Typography>
          </div>

          {/* MarkdownRenderer */}
          <div className="mt-[60px]">
            <MarkdownRenderer content={content} slug={slug} />
          </div>

          {/* Related Posts */}
          <RelatedPosts currentPost={post} allPosts={allPosts} />
        </div>

        {/* Table of Contents */}
        <TableOfContents content={content} />
      </div>
      </div>
    </>
  );
}
