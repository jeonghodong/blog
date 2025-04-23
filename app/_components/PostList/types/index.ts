import { PostData } from "@/app/_lib/types";

export interface PostListProps {
  posts: PostData[];
  selectedTags: string[];
  onTagRemove: (tag: string) => void;
}

export interface TagChipProps {
  tag: string;
  onRemove: (tag: string) => void;
}

export interface PostCardProps {
  post: PostData;
}

export interface PostThumbnailProps {
  thumbnail?: string;
  title: string;
}

export interface PostContentProps {
  title: string;
  excerpt: string;
  date: string;
}

export interface SelectedTagsProps {
  tags: string[];
  onRemove: (tag: string) => void;
}

export interface PostGridProps {
  posts: PostData[];
}
