export const resumeData = {
  // 헤더
  header: {
    title: "Product Engineer",
    description:
      "고객 문제를 정의하고, 기술로 해결하고, 제품을 성장시킵니다.\n저는 프론트엔드 엔지니어지만 프론트, 백엔드, 기획 경계를 두지 않으려 해요.\n필요한 곳이면 어디든 뛰어듭니다. 제품의 성장이 곧 저의 성장이라 생각합니다.",
  },
  // 경력
  experiences: [
    {
      company: "ATAD Inc.",
      period: "2023.05 - 현재",
      projects: [
        {
          title: "멀티 클라우드 관리 B2B 서비스",
          period: "2024.08 - 현재",
          description:
            "AWS, Azure, GCP, OCI 등 멀티 클라우드를 사용하는 기업 고객이 각 CSP 콘솔을 개별 접속해야 하는 비효율 문제를 해결하기 위한 통합 관리 서비스입니다. 4개 CSP의 VM 관리, 대시보드, 모니터링 기능을 단일 인터페이스로 통합하여 고객사의 클라우드 운영 효율성을 향상시켰습니다. 이 과정에서 클라우드 인프라와 CSP SDK에 대한 이해도를 크게 높였습니다.",
          contributions: [
            "Next.js 기반 프론트엔드 아키텍처 설계 및 기술환경 구성",
            "4개 CSP SDK 데이터를 통합 처리하는 공통 인터페이스 설계 및 구현",
            "VM 관리, 대시보드, 모니터링 등 핵심 CSP 서비스 전반 UI 개발",
          ],
          techStack: [
            "TypeScript",
            "Next.js",
            "React",
            "styled-components",
            "Github Action",
          ],
        },
        {
          title: "Jest 기반 테스트 환경 구축",
          period: "2024.08 - 현재",
          description:
            "테스트 코드가 전무한 상태에서 배포 시 예기치 않은 버그가 빈번하게 발생하고, QA 과정에서 반복적인 수동 검증이 필요했습니다. Jest 기반 유닛 테스트 환경을 구축하여 핵심 비즈니스 로직에 대한 테스트 커버리지를 확보하고 테스트 자동화 프로세스를 도입했습니다. 체계적인 테스트 코드 작성으로 버그를 조기에 발견할 수 있게 되었고, 리팩토링 시 안정성이 크게 향상되었으며, CI/CD 파이프라인에 테스트 자동화를 통합하여 배포 전 품질 검증 프로세스를 강화했습니다.",
          contributions: [
            "Jest 기반 유닛 테스트 환경 구축 및 설정 표준화",
            "핵심 비즈니스 로직, 유틸리티 함수, 컴포넌트 테스트 코드 작성",
            "테스트 커버리지 측정 및 리포팅 체계 수립",
            "테스트 코드 작성 가이드라인 및 Best Practice 문서화",
            "CI/CD 파이프라인에 자동화된 테스트 프로세스 통합",
          ],
          techStack: ["Jest", "React Testing Library"],
        },
        {
          title: "Husky 기반 Git Hooks 자동화 시스템 구축",
          period: "2025.09 - 2025.09",
          description:
            "코드 리뷰 시 린팅 오류, 포맷팅 불일치 등 사소한 이슈로 리뷰 시간이 지연되고, 테스트 미실행 코드가 원격 저장소에 푸시되는 문제가 발생했습니다. pre-commit과 pre-push 단계에서 코드 검증 프로세스를 자동화하여 코드 리뷰에서 스타일 관련 코멘트를 80% 감소시키고, 테스트 실패 코드의 원격 푸시를 원천 차단하여 개발팀의 코드 품질을 향상시키고 일관된 개발 워크플로우를 확립했습니다.",
          contributions: [
            "pre-commit 훅에 ESLint, Prettier를 통한 코드 린팅 및 포맷팅 자동 검증 설정",
            "pre-push 훅에 Jest 테스트 자동 실행 기능 추가로 버그 코드의 원격 저장소 푸시 방지",
            "빌드 프로세스 자동화를 통한 배포 전 코드 검증 파이프라인 구성",
          ],
          techStack: ["Husky"],
        },
        {
          title: "디자인 시스템 Storybook 구축 및 배포 자동화",
          period: "2025.08 - 2025.08",
          description:
            "디자이너-개발자 간 컴포넌트 스펙 확인을 위해 매번 로컬 실행 또는 슬랙 캡처 공유가 필요하여 소통 비용이 과다 발생했습니다. Storybook으로 UI 컴포넌트를 체계화하고 재사용 가능한 라이브러리를 구축했으며, S3 정적 호스팅으로 배포하여 디자이너가 실시간으로 컴포넌트를 확인하고 피드백할 수 있는 환경을 제공함으로써 디자인-개발 간 소통 비용을 30% 절감했습니다. 또한 컴포넌트별 독립적인 개발 및 테스트 환경 구성을 통해 개발 속도를 향상시키고 디버깅 시간을 단축했으며, 문서화 기능을 활용하여 컴포넌트 사용법과 Props를 체계적으로 정리함으로써 팀 내 일관된 개발 표준을 확립하고 장기적인 유지보수 효율성을 개선했습니다.",
          contributions: [
            "Storybook으로 재사용 가능한 UI 컴포넌트 라이브러리 체계화",
            "AWS S3 정적 호스팅으로 실시간 접근 가능한 환경 배포",
            "GitHub Actions를 활용한 PR 머지 시 자동 배포 파이프라인 구축",
            "컴포넌트별 Props 문서화 및 사용 가이드 작성으로 팀 내 개발 표준 확립",
          ],
          techStack: ["Storybook", "Github Action", "AWS S3"],
        },
        {
          title: "사내 개발 온보딩 가이드 구축",
          period: "2025.08 - 2025.08",
          description:
            "초기 스타트업 특성상 개발 프로세스가 미정립되어 신규 입사자마다 코드 컨벤션, 브랜치 전략 등을 구두로 전달했고 온보딩에 평균 2주가 소요되었습니다. 표준화된 개발 프로세스를 문서화하여 신규 입사자 온보딩 시간을 2주에서 3일로 단축하고, 일관된 코드 컨벤션과 커밋 메시지 규칙을 확립하여 코드 가독성과 유지보수성을 향상시켰습니다. 표준화된 개발 프로세스 도입으로 팀 간 협업 효율이 증가했고, 개발자 간 의사소통 비용을 크게 줄여 개발 생산성을 40% 이상 향상시켰습니다.",
          contributions: [
            "Git 커밋 메시지 컨벤션 및 브랜치 전략(Git Flow) 수립",
            "프론트엔드 코드 컨벤션 및 폴더 아키텍처 가이드라인 작성",
            "개발 환경 설정 및 배포 프로세스 Step-by-Step 문서화",
            "PR 템플릿, 이슈 템플릿 등 팀 협업 워크플로우 프로세스 정립",
          ],
          techStack: ["Notion", "GitHub"],
        },
        {
          title: "템플릿 기반 페이지 자동 생성 시스템 구축",
          period: "2025.07 - 2025.07",
          description:
            "CRUD 페이지 생성 시 매번 동일한 구조의 파일을 수동으로 생성해야 했고, 개발자별 코드 구조 불일치 문제가 발생했습니다. Plop.js 마이크로 제너레이터를 활용하여 템플릿 기반 코드 생성 시스템을 구축함으로써 일관된 코드 구조와 스타일을 유지하면서 새 페이지 생성 시간을 30분에서 3분으로 80% 단축하고, 개발자 간 코드 구조 100% 일관성을 확보했습니다.",
          contributions: [
            "템플릿 기반 자동 페이지 생성: 목록 페이지(page.tsx)와 생성 페이지(create/page.tsx) 템플릿 구축",
            "경로 선택 시스템: Root, AI, Computing, Network 등 경로 옵션을 통한 유연한 페이지 배치",
            "Mock 데이터 통합: 개발 초기 단계에서 즉시 테스트 가능한 가짜 데이터함수 자동 생성",
          ],
          techStack: ["Plop.js"],
        },
        {
          title: "B2B 데이터 마켓 서비스",
          period: "2023.05 - 2024.08",
          description:
            "기업 간 데이터 거래를 위한 온라인 마켓플레이스 신규 구축 프로젝트입니다. 프론트엔드 개발자로서 판매자의 데이터 상품 등록부터 구매자의 검색, 결제까지 전체 구매 플로우 UI를 구현했습니다.  NestJS 기반 일부 백엔드 API 개발에도 참여하여 풀스택 역량을 확장했습니다.",
          contributions: [
            "상품 상세 페이지 UI 및 데이터 미리보기 기능 구현",
            "기업 인증 프로세스 및 결제 화면 개발",
            "NestJS 기반 일부 백엔드 API 개발 참여",
          ],
          techStack: [
            "TypeScript",
            "Next.js",
            "Styled Component",
            "Github Action",
            "AWS(S3 / CF / Route53 / Certificate Manager)",
            "NestJS",
          ],
        },
      ],
    },
  ],
  // 사이드 프로젝트
  sideProjects: [
    {
      company: "SCF",
      period: "2025.10 - 현재",
      projects: [
        {
          title: "SCF - S3 + CloudFront Auto Deploy CLI",
          period: "2025.10 - 현재",
          description:
            "AWS 정적 웹사이트 배포 시 S3 업로드, CloudFront 설정, 캐시 무효화 등 15분 걸리는 반복적인 수동 작업을 TypeScript CLI로 자동화했습니다. 파일 해시 비교를 통한 증분 배포로 배포 시간을 2분으로 87% 단축시켰으며, npm 패키지로 배포 완료하고 GitHub 오픈소스화 하였습니다.",
          contributions: [
            "TypeScript + Commander.js 기반 CLI 도구 설계 및 배포/삭제/상태확인 명령어 구현",
            "AWS SDK v3를 활용한 S3 버킷 자동 생성 및 파일 업로드 시스템 구축",
            "CloudFront 배포 자동화 및 캐시 무효화 기능 구현",
            "파일 해시 비교를 통한 증분 배포(변경 파일만 업로드)로 배포 시간 87% 단축",
            "Zod를 활용한 설정 파일 스키마 검증 구현",
          ],
          techStack: [
            "TypeScript",
            "Commander.js",
            "AWS SDK v3",
            "Zod",
            "Husky",
            "Github Actions",
          ],
        },
      ],
    },
    {
      company: "Epoch Crew",
      period: "2025.10 - 현재",
      projects: [
        {
          title: "찌돌프 코 터트리기",
          period: "2025.10 - 2025.11",
          description:
            "카카오톡 친구들과 즐기는 크리스마스 시즌 한정 실시간 멀티플레이어 미니게임입니다. 최대 4명이 동시 접속하여 클릭으로 루돌프의 코를 터트리는 경쟁 게임으로, Firebase 무료 티어 내에서 실시간 동기화와 동시성 이슈를 해결하는 것이 핵심 과제였습니다. Transaction 기반 동시 접속 제어로 Race Condition을 해결하고, 카카오톡 공유를 통한 바이럴 확산으로 크리스마스 시즌 동시 접속 최대 50명을 달성했습니다.",
          contributions: [
            "Firebase Realtime Database를 활용한 실시간 멀티플레이어 게임 로직 및 상태 동기화 구현",
            "Transaction 기반 동시 접속 제어로 Race Condition 해결 및 최대 4명 제한 보장",
            "Firebase 무료 티어 최적화 전략 수립 (6시간마다 오래된 방 자동 삭제, 90개 연결 시 생성 차단)",
            "카카오 로그인 팝업 인증 시스템 구축 및 Firebase Anonymous Auth 연동",
            "Framer Motion을 활용한 게임 애니메이션 및 인터랙션 구현",
          ],
          techStack: [
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "Framer Motion",
            "Zustand",
            "Firebase",
            "Kakao SDK",
            "AWS (S3 / CloudFront)",
            "Husky",
            "Github Actions",
          ],
        },
      ],
    },
    {
      company: "Blank",
      period: "2025.05 - 2025.06",
      projects: [
        {
          title: "뉴스잽 - NewsZap",
          period: "2025.05 - 2025.06",
          description:
            "뉴스 특정 매체 편향에 따른 정보 왜곡 문제로 독자가 객관적으로 기사의 내용을 판단하기 어려운 상황을 해결하기 위한 서비스입니다. AI와 키워드 분석을 결합하여 기사의 정치적 성향을 -100 ~ +100 스케일로 시각화함으로써 사용자가 다양한 관점의 기사를 비교하고 뚜렷한 판단을 할 수 있도록 지원합니다.",
          contributions: [
            "Next.js 기반 프론트엔드 인터페이스 및 편향성 시각화 컴포넌트 구현",
            "Python + Ollama를 활용한 로컬 LLM 기반 뉴스 분석 시스템 구축",
            "키워드 분석과 AI 판단을 결합한 편향성 점수 알고리즘 설계",
            "Monorepo 구조로 프론트엔드/백엔드 통합 관리 및 RESTful API 개발",
          ],
          techStack: [
            "TypeScript",
            "Next.js",
            "Emotion",
            "Python",
            "Ollama AI",
            "Monorepo",
            "AWS(S3 / CF / Route53 / Certificate Manager / EC2)",
          ],
        },
      ],
    },
    {
      company: "Boogie Boogie Crew",
      period: "2023.12 - 2024.01",
      projects: [
        {
          title: "루돌프의 수족냉증을 막아줘",
          period: "2023.12 - 2024.01",
          description:
            "프론트엔드 2명, 디자이너 1명의 소규모 팀으로 백엔드 개발자 부재 상황에서 크리스마스 시즌 타겟 바이럴 서비스를 2주 내 기획부터 배포까지 완료해야 했습니다. 프론트엔드 개발자로서 백엔드까지 풀스택으로 구현하여 나의 루돌프에게 주변 사람들로부터 양말(편지)을 받는 크리스마스 기념 편지 서비스를 완성했고, 실사용자 300명과 30,000건의 트래픽을 달성하며 첫 풀스택 프로젝트로 백엔드 역량을 확장했습니다.",
          contributions: [
            "Next.js 기반 프론트엔드 전체 UI 구현",
            "관계형 데이터베이스 ERD 설계 및 NestJS 서버 구축",
            "RESTful API 설계 및 구현, Swagger를 활용한 API 명세 문서화",
            "Nginx 웹서버 구성 및 AWS 인프라 배포",
          ],
          techStack: [
            "TypeScript",
            "Next.js",
            "React",
            "styled-components",
            "AWS(S3 / CF / Route53 / Certificate Manager / EC2)",
            "NestJS",
            "Nginx",
          ],
        },
      ],
    },
  ],
  // 스킬
  skills: [
    {
      category: "HTML/CSS",
      details: [
        {
          title: "HTML/CSS",
          description: [
            "Semantic Markup을 신경쓰며 코드 가독성을 향상시키는 데 노력합니다.",
            "CSS를 최대한 간단하고, 개발자 친화적으로 짤 수 있게 노력합니다.",
            "다양한 CSS 방식을 사용해보았습니다.",
            "다양한 UI 라이브러리 사용 경험이 있습니다.",
          ],
          additionalInfo: [
            "HTML의 구조적 의미를 살려 접근성과 SEO에 도움이 되는 마크업을 지향합니다.",
            "복잡한 스타일을 단순화하고 재사용 가능한 클래스를 만들어 유지보수성을 높입니다.",
            "TailwindCSS, Styled Component, CSS Module, CSS in JS 등을 사용해보았습니다.",
            "MUI, ANTD, Radix UI, Shadcn UI 등의 다양한 UI 컴포넌트 라이브러리 사용 경험이 있습니다.",
          ],
        },
      ],
    },
    {
      category: "JavaScript & TypeScript",
      details: [
        {
          title: "JavaScript & TypeScript",
          description: [
            "ES6+ 문법에 익숙하며, 모던 자바스크립트 코드를 작성할 수 있습니다.",
            "비동기 프로그래밍(Promise, async/await)을 이해하고 활용합니다.",
            "타입 시스템을 활용하여 안정적인 코드를 작성합니다.",
            "인터페이스, 제네릭, 유니온 타입 등 TypeScript의 고급 기능을 활용합니다.",
            "React와 TypeScript를 함께 사용한 프로젝트 경험이 있습니다.",
            "타입 추론을 최대한 활용하여 효율적인 코드를 작성합니다.",
          ],
          additionalInfo: [
            "화살표 함수, 구조 분해 할당, 스프레드 연산자 등을 적극 활용합니다.",
            "복잡한 비동기 로직을 가독성 높게 구현하여 콜백 지옥을 방지합니다.",
            "런타임 오류를 컴파일 타임에 잡아내어 버그를 사전에 방지합니다.",
            "복잡한 데이터 구조에 대한 타입 정의로 코드 가독성과 유지보수성을 높였습니다.",
            "Props, 상태, 이벤트 핸들러 등에 타입을 적용하여 안정적인 React 앱을 구현했습니다.",
            "불필요한 타입 선언을 줄이고 TypeScript의 타입 추론 기능을 최대한 활용합니다.",
          ],
        },
      ],
    },
    {
      category: "React",
      details: [
        {
          title: "React",
          description: [
            "함수형 컴포넌트와 React Hooks를 활용한 개발에 능숙합니다.",
            "React Query & SWR을 활용한 서버 상태 관리에 익숙합니다.",
            "React 생태계의 다양한 라이브러리를 활용한 개발 경험이 있습니다.",
            "Context API를 활용하여 컴포넌트 간 데이터 공유에 능숙합니다.",
            "React Hook Form을 활용한 폼 관리에 능숙합니다.",
          ],
          additionalInfo: [
            "useState, useEffect, useCallback, useMemo 등을 상황에 맞게 활용합니다.",
            "서비스에 맞게 추상화로 재구성하여 프로젝트 확장성을 높여 사용하였습니다.",
            "라이브러리를 사용할땐 충분한 신뢰성을 알아보고 사용하였습니다. (Github Star 수, 구글링 등)",
            "컴포넌트 분리에 의해 생기는 데이터 공유 문제를 해결하였습니다.",
            "복잡한 폼 검증 로직을 효율적으로 구현하여 DX 경험을 개선했습니다.",
          ],
        },
      ],
    },
    {
      category: "Next.js",
      details: [
        {
          title: "Next.js",
          description: [
            "SSR, SSG, ISR 등 다양한 렌더링 방식을 이해하고 적절히 활용합니다.",
            "Next.js의 라우팅 시스템과 API Routes를 활용한 개발 경험이 있습니다.",
            "Next.js 13+ App Router를 활용한 프로젝트 경험이 있습니다.",
            "SEO 최적화 및 웹 성능 개선을 위한 Next.js 기능을 활용합니다.",
            "Vercel 및 기타 플랫폼에 Next.js 애플리케이션 배포 경험이 있습니다.",
            "효율적인 폴더 구조와 컴포넌트 재사용을 중요하게 여기며, 코드 가독성을 향상시키는 데 노력합니다.",
          ],
          additionalInfo: [
            "각 페이지 특성에 맞는 렌더링 전략을 선택하여 성능과 SEO를 최적화했습니다.",
            "동적 라우팅, 중첩 라우팅, 미들웨어 등을 활용한 복잡한 라우팅 구현 경험이 있습니다.",
            "서버 컴포넌트와 클라이언트 컴포넌트를 적절히 분리하여 성능을 최적화했습니다.",
            "metadata API와 generateMetadata를 활용해 동적 및 정적 SEO 메타데이터를 효율적으로 구현하였습니다.",
            "CI/CD 파이프라인을 구축하여 자동화된 배포 프로세스를 구현했습니다.",
            "팀의 지속적이며 효율적인 업무를 위해 팀원들과 신뢰있는 구조를 기반으로 추가적인 소통을 통해 팀과 핏이 맞는 구조로 잡아나갔습니다.",
          ],
        },
      ],
    },
    {
      category: "Backend & Infra",
      details: [
        {
          title: "Backend & Infra",
          description: [
            "Node.js와 NestJS를 활용한 백엔드 개발 경험이 있습니다.",
            "RESTful API 설계 및 구현에 경험이 있습니다.",
            "AWS 서비스(S3, CloudFront, Route53, EC2 등)를 활용한 경험이 있습니다.",
            "CI/CD 파이프라인 구축 및 자동화된 배포 프로세스 경험이 있습니다.",
          ],
          additionalInfo: [
            "모듈화된 아키텍처와 의존성 주입을 활용한 확장 가능한 백엔드 시스템을 구축했습니다.",
            "HTTP 메서드와 상태 코드를 적절히 활용한 직관적인 API 설계를 지향합니다.",
            "클라우드 관련 도메인을 가진 기업에서 업무하며 자연스럽게 클라우드 지식을 쌓아왔습니다.",
            "Github Actions를 활용한 테스트, 빌드, 배포 자동화 파이프라인을 구축해보았습니다.",
          ],
        },
      ],
    },
  ],
};
