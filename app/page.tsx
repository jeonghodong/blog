/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Typography } from "./_components/Typography/Typography";
import { getAllPosts } from "./_lib/posts";
import { formatDate } from "./_utils/date";
import Image from "next/image";

export default async function Home() {
  const posts = getAllPosts();

  console.log("posts", posts);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* 헤더 이미지 */}
      <div className="bg-red-500 h-[130px] w-full mt-[20px] mb-[40px] rounded-[12px]" />

      <div className="flex">
        {/* 메인 컨텐츠 */}
        <div className="flex-grow mr-8">
          {/* 네비게이션 */}
          <nav className="mb-8">
            <ul className="flex space-x-6">
              <li>
                <Typography variant="body.100" className="font-bold">
                  전체
                </Typography>
              </li>
              <li>
                <Typography variant="body.100">개발</Typography>
              </li>
              <li>
                <Typography variant="body.100">디자인</Typography>
              </li>
            </ul>
          </nav>

          {/* 게시글 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post: any) => {
              console.log("post", post);
              console.log("post", post);
              return (
                <Link key={post.id} href={`/post/${encodeURIComponent(post.id)}`} className="block">
                  <div className="flex flex-col h-full">
                    <div className="bg-gray-200 h-40 rounded-[12px] mb-4 relative">{post.thumbnail ? <Image src={post.thumbnail} alt={post.title} fill className="object-cover rounded-[12px]" /> : <span className="text-gray-400">No Image</span>}</div>
                    <Typography variant="title.100_sb" className="mb-2">
                      {post.title}
                    </Typography>
                    <Typography variant="body.100" className="text-gray-600 mb-2">
                      {post.excerpt}
                    </Typography>
                    <Typography variant="body.100" className="text-gray-400 mt-auto">
                      {formatDate(post.date)}
                    </Typography>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 분리선 */}
        <div className="w-px bg-gray-200"></div>

        {/* 사이드바 */}
        <div className="w-64 pl-8">
          <Typography variant="title.100_sb" className="mb-4">
            읽기 좋은 글
          </Typography>
          <ul className="space-y-4">
            <li>
              <Typography variant="body.100" className="font-semibold">
                모던웹 | EP.6 프론트엔드 개발에서 Next.js, 꼭 써야 할까?
              </Typography>
              <Typography variant="body.100" className="text-gray-500">
                토스 프론트엔드 챕터
              </Typography>
            </li>
            <li>
              <Typography variant="body.100" className="font-semibold">
                토스 피플 #2: UX 라이팅의 새로운 기준
              </Typography>
              <Typography variant="body.100" className="text-gray-500">
                김작업
              </Typography>
            </li>
            {/* 추가 추천 글 항목들 */}
          </ul>
        </div>
      </div>
    </div>
  );
}
