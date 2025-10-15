import { Metadata } from "next";

export const SITE_CONFIG = {
  title: "생각이 존재하는 곳",
  description: "개발과 일상의 경계를 허물며 기록하는 공간",
  url: "https://jeonghodong.com",
  author: "정호동",
  language: "ko-KR",
};

export const DEFAULT_METADATA: Metadata = {
  verification: {
    google: "bgB4JW8glK8msaOSEyjt5lj2m42rH7foKqPyTx9ljSc",
  },
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["개발자", "프론트엔드", "백엔드", "웹개발", "기술블로그", "JavaScript", "TypeScript", "React", "Next.js", "풀스택", "개발자 블로그", "개발자 이야기", "개발자 경험"],
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "ko-KR": SITE_CONFIG.url,
    },
  },
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
