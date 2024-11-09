import BlogWrapper from "./_components/BlogWrapper/BlogWrapper";
import { getAllPosts } from "./_lib/posts";

export default async function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto px-4">
      {/* 헤더 이미지 */}
      <div className="relative h-[130px] w-full mt-[20px] mb-[40px] bg-lime-500 rounded-[12px] flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-4 font-bold">
          <span className="text-white text-3xl transform -rotate-6 translate-y-2 hover:-translate-y-1 transition-transform">Plan</span>
          <span className="text-white text-3xl transform rotate-3 -translate-y-1 hover:translate-y-2 transition-transform">Do</span>
          <span className="text-white text-3xl transform -rotate-3 translate-y-1 hover:-translate-y-2 transition-transform">See</span>
        </div>
      </div>

      <BlogWrapper posts={posts} />
    </div>
  );
}
