import BlogWrapper from "./_components/BlogWrapper/BlogWrapper";
import { getAllPosts } from "./_lib/posts";

export default async function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto px-4">
      <div className="relative h-[130px] w-full mt-[20px] mb-[40px] bg-light-border dark:bg-dark-border rounded-[12px] flex items-center justify-center overflow-hidden">
        <div className="flex flex-col w-full h-full p-4">
          {/* 터미널 스타일 헤더 */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-500 ml-2">~/terminal</span>
          </div>

          {/* 터미널 콘텐츠 */}
          <div className="font-mono">
            <span className="text-green-500">guest@devblog</span>
            <span className="text-gray-500">:~$</span>
            <span className="ml-2">echo &quot;Welcome to My Dev Blog&quot;</span>
            <div className="text-lg font-bold mt-1">Welcome to My Dev Blog</div>
          </div>
        </div>
      </div>

      <BlogWrapper posts={posts} />
    </div>
  );
}
