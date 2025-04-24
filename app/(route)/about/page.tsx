/* eslint-disable @typescript-eslint/no-unused-vars */
import { Typography } from "@/app/_components/Typography";
import React from "react";
import GithubLogo from "@/app/_assets/icons/GithubIcon";
import LinkedinLogo from "@/app/_assets/icons/LinkedinLogo";
import InstagramLogo from "@/app/_assets/icons/InstagramIcon";
import Image from "next/image";
import profileImage from "@/app/_assets/images/profile.jpeg";
import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/app/_lib/seo/metadata";

export const metadata: Metadata = createPageMetadata("About", "개발자로서의 기술적인 이야기를 넘어, 일상의 생각과 경험을 자유롭게 기록하는 개발자.", "/about");

const content = [
  {
    title: "이 블로그는 ?",
    description: ["뒤죽박죽 블로그가 될 수 있겠지만,", "개발 뿐만 아닌 평범한 저의 경험들을 기록하려합니다.", "진지한 이야기들, 편한 이야기들 경계 없이 이야기 해보려해요. 💭"],
  },
  {
    title: "블로그를 시작한 이유는 ?",
    description: ["머릿속 생각들이 너무 시끄러우면 밖으로 좀 내보내려고요.", "코드 뿐 만 아니라 글도 적다보면 뭐든 꽤 그럴듯한 것들이 나오더군요. 😃"],
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/jeonghodong/",
    icon: InstagramLogo,
    label: "Instagram",
  },
  {
    href: "https://github.com/jeonghodong",
    icon: GithubLogo,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/hodong-jeong-632353270/",
    icon: LinkedinLogo,
    label: "LinkedIn",
  },
];

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ width: number; height: number; className: string }>;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
    <Icon width={32} height={32} className="text-gray-800 dark:text-white fill-current" />
  </Link>
);

const page = () => {
  return (
    <div className="h-[100%] w-[100%] p-[24px]">
      <div className="flex">
        <Typography variant="headline.200" className="text-center">
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
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
