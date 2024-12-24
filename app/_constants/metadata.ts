import { Metadata } from "next";

export const SITE_CONFIG = {
  title: "경계없는 개발 이야기",
  description: "기술과 창의성이 만나는 곳, 개발을 넘어선 새로운 이야기를 시작합니다.",
  url: "https://jeonghodong.com",
  author: "정호동",
  language: "ko-KR",
};

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["개발자", "프론트엔드", "백엔드", "웹개발", "기술블로그", "JavaScript", "TypeScript", "React", "Next.js", "풀스택", "개발자 블로그", "개발자 이야기", "개발자 경험"],
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.language,
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ["/images/og_image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // 아이콘 설정 통합
  icons: {
    icon: [{ url: "/images/favicon.ico" }, { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" }, { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/images/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/images/apple-touch-icon.png",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  metadataBase: new URL(SITE_CONFIG.url),
};
