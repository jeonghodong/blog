import { Metadata } from "next";
import { createPageMetadata } from "@/app/_lib/seo/metadata";

export const metadata: Metadata = createPageMetadata("Resume", "저의 이력과 기술 스택, 프로젝트 경험을 소개합니다.", "/resume");

const page = () => {
  return <div className="h-[100%] w-[100%]"></div>;
};

export default page;
