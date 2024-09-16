import fs from "fs/promises";
import path from "path";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "app", "_posts");
  const postFolders = await fs.readdir(postsDirectory);

  return postFolders.map((folder) => ({
    id: encodeURIComponent(folder),
  }));
}

export async function getPostContent(encodedId: string) {
  const id = decodeURIComponent(encodedId);
  const postsDirectory = path.join(process.cwd(), "app", "_posts");
  const postPath = path.join(postsDirectory, id);
  const filePath = path.join(postPath, "index.md");

  try {
    const content = await fs.readFile(filePath, "utf8");
    return content;
  } catch (error) {
    console.error(`Error reading post ${id}:`, error);
    return null;
  }
}
