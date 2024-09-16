// app/lib/posts.ts
import fs from "fs/promises";
import path from "path";

export interface Post {
  id: string;
  title: string;
}

export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), "app", "_posts");
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });

  const postFolders = entries.filter((entry) => entry.isDirectory() && entry.name !== ".obsidian");

  const posts = postFolders.map((folder) => ({
    id: folder.name,
    title: folder.name.replace(/-/g, " "), // Replace hyphens with spaces for better readability
  }));

  return posts;
}
