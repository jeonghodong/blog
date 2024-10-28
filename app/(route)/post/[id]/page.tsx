/* eslint-disable @typescript-eslint/no-explicit-any */
import MarkdownRenderer from "@/app/_components/MarkdownRenderer/MarkdownRenderer";
import { Typography } from "@/app/_components/Typography/Typography";
import { getPostData, PostData } from "@/app/_lib/posts";
import { formatDate } from "@/app/_utils/date";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const post: PostData = getPostData(id);
  const { title, thumbnail, content, slug, tags, date }: any = post;

  return (
    <div className="max-w-[700px] mx-auto">
      {/* Image */}
      <div className="relative w-full h-[400px] mt-[36px]">
        <Image src={thumbnail} alt={title} fill className="rounded-[12px]" />
      </div>

      {/* Title */}
      <Typography variant="headline.100" color="DEFAULT" className="mt-[20px]">
        {title}
      </Typography>

      {/* Tags */}
      <div className="flex gap-2 mt-[20px]">
        {tags.map((tag: string) => (
          <div key={tag} className="bg-gray-200 rounded-full px-2 py-1">
            <Typography variant="caption.100">#{tag}</Typography>
          </div>
        ))}
      </div>

      {/* Date */}
      <div className="mt-[20px]">
        <Typography variant="caption.100" color="2">
          {formatDate(date)}
        </Typography>
      </div>

      {/* MarkdownRenderer */}
      <div className="mt-[60px]">
        <MarkdownRenderer content={content} slug={slug} />
      </div>
    </div>
  );
}
