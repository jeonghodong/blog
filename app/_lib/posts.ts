// app/_lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostData {
  id: string;
  title: string;
  date: string;
  lastmod: string;
  excerpt: string;
  tags: string[];
  draft: boolean;
  content: string;
}

/**
 * 포스트 데이터를 가져오는 함수
 * @param encodedId - 인코딩된 포스트 ID
 * @returns PostData - 포스트 데이터
 */
export function getPostData(encodedId: string): PostData {
  try {
    const id = decodeURIComponent(encodedId);
    const postsDirectory = path.join(process.cwd(), "public", "blog-posts");
    const postPath = path.join(postsDirectory, id);
    const filePath = path.join(postPath, "index.md");

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents); // matter 결과를 구조분해

    return {
      id,
      title: data.title || id,
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      lastmod: data.lastmod ? new Date(data.lastmod).toISOString() : new Date(data.date).toISOString(),
      excerpt: data.excerpt || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      draft: data.draft ?? false,
      content: content.trim(), // frontmatter가 제거된 순수 content
    };
  } catch (error) {
    console.error(`Error reading post ${encodedId}:`, error);
    throw error;
  }
}

/**
 * 모든 포스트 데이터를 가져오는 함수
 * @returns PostData[] - 모든 포스트 데이터
 */
export function getAllPosts(): PostData[] {
  try {
    const postsDirectory = path.join(process.cwd(), "public", "blog-posts");

    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Posts directory not found: ${postsDirectory}`);
      return [];
    }

    // 숨김 파일/폴더 제외하고 디렉토리만 필터링
    const postFolders = fs
      .readdirSync(postsDirectory, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("."))
      .map((dirent) => dirent.name);

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

    return allPostsData;
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
}

/**
 * 포스트 경로가 유효한지 확인하는 함수
 * @param encodedId - 인코딩된 포스트 ID
 * @returns boolean - 포스트 경로가 유효한지 여부
 */
export function isValidPostPath(encodedId: string): boolean {
  if (!encodedId) return false;

  try {
    const id = decodeURIComponent(encodedId);
    const postsDirectory = path.join(process.cwd(), "public", "blog-posts");
    const postPath = path.join(postsDirectory, id);
    const filePath = path.join(postPath, "index.md");

    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

/**
 * 특정 태그를 가진 포스트를 가져오는 함수
 * @param tag - 태그
 * @returns PostData[] - 특정 태그를 가진 포스트 데이터
 */
export function getPostsByTag(tag: string): PostData[] {
  return getAllPosts().filter((post) => post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>(posts.flatMap((post) => post.tags).map((tag) => tag.toLowerCase()));
  return Array.from(tagSet);
}
