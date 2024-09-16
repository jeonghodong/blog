import { getPostContent } from "@/app/_lib/post";
import ReactMarkdown from "react-markdown";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const decodedId = decodeURIComponent(id);
  const content = await getPostContent(id);

  if (content === null) {
    return <div className="container mx-auto p-4">포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{decodedId.replace(/-/g, " ")}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
