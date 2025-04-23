/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "../Typography";
import Image from "next/image";

interface MarkdownRendererProps {
  content: string;
  slug: string;
}

/**
 * 마크다운 렌더러
 * @param param0
 * @returns
 */
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, slug }) => {
  useEffect(() => {
    const headings = document.querySelectorAll(".heading-text"); // 클래스 선택자 변경

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("highlight");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [content]);

  const components = {
    h1: ({ children, ...props }: any) => {
      const id = children
        ?.toString()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, "-");
      return (
        <Typography variant="headline.100" {...props} id={id} className="mt-[40px] mb-[5px]">
          <span className="heading-text relative inline-block">{children}</span>
        </Typography>
      );
    },
    h2: ({ children, ...props }: any) => {
      const id = children
        ?.toString()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, "-");
      return (
        <Typography variant="headline.200" {...props} id={id} className="mt-[30px] mb-[5px]">
          <span className="heading-text relative inline-block">{children}</span>
        </Typography>
      );
    },
    h3: ({ children, ...props }: any) => {
      const id = children
        ?.toString()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, "-");
      return (
        <Typography variant="headline.300" {...props} id={id} className="mt-[20px] mb-[5px]">
          {children}
        </Typography>
      );
    },
    h4: ({ children, ...props }: any) => (
      <Typography variant="headline.400" {...props} className="mt-[10px] mb-[5px]">
        {children}
      </Typography>
    ),
    h5: ({ children, ...props }: any) => (
      <Typography variant="title.100" {...props} className="mt-[10px] mb-[5px]">
        {children}
      </Typography>
    ),
    h6: ({ children, ...props }: any) => (
      <Typography variant="title.200" {...props} className="mt-[10px] mb-[5px]">
        {children}
      </Typography>
    ),
    p: ({ children, ...props }: any) => (
      <Typography variant="body.100" color="DEFAULT" {...props} className="mt-[24px] mb-[8px]">
        {children}
      </Typography>
    ),
    strong: ({ children }: any) => <span className="font-semibold">{children}</span>,
    em: ({ children }: any) => <em>{children}</em>,
    blockquote: ({ children }: any) => (
      <Typography variant="body.200" className="border-l-4 border-light-bg-1 dark:border-dark-bg-1 pl-4 italic">
        {children}
      </Typography>
    ),
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      const language = match ? match[1] : "";
      if (inline) {
        return (
          <code className="bg-light-bg-1 dark:bg-dark-bg-1 rounded px-1" {...props}>
            {children}
          </code>
        );
      }
      return (
        <div className="my-4 bg-light-bg-1 dark:bg-dark-bg-1 rounded p-4 overflow-x-auto">
          <code className={language ? `language-${language}` : ""} {...props}>
            {children}
          </code>
        </div>
      );
    },
    ul: ({ children }: any) => <ul className="text-light-text dark:text-dark-text list-disc ml-4 my-2 font-light">{children}</ul>,
    ol: ({ children }: any) => <ol className="text-light-text dark:text-dark-text list-decimal ml-4 my-2 font-light">{children}</ol>,
    li: ({ children, ...props }: any) => (
      <li className="text-light-text dark:text-dark-text font-light pl-1 marker:text-xs" {...props}>
        {children}
      </li>
    ),
    img: ({ src, alt }: any) => {
      // 상대 경로를 절대 경로로 변환
      const imageSrc = src.startsWith("http://") || src.startsWith("https://") ? src : `/blog-posts/${slug}/${src.replace(/^\.?\//, "")}`;
      return <Image src={imageSrc} alt={alt} width={500} height={350} layout="responsive" />;
    },
  };

  return (
    <>
      <style jsx global>{`
        .heading-text::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 25%;
          transform: rotate(-1.5deg);
          width: 0;
          height: 50%; /* 형광펜 두께 조절 */
          background-color: rgba(255, 255, 0, 0.3);
          z-index: -1;
          transition: width 1s ease-out;
        }

        .dark .heading-text::before {
          background-color: rgba(255, 255, 0, 0.15);
        }

        .heading-text.highlight::before {
          width: 100%;
        }
      `}</style>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </>
  );
};

export default MarkdownRenderer;

/**
 * 사용 예시
 * @returns
 */
const ExampleUsage: React.FC = () => {
  const markdownContent = `
# 제목 1
## 제목 2
### 제목 3
일반 텍스트입니다. **굵은 텍스트**와 *기울임 텍스트*를 포함합니다.
- 목록 항목 1
- 목록 항목 2
1. 번호 목록 1
2. 번호 목록 2
> 인용문입니다.
\`\`\`
코드 블록입니다.
\`\`\`
\`인라인 코드\`도 지원합니다.
  `;
  return (
    <div className="p-8">
      <MarkdownRenderer content={markdownContent} slug={"2번 글 입니다."} />
    </div>
  );
};
export { ExampleUsage };
