/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { PostCache, PostData, PostFrontMatter } from "./types";

// 타입 정의

// 캐시 관련 상수
const CACHE_TTL = 5 * 60 * 1000; // 5분
let postsCache: PostCache | null = null;

// 유틸리티 함수들
const getPostsDirectory = (): string => path.join(process.cwd(), "public", "blog-posts");
const getPostPath = (slug: string): string => path.join(getPostsDirectory(), slug, "index.md");

// 순수 함수들
const decodeSlug = (encodedSlug: string): string => decodeURIComponent(encodedSlug);
const formatDate = (date: string | Date): string => new Date(date).toISOString();
const normalizeTag = (tag: string): string => tag.toLowerCase();
const isDraft = (data: PostFrontMatter): boolean => data.draft ?? false;
const getThumbnailPath = (slug: string, thumbnail?: string): string => (thumbnail ? `/blog-posts/${slug}/images/${thumbnail}` : "");

// 파일 시스템 관련 함수들
const readFile = (filePath: string): string => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
};

const getPostFolders = (): string[] => {
  const postsDirectory = getPostsDirectory();
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Posts directory not found: ${postsDirectory}`);
    return [];
  }

  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("."))
    .map((dirent) => dirent.name);
};

// 포스트 데이터 처리 함수들
const parsePostContent = (fileContents: string, slug: string): PostData => {
  const { data, content } = matter(fileContents) as { data: PostFrontMatter; content: string };

  return {
    slug,
    title: data.title || slug,
    date: data.date ? formatDate(data.date) : formatDate(new Date()),
    lastmod: data.lastmod ? formatDate(data.lastmod) : formatDate(data.date || new Date()),
    excerpt: data.excerpt || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    draft: isDraft(data),
    content: content.trim(),
    thumbnail: getThumbnailPath(slug, data.thumbnail),
  };
};

const getPostData = (encodedSlug: string): PostData => {
  try {
    const slug = decodeSlug(encodedSlug);
    const filePath = getPostPath(slug);
    const fileContents = readFile(filePath);
    return parsePostContent(fileContents, slug);
  } catch (error) {
    console.error(`Error reading post ${encodedSlug}:`, error);
    throw error;
  }
};

const getAllPosts = (): PostData[] => {
  // 캐시가 유효한 경우 캐시된 데이터 반환
  if (postsCache && Date.now() - postsCache.timestamp < CACHE_TTL) {
    return postsCache.data;
  }

  try {
    const postFolders = getPostFolders();
    const allPostsData = postFolders
      .map((folderName) => {
        try {
          return getPostData(folderName);
        } catch (error) {
          console.error(`Skipping post ${folderName} due to error:`, error);
          return null;
        }
      })
      .filter((post): post is PostData => post !== null && !post.draft)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // 캐시 업데이트
    postsCache = {
      data: allPostsData,
      timestamp: Date.now(),
    };

    return allPostsData;
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
};

const isValidPostPath = (encodedId: string): boolean => {
  if (!encodedId) return false;

  try {
    const id = decodeSlug(encodedId);
    const filePath = getPostPath(id);
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
};

const getPostsByTag = (tag: string): PostData[] => {
  const normalizedTag = normalizeTag(tag);
  return getAllPosts().filter((post) => post.tags.some((t) => normalizeTag(t) === normalizedTag));
};

const getAllTags = (): string[] => {
  const posts = getAllPosts();
  const tagSet = new Set<string>(posts.flatMap((post) => post.tags).map(normalizeTag));
  return Array.from(tagSet);
};

// 외부로 노출할 함수들
export { getPostData, getAllPosts, isValidPostPath, getPostsByTag, getAllTags };
