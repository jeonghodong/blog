/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import DarkModeIcon from "@/app/_assets/icons/ic_dark_mode.svg";
import LightModeIcon from "@/app/_assets/icons/ic_light_mode.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Typography } from "../Typography/Typography";

export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
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

  return (
    <div className="flex justify-center items-center h-[60px] bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border w-full mb-[40px]">
      <div className="flex justify-between items-center w-full px-[5%]">
        <Typography variant="body.300" className="cursor-pointer select-none" onClick={() => router.push("/")}>
          🧑🏻‍💻 경계를 넘나드는 개발자, 정호동입니다
        </Typography>

        <div className="flex gap-2 items-center">
          <div className="flex gap-4 items-center mr-6">
            <Typography variant="body.100" color="DEFAULT" className="cursor-pointer select-none" onClick={() => router.push("/resume")}>
              Resume
            </Typography>

            <Typography variant="body.100" color="DEFAULT" className="cursor-pointer select-none" onClick={() => router.push("/about")}>
              About
            </Typography>
          </div>

          {/* 다크모드 토글 버튼 */}
          <button onClick={toggleTheme} className="p-2 transition-colors" aria-label="테마 변경">
            {theme === "dark" ? <DarkModeIcon width={24} height={24} fill="white" /> : <LightModeIcon width={24} height={24} fill="black" />}
          </button>
        </div>
      </div>
    </div>
  );
}
