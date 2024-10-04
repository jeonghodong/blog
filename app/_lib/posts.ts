import fs from "fs/promises";
import path from "path";

export interface Post {
  id: string;
  title: string;
}

export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), "public", "blog-posts");
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });

  const postFolders = entries.filter((entry) => entry.isDirectory());

  const posts = postFolders.map((folder) => ({
    id: folder.name,
    title: folder.name.replace(/-/g, " "), // 하이픈을 공백으로 변경하여 가독성 향상
  }));

  return posts;
}
