"use client";

import { Typography } from "@/app/_components/Typography/Typography";
import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  period: string;
  description: string;
  contributions: string[];
  techStack: string[];
}

interface Experience {
  company: string;
  period: string;
  projects: Project[];
}

interface SectionProps {
  sectionData: Experience[];
  sectionId: string; // 각 섹션을 고유하게 식별하기 위한 ID
}

// 리팩토링 필요
// 리팩토링 필요
// 리팩토링 필요
// 리팩토링 필요
// 리팩토링 필요
export default function ProjectSection({ sectionData, sectionId }: SectionProps) {
  // 현재 활성화된 프로젝트를 저장 (섹션ID, 회사 인덱스, 프로젝트 인덱스)
  const [activeProject, setActiveProject] = useState<{
    sectionId: string;
    expIndex: number;
    projIndex: number;
  } | null>(null);

  // 각 프로젝트에 대한 ref 저장
  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    // Intersection Observer 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) {
              const [section, expIndex, projIndex] = id.split("-");
              setActiveProject({
                sectionId: section,
                expIndex: Number(expIndex),
                projIndex: Number(projIndex),
              });
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px" }
    );

    // 모든 프로젝트 요소 관찰 시작
    projectRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    // 컴포넌트 언마운트 시 observer 정리
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="space-y-16">
      {sectionData.map((experience, expIndex) => (
        <div key={expIndex} className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 왼쪽 고정 사이드바 (회사 정보) - 모바일에서는 상단에 고정 */}
          <div className="md:col-span-3 md:sticky md:top-[80px] self-start sticky top-0 bg-light-bg dark:bg-dark-bg z-10 py-2">
            <Typography variant="title.200_sb" className="mb-1">
              {experience.company}
            </Typography>
            <Typography variant="body.200" className="text-gray-600 dark:text-gray-400">
              {experience.period}
            </Typography>
          </div>

          {/* 오른쪽 스크롤 영역 (프로젝트 상세) */}
          <div className="md:col-span-9 overflow-x-hidden">
            {experience.projects.map((project, projIndex) => (
              <div
                key={projIndex}
                className={`border-l-2 pl-4 md:pl-6 pb-8 mb-12 transition-all duration-500 ${
                  activeProject?.sectionId === sectionId && //
                  activeProject?.expIndex === expIndex && //
                  activeProject?.projIndex === projIndex //
                    ? "border-l-2 border-primary dark:border-primary-4 translate-x-1 md:translate-x-2"
                    : "border-gray-200 dark:border-gray-700"
                }`}
                ref={(el) => {
                  if (el) {
                    projectRefs.current.set(`${sectionId}-${expIndex}-${projIndex}`, el);
                  }
                }}
                data-id={`${sectionId}-${expIndex}-${projIndex}`}
              >
                <Typography variant="title.100_sb" className="mb-2 pt-4">
                  {project.title}
                </Typography>
                <Typography variant="body.200" className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.period}
                </Typography>

                <div className="space-y-6">
                  <div>
                    <Typography variant="body.200_sb" className="mb-2">
                      Description.
                    </Typography>
                    <Typography variant="body.100" className="text-gray-700 dark:text-gray-300">
                      - {project.description}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="body.200_sb" className="mb-2">
                      What did I do.
                    </Typography>
                    <div className="text-gray-700 dark:text-gray-300">
                      {project.contributions.map((contribution, contIndex) => (
                        <Typography key={contIndex} variant="body.100" className="mb-1">
                          - {contribution}
                        </Typography>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Typography variant="body.200_sb" className="mb-2">
                      Tech Stack.
                    </Typography>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
