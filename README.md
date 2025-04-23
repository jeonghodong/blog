# 블로그 프로젝트

Next.js와 TypeScript를 사용한 개인 블로그 / 이력서 / 갤러리 프로젝트입니다.

! 갤러리는 일상 스트릿 사진을 촬영하는 것이 취미라 개발하여 제 작품을 올립니다.

## 🚀 주요 기능

- 마크다운 기반 블로그 포스트
- 태그 기반 포스트 필터링
- 반응형 디자인
- SEO 최적화
- 다크 모드 지원

## 🛠 기술 스택

- **프레임워크**: Next.js 14
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **마크다운 처리**: gray-matter
- **이미지 최적화**: next/image
- **타입 시스템**: TypeScript
- **폼 관리**: React Hook Form
- **상태 관리**: React Context API

## 📁 프로젝트 구조

```
📦app
 ┣ 📂(route)
 ┃ ┣ 📂about
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂photos
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂post
 ┃ ┃ ┗ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┗ 📂resume
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┣ 📜ProjectSection.tsx
 ┃ ┃ ┃ ┗ 📜SkillSection.tsx
 ┃ ┃ ┣ 📂_constants
 ┃ ┃ ┃ ┗ 📜data.ts
 ┃ ┃ ┗ 📜page.tsx
 ┣ 📂_assets
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜noto-sans-en.woff2
 ┃ ┃ ┗ 📜noto-sans-kr.woff2
 ┃ ┣ 📂icons
 ┃ ┃ ┣ 📜GithubIcon.tsx
 ┃ ┃ ┣ 📜LinkedinLogo.tsx
 ┃ ┃ ┣ 📜ic_dark_mode.svg
 ┃ ┃ ┗ 📜ic_light_mode.svg
 ┃ ┗ 📂images
 ┃ ┃ ┗ 📜profile.jpeg
 ┣ 📂_components
 ┃ ┣ 📂BlogWrapper
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Button
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜ScrollProgressBar.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂MarkdownRenderer
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂PostList
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂SideBar
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂TableOfContents
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂Typography
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂_lib
 ┃ ┣ 📂seo
 ┃ ┃ ┣ 📜config.ts
 ┃ ┃ ┣ 📜metadata.ts
 ┃ ┃ ┣ 📜robots.ts
 ┃ ┃ ┗ 📜sitemap.ts
 ┃ ┣ 📂types
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜posts.ts
 ┣ 📂_styles
 ┃ ┣ 📜globals.css
 ┃ ┗ 📜reset.css
 ┣ 📂_utils
 ┃ ┗ 📜date.ts
 ┣ 📜layout.tsx
 ┣ 📜page.tsx
 ┣ 📜robots.ts
 ┗ 📜sitemap.ts
```

## 🚀 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev
```

### 빌드

```bash
# 프로덕션 빌드
yarn build

# 프로덕션 서버 실행
yarn start
```

## 📝 블로그 포스트 작성

1. `public/blog-posts` 디렉토리에 새로운 폴더 생성
2. `index.md` 파일 생성
3. 프론트매터 작성:

```markdown
---
title: 포스트 제목
date: 2024-01-01
lastmod: 2024-01-02
excerpt: 포스트 설명
tags: [태그1, 태그2]
draft: false
thumbnail: 이미지파일명.jpg
---

포스트 내용...
```

## 🎨 스타일 가이드

- [Tailwind CSS](https://tailwindcss.com/) 사용
- 컴포넌트별 스타일 모듈화
- 반응형 디자인 적용

## 🔍 SEO 최적화

- 메타 태그 자동 생성
- 사이트맵 자동 생성
- robots.txt 설정
