export interface PostData {
  slug: string;
  title: string;
  date: string;
  lastmod: string;
  excerpt: string;
  tags: string[];
  draft: boolean;
  content: string;
  thumbnail?: string;
}

export interface PostFrontMatter {
  title?: string;
  date?: string | Date;
  lastmod?: string | Date;
  excerpt?: string;
  tags?: string[];
  draft?: boolean;
  thumbnail?: string;
}

export interface PostCache {
  data: PostData[];
  timestamp: number;
}
