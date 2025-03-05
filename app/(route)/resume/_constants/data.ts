export const resumeData = {
  // 헤더
  header: {
    title: "Software Engineer",
    description:
      "안녕하세요. 웹 프론트엔드 개발자 정호동입니다.\n 소프트웨어 엔지니어로서의 다양한 경험과 프로젝트를 소개합니다. \n 사용자 중심의 인터페이스와 최적화된 웹 경험 구현에 전문성을 갖추고 있으며. \n 클라우드 및 인프라 관련 도메인을 가진 기업에서 업무하며 자연스럽게 백, 클라우드 지식을 쌓아왔습니다.",
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
            "AWS, Azure, GCP, OCI SDK를 활용하여 통합 멀티 클라우드 관리 서비스 입니다. 여러 클라우드의 리소스를 단일 인터페이스에서 모니터링하고 제어할 수 있는 시스템을 개발했으며, VM 관리와 대시보드, 모니터링 기능을 담당하여 구현했습니다. 이때 자연스럽게 클라우드에 대한 지식 또한 크게 늘었습니다.",
          contributions: ["프론트엔드 기술환경 구성 및 기본 기능 구현", "프론트엔드 인터페이스 구현"],
          techStack: ["TypeScript", "Nextjs", "React", "styled-components", "Github Action", "SST"],
        },
        {
          title: "Company Homepage",
          period: "2024.10 - 2024.11",
          description:
            "기업 웹사이트를 프론트와 백을 혼자 맡아 구축하였습니다. 메타데이터 최적화와 SEO 작업을 수행하 최적화 작업으로 검색엔진 노출도가 50% 증가했습니다. 반응형 디자인을 적용하여 다양한 디바이스에서 일관된 사용자 경험을 제공하였습니다. 또한 내부 디자인 시스템을 구축하여 UI 컴포넌트의 재사용성과 일관성을 향상시켰습니다.",
          contributions: ["프론트엔드 기술환경 구성 및 기본 기능 구현", "반응형 디자인 시스템과 재사용 가능한 UI 컴포넌트 개발", "기업 웹사이트 구축 및 메타데이터 SEO 최적화 작업"],
          techStack: ["TypeScript", "Nextjs", "React", "TailwindCSS", "SST"],
        },
        {
          title: "Company Admin",
          period: "2023.08 - 2023.12",
          description: "관리자 웹 콘솔을 구축하여 회사의 서비스와 리소스를 효율적으로 관리할 수 있는 시스템을 개발했습니다. 자동화된 배포 파이프라인을 구축하고 AWS 서비스를 활용하여 안정적인 인프라를 구성하였습니다.",
          contributions: ["프론트엔드 기술환경 구성 및 기본 기능 구현", "사용자 관리, 권한 제어 기능을 갖춘 관리자 콘솔 개발", "Github Action을 통한 CI/CD 파이프라인 구축으로 자동화된 배포 환경 구성", "AWS 클라우드 서비스를 활용한 인프라 아키텍처 설계 및 구현"],
          techStack: ["TypeScript", "Nextjs", "Styled Component", "Github Action", "AWS(S3 / CF / Route53 / Certificate Manager)", "Nestjs"],
        },
        {
          title: "B2B 데이터 마켓 서비스",
          period: "2023.05 - 2024.08",
          description:
            "기업들이 데이터를 사고팔 수 있는 온라인 마켓플레이스의 프론트엔드를 개발했습니다. 판매자가 데이터 상품을 등록하고 구매자가 쉽게 찾아볼 수 있는 화면을 만들었으며, 상품 검색과 필터 기능을 구현했습니다. 또한 구매자가 데이터 상품의 정보를 쉽게 확인하고 구매할 수 있도록 상세 페이지와 결제 화면을 개발했습니다.",
          contributions: ["데이터 상품 목록과 검색/필터 화면 개발", "상품 상세 페이지 UI 구현", "회사 인증 및 결제 화면 개발", "모바일/태블릿 대응 반응형 웹 구현"],
          techStack: ["TypeScript", "Nextjs", "Styled Component", "Github Action", "AWS(S3 / CF / Route53 / Certificate Manager)", "Nestjs"],
        },
        {
          title: "Zabbix 모니터링 연동 시스템 구축",
          period: "2024.11 - 2024.12",
          description:
            "고객들의 VM 메트릭을 실시간으로 수집하고 모니터링하기 위한 시스템을 구축했습니다. 쉘 스크립트를 통해 자동 설치 및 연동 프로세스를 구현하여 설치 시간을 건당 최대 30분에서 5분 이하로 단축했고, Docker 컨테이너화를 통해 Zabbix Agent를 배포하여 다양한 OS 환경에서의 호환성 문제를 해결했습니다.",
          contributions: ["VM 메트릭 수집을 위한 자동화된 Zabbix Agent 설치 스크립트 개발", "Docker 기반 Zabbix Agent 컨테이너화로 크로스 플랫폼 호환성 확보", "Zabbix API를 활용한 자동 호스트 등록 및 모니터링 시스템 연동 구현"],
          techStack: ["Zabbix", "Shell Script", "Docker", "AWS EC2", "Nestjs"],
        },
        {
          title: "사내 온보딩 가이드 작업",
          period: "2023.08 - 2023.08",
          description:
            "초기 스타트업의 개발 프로세스 표준화를 위한 온보딩 가이드를 구축했습니다. 일관된 코드 컨벤션과 커밋 메시지 규칙을 확립하여 코드 가독성과 유지보수성을 향상시켰습니다. 표준화된 개발 프로세스 도입으로 팀 간 협업 효율이 증가했고, 개발자 간 의사소통 비용을 크게 줄여 예상되는 개발 생산성이 40% 이상 향상되었습니다.",
          contributions: ["Git 커밋 메시지 컨벤션 및 브랜치 전략 수립", "프론트엔드 코드 컨벤션 및 아키텍처 가이드라인 작성", "개발 환경 설정 및 배포 프로세스 문서화", "팀 협업 워크플로우 프로세스 정립"],
          techStack: ["Notion"],
        },
      ],
    },
  ],
  // 사이드 프로젝트
  sideProjects: [
    {
      company: "Boogie Boogie Crew",
      period: "2023.12 - 2024.01",
      projects: [
        {
          title: "루돌프의 수족냉증을 막아줘",
          period: "2023.12 - 2024.01",
          description:
            "당시 프론트엔드 2명 / 디자이너 1명으로 구성된 팀입니다. 해당 줄여서 루수막 서비스는 크리스마스 시즌을 타겟으로한 나의 루돌프에게 주변사람들에게 양말(편지)를 즉 크리스마스 기념 편지를 받는 서비스 입니다. 백엔드와 프론트엔드 둘 다 작업을 진행하였고 해당 서비스로 실사용자 300명 30000건의 트래픽을 받은 경험이 있습니다.",
          contributions: ["프론트엔드 인터페이스 구현", "관계형 데이터베이스 ERD 및 설계", "Nestjs를 사용하여 서버 구축", "RESTfull API 작업", "Swagger를 활용한 API 명세 적용", "Nginx 웹서버 구성"],
          techStack: ["TypeScript", "Nextjs", "React", "styled-components", "AWS(S3 / CF / Route53 / Certificate Manager / EC2)", "Nestjs", "Nginx"],
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
            "Semantic Markup을 신경쓰며 코드 가독성을 향상시키는 데 노력합니다.", //
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
            "ES6+ 문법에 익숙하며, 모던 자바스크립트 코드를 작성할 수 있습니다.", //
            "비동기 프로그래밍(Promise, async/await)을 이해하고 활용합니다.",
            "타입 시스템을 활용하여 안정적인 코드를 작성합니다.", //
            "인터페이스, 제네릭, 유니온 타입 등 TypeScript의 고급 기능을 활용합니다.",
            "React와 TypeScript를 함께 사용한 프로젝트 경험이 있습니다.",
            "타입 추론을 최대한 활용하여 효율적인 코드를 작성합니다.",
          ],
          additionalInfo: [
            "화살표 함수, 구조 분해 할당, 스프레드 연산자 등을 적극 활용합니다.", //
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
            "Node.js와 NestJS를 활용한 백엔드 개발 경험이 있습니다.", //
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
