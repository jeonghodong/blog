/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "../Button/Button";
import { Typography } from "../Typography/Typography";

export default function Header() {
  return (
    <div className="flex justify-center items-center h-[60px] bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border w-full">
      <div className="flex justify-between items-center w-full px-[5%]">
        <Typography variant="body.300">🧑🏻‍💻 몰입을 즐기는 개발자, 정호동입니다.</Typography>

        {/* 메뉴로 분리 */}
        {/* <div className="flex gap-2">
          <Button variant="solid" color="primary" size="sm">
            <Typography variant="caption.100" color="1">
              이력서 보기
            </Typography>
          </Button>

          <Button variant="outline" color="primary" size="sm">
            <Typography variant="caption.100" color="DEFAULT">
              포트폴리오 보기
            </Typography>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
