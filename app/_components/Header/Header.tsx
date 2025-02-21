/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import DarkModeIcon from "@/app/_assets/icons/ic_dark_mode.svg";
import LightModeIcon from "@/app/_assets/icons/ic_light_mode.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Typography } from "../Typography/Typography";

export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  // 초기 테마 설정
  useEffect(() => {
    document.documentElement.className = theme;
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[60px] bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border w-full mb-[40px] fixed top-0 z-40">
        <div className="flex justify-between items-center w-full px-[5%]">
          <Typography variant="body.300" className="cursor-pointer select-none" onClick={() => handleNavigation("/")}>
            🧑🏻‍💻 경계를 넘나드는 개발자, 정호동입니다
          </Typography>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex gap-2 items-center">
            <div className="flex gap-4 items-center mr-6">
              <Typography variant="body.100" color="DEFAULT" className="cursor-pointer select-none" onClick={() => handleNavigation("/resume")}>
                Resume
              </Typography>
              <Typography variant="body.100" color="DEFAULT" className="cursor-pointer select-none" onClick={() => handleNavigation("/about")}>
                About
              </Typography>
            </div>
            <button onClick={toggleTheme} className="p-2 transition-colors" aria-label="테마 변경">
              {theme === "dark" ? <DarkModeIcon width={24} height={24} fill="white" /> : <LightModeIcon width={24} height={24} fill="black" />}
            </button>
          </div>

          {/* 햄버거 메뉴 버튼  */}
          <button className="md:hidden w-[20px] h-[20px] z-[11] relative flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <span
                className={`bg-current w-5 h-[1.5px] transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              />
              <span
                className={`bg-current w-5 h-[1.5px] transition-all duration-300 ease-in-out
                  ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`bg-current w-5 h-[1.5px] transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? "-rotate-45 translate-y-[-6px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* 사이드 메뉴 오버레이 */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-[10] md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setIsOpen(false)}>
        <div className={`fixed top-0 right-0 h-full w-64 bg-light-bg dark:bg-dark-bg shadow-lg transform transition-transform duration-300 z-[1000] ${isOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
          <div className="p-4 flex justify-between items-center border-b border-light-border dark:border-dark-border">
            <Typography variant="body.100_sb">메뉴</Typography>
          </div>

          <div className="p-4 space-y-4">
            <div onClick={() => handleNavigation("/resume")} className="cursor-pointer">
              <Typography variant="body.100" className="block py-2 hover:bg-light-bg-1 dark:hover:bg-dark-bg-1 rounded px-2">
                Resume
              </Typography>
            </div>
            <div onClick={() => handleNavigation("/about")} className="cursor-pointer">
              <Typography variant="body.100" className="block py-2 hover:bg-light-bg-1 dark:hover:bg-dark-bg-1 rounded px-2">
                About
              </Typography>
            </div>
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="w-full flex items-center py-2 hover:bg-light-bg-1 dark:hover:bg-dark-bg-1 rounded px-2"
            >
              <Typography variant="body.100" className="flex items-center gap-2">
                {theme === "dark" ? (
                  <>
                    <LightModeIcon width={16} height={16} fill="white" /> 라이트 모드
                  </>
                ) : (
                  <>
                    <DarkModeIcon width={16} height={16} fill="black" /> 다크 모드
                  </>
                )}
              </Typography>
            </button>
          </div>
        </div>
      </div>

      {/* 헤더 높이만큼 여백 추가 + 20px */}
      <div className="h-[80px]" />
    </>
  );
}
