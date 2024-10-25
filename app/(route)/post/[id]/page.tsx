import MarkdownRenderer from "@/app/_components/MarkdownRenderer/MarkdownRenderer";
import { Typography } from "@/app/_components/Typography/Typography";
import { getPostData } from "@/app/_lib/posts";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const post = getPostData(id);

  console.log("post", post);
  const title = decodeURIComponent(id);
  // const content = await getPostContent(id);

  // if (content === null) {
  //   return <div>포스트를 찾을 수 없습니다.</div>;
  // }

  return (
    <div className="max-w-[700px] mx-auto">
      <Typography variant="headline.100">{title}</Typography>
      <MarkdownRenderer content={post.content} postId={title} />
    </div>
  );
}
