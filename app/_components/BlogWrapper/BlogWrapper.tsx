"use client";

import { useState } from "react";
import { PostData } from "@/app/_lib/posts";
import PostList from "../PostList/PostList";
import Sidebar from "../SideBar/SideBar";

interface BlogWrapperProps {
  posts: PostData[];
}

export default function BlogWrapper({ posts }: BlogWrapperProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const handleTagRemove = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  const filteredPosts = selectedTags.length > 0 ? posts.filter((post) => selectedTags.some((tag) => post.tags.includes(tag))) : posts;

  return (
    <div className="flex">
      <PostList posts={filteredPosts} selectedTags={selectedTags} onTagRemove={handleTagRemove} />

      <div className="w-px bg-gray-200" />

      <Sidebar posts={posts} selectedTags={selectedTags} onTagToggle={handleTagToggle} />
    </div>
  );
}