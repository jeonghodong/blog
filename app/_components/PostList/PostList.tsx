"use client";

import { PostData } from "@/app/_lib/posts";
import { formatDate } from "@/app/_utils/date";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../Typography/Typography";

interface PostListProps {
  posts: PostData[];
  selectedTags: string[];
  onTagRemove: (tag: string) => void;
}

export default function PostList({ posts, selectedTags, onTagRemove }: PostListProps) {
  return (
    <div className="flex-grow mr-8">
      {/* 선택된 태그 표시 영역 */}
      <div className="flex flex-wrap gap-2">
        {selectedTags.map((tag) => (
          <button key={tag} onClick={() => onTagRemove(tag)} className="inline-flex items-center px-3 py-1 bg-primary-4 text-white rounded-full text-sm gap-2 hover:bg-primary-3 transition-all [&>span:last-child]:hover:opacity-100">
            <span>{tag}</span>
            <span className="text-xs opacity-60 transition-opacity">×</span>
          </button>
        ))}
      </div>

      {/* 게시글 목록 */}
      <div className={`grid grid-cols-1 gap-8 transition-transform duration-300 ease-out ${selectedTags.length > 0 ? "translate-y-[28px]" : "translate-y-0"}`}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/post/${encodeURIComponent(post.slug)}`} className="block">
            <div className="flex gap-8">
              {/* 콘텐츠 (80%) */}
              <div className="w-4/5 flex flex-col">
                <Typography variant="title.100_sb" className="mb-2">
                  {post.title}
                </Typography>
                <Typography variant="body.100" className="text-gray-600 mb-2">
                  {post.excerpt}
                </Typography>
                <Typography variant="body.100" className="text-gray-400 mt-auto">
                  {formatDate(post.date)}
                </Typography>
              </div>

              {/* 섬네일 (20%) */}
              <div className="w-1/5 h-[100px] relative">
                {post.thumbnail ? (
                  <Image src={post.thumbnail} alt={post.title} fill className="object-cover rounded-[12px]" />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-[12px] flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
