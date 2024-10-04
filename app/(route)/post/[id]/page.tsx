import MarkdownRenderer from "@/app/_components/MarkdownRenderer";
import { Typography } from "@/app/_components/Typography";
import { getPostContent } from "@/app/_lib/post";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const title = decodeURIComponent(id);
  const content = await getPostContent(id);

  if (content === null) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <Typography variant="headline.100">{title}</Typography>
      <MarkdownRenderer content={content} postId={title} />
    </div>
  );
}
