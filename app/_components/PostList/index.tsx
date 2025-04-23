"use client";

import { formatDate } from "@/app/_utils/date";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../Typography";
import { PostCardProps, PostContentProps, PostGridProps, PostListProps, PostThumbnailProps, SelectedTagsProps, TagChipProps } from "./types";

// 유틸리티 함수들
const getPostUrl = (slug: string): string => `/post/${encodeURIComponent(slug)}`;

// 순수 컴포넌트들
const TagChip: React.FC<TagChipProps> = ({ tag, onRemove }) => (
  <button onClick={() => onRemove(tag)} className="inline-flex items-center px-3 py-1 bg-primary-4 text-white rounded-full text-sm gap-2 hover:bg-primary-3 transition-all [&>span:last-child]:hover:opacity-100">
    <span>{tag}</span>
    <span className="text-xs opacity-60 transition-opacity">×</span>
  </button>
);

const PostThumbnail: React.FC<PostThumbnailProps> = ({ thumbnail, title }) => (
  <div className="w-[140px] h-[100px] flex-shrink-0 relative">
    {thumbnail ? (
      <Image src={thumbnail} alt={title} fill className="object-cover rounded-[12px]" />
    ) : (
      <div className="w-full h-full bg-gray-200 rounded-[12px] flex items-center justify-center">
        <span className="text-gray-400">No Image</span>
      </div>
    )}
  </div>
);

const PostContent: React.FC<PostContentProps> = ({ title, excerpt, date }) => (
  <div className="flex-1 flex flex-col min-w-0">
    <Typography variant="title.100_sb" className="mb-1 md:mb-2 line-clamp-2">
      {title}
    </Typography>
    <Typography variant="body.100" className="text-gray-600 mb-1 md:mb-2 line-clamp-2 hidden md:block">
      {excerpt}
    </Typography>
    <Typography variant="caption.100" className="text-gray-400 mt-auto">
      {formatDate(date)}
    </Typography>
  </div>
);

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <Link href={getPostUrl(post.slug)} className="block">
    <div className="flex gap-4">
      <PostContent title={post.title} excerpt={post.excerpt} date={post.date} />
      <PostThumbnail thumbnail={post.thumbnail} title={post.title} />
    </div>
  </Link>
);

const SelectedTags: React.FC<SelectedTagsProps> = ({ tags, onRemove }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {tags.map((tag) => (
      <TagChip key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </div>
);

const PostGrid: React.FC<PostGridProps> = ({ posts }) => (
  <div className="grid grid-cols-1 gap-8">
    {posts.map((post) => (
      <PostCard key={post.slug} post={post} />
    ))}
  </div>
);

// 메인 컴포넌트
const PostList: React.FC<PostListProps> = ({ posts, selectedTags, onTagRemove }) => (
  <div className="flex-grow mr-0 md:mr-8">
    {selectedTags.length > 0 && <SelectedTags tags={selectedTags} onRemove={onTagRemove} />}
    <PostGrid posts={posts} />
  </div>
);

export default PostList;
