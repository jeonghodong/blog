/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // 경로가 변경될 때마다 프로그레스 초기화
    setWidth(0);
    setIsScrolled(false);
  }, [pathname]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // 스크롤 여부 확인 (0인지 아닌지)
      setIsScrolled(currentScrollPos > 0);

      if (scrollHeight > 0) {
        const scrolled = (currentScrollPos / scrollHeight) * 100;
        setWidth(scrolled);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className={`fixed left-0 w-full h-[2.6px] bg-gray-200 dark:bg-gray-700 z-[102] duration-200`}>
      <div className="h-full bg-primary dark:bg-primary-4 transition-all duration-100 ease-out" style={{ width: `${width}%` }} />
    </div>
  );
}
