import MarkdownRenderer from "@/app/_components/MarkdownRenderer/MarkdownRenderer";
import { Typography } from "@/app/_components/Typography/Typography";
import { getPostData } from "@/app/_lib/posts";

// TODO: 디테일 페이지에 섬네일 위에 렌더되도록
// TODO: 디테일 페이지에 섬네일 위에 렌더되도록
// TODO: 디테일 페이지에 섬네일 위에 렌더되도록
// TODO: 디테일 페이지에 섬네일 위에 렌더되도록
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const post = getPostData(id);

  const title = decodeURIComponent(id);

  return (
    <div className="max-w-[700px] mx-auto">
      <Typography variant="headline.100">{title}</Typography>
      <MarkdownRenderer content={post.content} postId={title} />
    </div>
  );
}
