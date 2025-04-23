"use client";

import { Typography } from "@/app/_components/Typography";
import { useState } from "react";

interface SkillDetail {
  title: string;
  description: string[];
  additionalInfo?: string[];
}

interface SkillCategory {
  category: string;
  details: SkillDetail[];
}

interface SkillSectionProps {
  skillData: SkillCategory[];
}

export default function SkillSection({ skillData }: SkillSectionProps) {
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* 왼쪽 카테고리 메뉴 */}
      <div className="md:col-span-3 md:sticky md:top-[80px] self-start sticky top-0 bg-light-bg dark:bg-dark-bg z-10 py-2">
        <div className="space-y-2">
          {skillData.map((category, index) => (
            <div key={index} className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 ${activeCategory === index ? "bg-gray-100 dark:bg-gray-800 translate-x-2" : "hover:bg-gray-50 dark:hover:bg-gray-900"}`} onClick={() => handleCategoryClick(index)}>
              <Typography variant="body.100_sb" className={`${activeCategory === index ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"}`}>
                {category.category}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* 오른쪽 스킬 상세 */}
      <div className="md:col-span-9">
        {activeCategory !== null && (
          <div className="animate-fadeIn space-y-8">
            {skillData[activeCategory].details.map((detail, detailIndex) => (
              <div key={detailIndex} className="mb-8">
                <Typography variant="title.100_sb" className="mb-4">
                  {detail.title}
                </Typography>
                <ul className="space-y-4">
                  {detail.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start">
                      <div className="min-w-[6px] h-[6px] rounded-full bg-primary dark:bg-primary-4 mt-2 mr-3" />

                      <div>
                        <Typography variant="body.100_sb" className="text-gray-700 dark:text-gray-300">
                          {desc}
                        </Typography>

                        {detail.additionalInfo && detail.additionalInfo[descIndex] && (
                          <Typography variant="body.201" className="text-gray-500 dark:text-gray-400 mt-1 ml-1 font-thin">
                            {detail.additionalInfo[descIndex]}
                          </Typography>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
