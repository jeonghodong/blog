import Link from "next/link";
import { ExampleUsage } from "./_components/MarkdownRenderer";
import { Typography, TypographyShowcase } from "./_components/Typography";
import { getPosts } from "./_lib/posts";

export default async function Home() {
  const posts = await getPosts();

  console.log("posts", posts);

  return (
    <div>
      <Typography variant="title.100_sb">토스 블로그</Typography>
      <Typography variant="body.100">최신 게시글 목록</Typography>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <Typography variant="body.100">{post.title}</Typography>
            </Link>
          </li>
        ))}
      </ul>
      <TypographyShowcase />
      <ExampleUsage />
    </div>
  );
}
