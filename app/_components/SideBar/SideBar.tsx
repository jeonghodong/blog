"use client";

import Link from "next/link";
import { Typography } from "../Typography/Typography";
import { PostData } from "@/app/_lib/posts";

interface SidebarProps {
  posts: PostData[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export default function Sidebar({ posts, selectedTags, onTagToggle }: SidebarProps) {
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  return (
    <div className="w-64 pl-8">
      {/* 읽기 좋은 글 섹션 */}
      <Typography variant="caption.100">읽기 좋은 글</Typography>
      <ul className="space-y-4 mt-[12px] mb-[24px]">
        {posts.length > 0 && (
          <li>
            <Link href={`/post/${encodeURIComponent(posts[0].slug)}`}>
              <Typography variant="body.100_sb">{posts[0].title}</Typography>
              <Typography variant="caption.100" className="text-gray-500">
                {posts[0].excerpt}
              </Typography>
            </Link>
          </li>
        )}
      </ul>

      {/* 태그 목록 */}
      <Typography variant="caption.100">태그</Typography>
      <div className="flex flex-wrap gap-2 mt-[12px] mb-[24px]">
        {allTags.map((tag) => (
          <button key={tag} onClick={() => onTagToggle(tag)} className={`inline-block px-3 py-1 rounded-full text-sm transition-colors ${selectedTags.includes(tag) ? "bg-primary-4 text-white hover:bg-primary-3" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
            <Typography variant="caption.100" className={selectedTags.includes(tag) ? "text-white" : ""}>
              {tag}
            </Typography>
          </button>
        ))}
      </div>
    </div>
  );
}
