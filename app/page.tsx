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

//작업 거의 다 끝남 아래 디테일한 작업만 진행하면 됨~~
//작업 거의 다 끝남 아래 디테일한 작업만 진행하면 됨~~
//작업 거의 다 끝남 아래 디테일한 작업만 진행하면 됨~~
//작업 거의 다 끝남 아래 디테일한 작업만 진행하면 됨~~

// 헤더 문구 정해야함 뭐할래
// 메인 배너 작업해야함
// 다크모드 작업
// 코드 분리 및 합성 작업
// 포폴 및 이력서 같은 경우는 어떠한 구조로 작업할 것 인가 / 하나의 레포에 합쳐? 아니면 서브도메인으로 분리해? 아니면 모노레포??? 흠
// 뱃지 간격이 안맞노

// 배포 뭐로 할래 SST?
// 블로그 게시글은 내가 시도해본 사이드들을 잘 올려보자
// 블로그 작업 끝나고 이력서 작업 재시작해보자 우선 노션 이력서 작업 먼저 완성하고 그 다음에 경력기술서, 이력서 작업하자
