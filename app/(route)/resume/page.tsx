import { Typography } from "@/app/_components/Typography";
import { createPageMetadata } from "@/app/_lib/seo/metadata";
import { Metadata } from "next";
import ProjectSection from "./_components/ProjectSection";
import { resumeData } from "./_constants/data";
import SkillSection from "./_components/SkillSection";

export const metadata: Metadata = createPageMetadata(
  "Resume",
  "저의 이력과 기술 스택, 프로젝트 경험을 소개합니다.",
  "/resume"
);

const page = () => {
  return (
    <div className="min-h-screen py-10 px-4 md:px-6 max-w-7xl mx-auto">
      {/* 헤더 부분 */}
      <div className="mb-12 text-center">
        <Typography variant="headline.100" className="mb-8">
          {resumeData.header.title}
        </Typography>
        <Typography
          variant="body.100"
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto whitespace-pre-line"
        >
          {resumeData.header.description}
        </Typography>
      </div>

      {/* 경력 섹션 */}
      <section className="mb-16">
        <Typography
          variant="headline.200"
          className="mb-8 pb-2 border-b border-gray-200 dark:border-gray-700"
        >
          경력
        </Typography>
        <ProjectSection
          sectionData={resumeData.experiences}
          sectionId="experience"
        />
      </section>

      {/* 사이드 프로젝트 섹션 */}
      <section className="mb-16">
        <Typography
          variant="headline.200"
          className="mb-8 pb-2 border-b border-gray-200 dark:border-gray-700"
        >
          사이드 프로젝트
        </Typography>
        <ProjectSection
          sectionData={resumeData.sideProjects}
          sectionId="sideProject"
        />
      </section>

      {/* 스킬 섹션 */}
      <section className="mb-16">
        <Typography
          variant="headline.200"
          className="mb-8 pb-2 border-b border-gray-200 dark:border-gray-700"
        >
          기술 스택
        </Typography>
        <SkillSection skillData={resumeData.skills} />
      </section>
    </div>
  );
};

export default page;
