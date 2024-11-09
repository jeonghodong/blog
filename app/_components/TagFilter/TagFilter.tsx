"use client";

import { useState } from "react";
import { Typography } from "../Typography/Typography";
import { PostData } from "@/app/_lib/posts";

interface TagFilterProps {
  posts: PostData[];
  onFilterChange: (filteredPosts: PostData[]) => void;
}

export default function TagFilter({ posts, onFilterChange }: TagFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 모든 고유 태그 추출
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  // 태그 선택/해제 처리
  const handleTagToggle = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag];

    setSelectedTags(newSelectedTags);

    // 선택된 태그에 따라 게시글 필터링
    const filtered = newSelectedTags.length > 0 ? posts.filter((post) => newSelectedTags.every((tag) => post.tags.includes(tag))) : posts;

    onFilterChange(filtered);
  };

  return (
    <>
      {/* 선택된 태그 표시 영역 */}
      {selectedTags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <button key={tag} onClick={() => handleTagToggle(tag)} className="inline-flex items-center px-3 py-1 bg-lime-500 text-white rounded-full text-sm gap-2 hover:bg-lime-600 transition-colors">
              <span>{tag}</span>
              <span className="text-xs">×</span>
            </button>
          ))}
          <button
            onClick={() => {
              setSelectedTags([]);
              onFilterChange(posts);
            }}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            초기화
          </button>
        </div>
      )}

      {/* 태그 목록 */}
      <div className="flex flex-wrap gap-2 mt-[12px] mb-[24px]">
        {allTags.map((tag) => (
          <button key={tag} onClick={() => handleTagToggle(tag)} className={`inline-block px-3 py-1 rounded-full text-sm transition-colors ${selectedTags.includes(tag) ? "bg-lime-500 text-white hover:bg-lime-600" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
            <Typography variant="caption.100" className={selectedTags.includes(tag) ? "text-white" : ""}>
              {tag}
            </Typography>
          </button>
        ))}
      </div>
    </>
  );
}
