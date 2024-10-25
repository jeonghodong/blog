"use client";

import Button from "../Button/Button";
import { Typography } from "../Typography/Typography";

export default function Header() {
  return (
    <div className="flex justify-center items-center h-[60px] bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border w-full">
      <div className="flex justify-between items-center w-full px-[5%]">
        {/* 로고로 분리 */}
        <Typography variant="title.100_sb">로고</Typography>

        {/* 메뉴로 분리 */}
        <div className="flex gap-2">
          <Button variant="ghost" color="primary">
            로그인
          </Button>
          <Button variant="ghost" color="primary">
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}

// 추가적입 디자인 작업필요함 토스 헤더 참고 할것
// 추가적입 디자인 작업필요함 토스 헤더 참고 할것
// 추가적입 디자인 작업필요함 토스 헤더 참고 할것
// 추가적입 디자인 작업필요함 토스 헤더 참고 할것
// 추가적입 디자인 작업필요함 토스 헤더 참고 할것
