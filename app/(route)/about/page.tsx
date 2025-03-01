import { Typography } from "@/app/_components/Typography/Typography";
import React from "react";
import GithubLogo from "@/app/_assets/icons/GithubIcon";
import LinkedinLogo from "@/app/_assets/icons/LinkedinLogo";
import Image from "next/image";
import profileImage from "@/app/_assets/images/profile.jpeg";
import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/app/_lib/seo/metadata";

export const metadata: Metadata = createPageMetadata("About", "개발자로서의 기술적인 이야기를 넘어, 일상의 생각과 경험을 자유롭게 기록하는 개발자.", "/about");

const content = [
  {
    title: "이 블로그는 ?",
    description: ["개발자로서의 기술적인 이야기를 넘어,", "일상의 생각과 경험을 자유롭게 기록하는 공간입니다.", "경계 없는 글쓰기를 통해", "더 넓은 시야를 만들어가고 있습니다."],
  },
  {
    title: "블로그를 시작한 이유",
    description: ["생각은 기록될 때 존재하게 됩니다.", "머릿속을 떠돌던 생각들이", "글로 옮겨지는 순간 더 선명해지는 이 경험을 좋아합니다.", "이 글들이 누군가에게 영감이 되길 바랍니다."],
  },
];

const page = () => {
  return (
    <div className="h-[100%] w-[100%] p-[24px]">
      <div className="flex">
        <Typography variant="headline.200" className="text-center my-[16px]">
          About
        </Typography>
      </div>

      <div className="h-[1px] w-[100%] bg-light-border dark:bg-dark-border my-[20px]" />

      {content.map((item, index) => (
        <div key={index}>
          <Typography variant="title.100_sb" className="mb-[16px]">
            {item.title}
          </Typography>

          <Typography variant="body.100">
            {item.description.map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                {line}
                {lineIndex < item.description.length - 1 && <br />}
              </React.Fragment>
            ))}
          </Typography>

          <br />
        </div>
      ))}

      {/* 프로필 영역 */}
      <div className="flex py-[32px] border-light-border dark:border-dark-border border-t-[1px] border-b-[1px] border-l-0 border-r-0 mt-[32px]">
        <div className="w-[100px] h-[100px] rounded-full mr-[20px] flex-shrink-0 p-[1px]">
          <Image src={profileImage} alt="profile" width={80} height={80} className="rounded-full" />
        </div>

        <div>
          <Typography variant="title.100_sb" className="mb-[4px]">
            Hodong
          </Typography>
          <Typography variant="body.200" className="mb-[8px]">
            읽기 좋은 글을 쓰기 위해
          </Typography>

          {/* 소셜 버튼 영역 */}
          <div className="flex gap-3 mt-[12px] items-center">
            <Link href="https://github.com/jeonghodong" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
              <GithubLogo width={32} height={32} className="text-gray-800 dark:text-white fill-current" />
            </Link>
            <Link href="https://www.linkedin.com/in/hodong-jeong-632353270/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
              <LinkedinLogo width={32} height={32} className="text-gray-800 dark:text-white fill-current" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
