/* eslint-disable @typescript-eslint/no-explicit-any */
import MarkdownRenderer from "@/app/_components/MarkdownRenderer/MarkdownRenderer";
import { Typography } from "@/app/_components/Typography/Typography";
import { getPostData } from "@/app/_lib/posts";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const post: any = getPostData(id);
  const { title, thumbnail, content, slug } = post;

  return (
    <div className="max-w-[700px] mx-auto">
      <Image src={thumbnail} alt={title} width={700} height={400} className="rounded-[12px] mb-4" />
      <Typography variant="headline.100">{title}</Typography>
      <MarkdownRenderer content={content} slug={slug} />
    </div>
  );
}
