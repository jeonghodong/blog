import { getPostContent } from "@/app/_lib/post";
import ReactMarkdown from "react-markdown";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const decodedId = decodeURIComponent(id);
  const content = await getPostContent(id);

  console.log(content);

  if (content === null) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{decodedId.replace(/-/g, " ")}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
