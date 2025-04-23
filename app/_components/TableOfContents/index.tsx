"use client";

import { Typography } from "../Typography";
import { useEffect, useState } from "react";
import { TableOfContentsProps, TocItem } from "./types";

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // 마크다운 내용에서 제목 추출
    const matches = content.match(/^#{1,3} .+$/gm) || [];
    const items = matches.map((heading) => {
      const level = heading.match(/^#+/)?.[0].length || 0;
      const text = heading.replace(/^#+\s/, "");
      const id = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
      return { id, text, level };
    });
    setHeadings(items);

    // 마크다운 내용의 제목에 id 추가
    const articleElement = document.querySelector("article");
    if (articleElement) {
      const headers = articleElement.querySelectorAll("h1, h2, h3");
      headers.forEach((header) => {
        const id = header.textContent?.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-") || "";
        header.id = id;
      });
    }
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden xl:block fixed right-[max(2rem,calc((100vw-700px-4rem)/2-200px))] top-[100px] w-[200px] max-h-[calc(100vh-200px)] overflow-y-auto">
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li key={id} className="transition-colors duration-200" style={{ paddingLeft: `${(level - 1) * 16}px` }}>
            <button onClick={() => handleClick(id)} className={`text-left w-full hover:text-primary-4 ${activeId === id ? "text-primary-4" : "text-gray-500"}`}>
              <Typography variant="caption.100">{text}</Typography>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
