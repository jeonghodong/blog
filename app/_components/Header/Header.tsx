/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import DarkModeIcon from "@/app/_assets/icons/ic_dark_mode.svg";
import LightModeIcon from "@/app/_assets/icons/ic_light_mode.svg";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Typography } from "../Typography/Typography";
import ScrollProgressBar from "./_components/ScrollProgressBar";

// 헤더 컴포넌트인데 코드 리팩토링 필요함.. 흠 어떻게 해야할지....사이드바 컴포넌트 분리하면될듯 우선?
export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [hasTyped, setHasTyped] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollThreshold = 50; // 스크롤 임계값 - 이 값을 높이면 헤더가 나타나기 위해 더 많이 스크롤해야 함
  const isResumePage = pathname === "/resume";

  const fullText = "Thoughts, Being";

  // 타이핑 효과 구현 - 첫 렌더링시에만 실행
  useEffect(() => {
    // 이미 타이핑 효과가 실행된 경우 다시 실행하지 않음
    if (hasTyped) {
      setDisplayText(fullText);
      setIsTyping(false);
      return;
    }

    // 컴포넌트가 마운트되면 타이핑 시작
    setIsTyping(true);
    setDisplayText("");

    let index = 0;

    const typeText = () => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;

        // 100ms~400ms 사이의 랜덤한 타이핑 속도
        const randomDelay = Math.floor(Math.random() * 101) + 100;
        timerRef.current = setTimeout(typeText, randomDelay);
      } else {
        setIsTyping(false);
        setHasTyped(true);
      }
    };

    // 타이핑 시작
    typeText();

    // 클린업 함수
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []); // 의존성 배열이 비어있어 컴포넌트가 마운트될 때만 실행

  // 스크롤 이벤트 처리 - Resume 페이지에서만 작동
  useEffect(() => {
    if (!isResumePage) {
      setIsHeaderVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 아래로 스크롤 - 헤더 숨기기 (기존과 동일)
      if (currentScrollY > lastScrollY.current && currentScrollY > 0) {
        setIsHeaderVisible(false);
      }
      // 위로 스크롤 - 임계값 이상 스크롤해야 헤더 보이기
      else if (lastScrollY.current - currentScrollY > scrollThreshold) {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isResumePage]);

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
      <ScrollProgressBar />

      <div
        className={`flex justify-center items-center h-[60px] bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border w-full fixed z-[101] transition-transform duration-300 ${isResumePage && !isHeaderVisible ? "-translate-y-full" : "translate-y-0"}`}
        style={{ top: isResumePage ? "0" : "0" }}
      >
        <div className="flex justify-between items-center w-full px-[5%]">
          <Typography variant="caption.100" className="cursor-pointer select-none font-mono" onClick={() => handleNavigation("/")}>
            🧑🏻‍💻 <span className="text-gray-800 dark:text-gray-200">import</span> <span className="text-gray-500 dark:text-gray-400">{"{"}</span>
            <span className="text-gray-700 dark:text-gray-300">{displayText}</span>
            {isTyping && <span className="animate-pulse">|</span>}
            <span className="text-gray-500 dark:text-gray-400">{"}"}</span>
            <span className="text-gray-800 dark:text-gray-200"> from </span>
            <span className="text-gray-700 dark:text-gray-300">&apos;hodong&apos;</span>
            <span className="text-gray-800 dark:text-gray-200">;</span>
          </Typography>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex gap-2 items-center">
            <div className="flex gap-4 items-center mr-6">
              <Typography variant="body.100" color="DEFAULT" className="cursor-pointer select-none" onClick={() => handleNavigation("/about")}>
                About
              </Typography>
              <Typography variant="body.100" color="DEFAULT" className="cursor-pointer select-none" onClick={() => handleNavigation("/resume")}>
                Resume
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
                className={`dark:bg-white bg-black w-5 h-[1.5px] transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? "rotate-50 translate-y-[6px]" : ""}`}
              />
              <span
                className={`dark:bg-white bg-black w-5 h-[1.5px] transition-all duration-300 ease-in-out
                  ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`dark:bg-white bg-black w-5 h-[1.5px] transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? "-rotate-50 translate-y-[-6px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* 사이드 메뉴 오버레이 */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-[100] md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setIsOpen(false)}>
        <div className={`fixed top-0 right-0 h-full w-64 bg-light-bg dark:bg-dark-bg shadow-lg transform transition-transform duration-300 z-[100] ${isOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
          <div className="p-4 space-y-4 mt-[60px]">
            <div onClick={() => handleNavigation("/about")} className="cursor-pointer">
              <Typography variant="body.100" className="block py-2 hover:bg-light-bg-1 dark:hover:bg-dark-bg-1 rounded px-2">
                About
              </Typography>
            </div>
            <div onClick={() => handleNavigation("/resume")} className="cursor-pointer">
              <Typography variant="body.100" className="block py-2 hover:bg-light-bg-1 dark:hover:bg-dark-bg-1 rounded px-2">
                Resume
              </Typography>
            </div>
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="w-full flex items-center py-2 hover:bg-light-bg-1 dark:hover:bg-dark-bg-1 rounded px-1"
            >
              <Typography variant="body.100" className="flex items-center">
                {theme === "dark" ? (
                  <>
                    <LightModeIcon width={16} height={16} fill="white" />
                  </>
                ) : (
                  <>
                    <DarkModeIcon width={16} height={16} fill="black" />
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
