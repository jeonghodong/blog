// app/page.tsx
import Link from "next/link";
import { getPosts } from "./_lib/posts";

export default async function Home() {
  const posts = await getPosts();

  console.log("posts", posts);
  console.log("posts", posts);
  console.log("posts", posts);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/post/${post.id}`}>
              <span className="text-blue-500 hover:underline cursor-pointer">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
