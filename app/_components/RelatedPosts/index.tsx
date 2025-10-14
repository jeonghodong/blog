"use client";

import { PostData } from "@/app/_lib/types";
import { Typography } from "../Typography";
import Image from "next/image";
import Link from "next/link";

interface RelatedPostsProps {
  currentPost: PostData;
  allPosts: PostData[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPost, allPosts }) => {
  // 현재 포스트와 같은 태그를 가진 포스트들을 찾음
  const relatedPosts = allPosts
    .filter((post) => {
      // 현재 포스트는 제외
      if (post.slug === currentPost.slug) return false;

      // 같은 태그를 하나라도 공유하는 포스트만 필터링
      return post.tags.some((tag) => currentPost.tags.includes(tag));
    })
    .slice(0, 3); // 최대 3개만 표시

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-20 pt-8 border-t border-light-border dark:border-dark-border mb-20">
      <Typography variant="headline.200" color="DEFAULT" className="mb-6">
        관련 포스팅
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.slug} href={`/post/${encodeURIComponent(post.slug)}`} className="block group">
            <div className="flex flex-col h-full">
              {/* 썸네일 */}
              <div className="relative w-full h-[180px] mb-4 overflow-hidden rounded-[12px]">
                {post.thumbnail ? (
                  <Image src={post.thumbnail} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-dark-bg-1 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
              </div>

              {/* 제목 */}
              <Typography variant="title.100_sb" color="DEFAULT" className="mb-2 line-clamp-2 group-hover:text-primary-4 transition-colors">
                {post.title}
              </Typography>

              {/* 설명 */}
              <Typography variant="body.200" color="2" className="mb-3 line-clamp-2 flex-grow">
                {post.excerpt}
              </Typography>

              {/* 태그 */}
              <div className="flex gap-2 flex-wrap">
                {post.tags.slice(0, 2).map((tag) => (
                  <div key={tag} className="bg-gray-200 dark:bg-dark-bg-1 rounded-full inline-flex items-center px-2 py-1">
                    <Typography variant="caption.100" color="DEFAULT">
                      #{tag}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
