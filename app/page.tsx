import BlogWrapper from "./_components/BlogWrapper";
import { getAllPosts } from "./_lib/posts";

export default async function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto px-4">
      <BlogWrapper posts={posts} />
    </div>
  );
}
