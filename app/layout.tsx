import "./_styles/globals.css";
import "./_styles/reset.css";

import GoogleAnalytics from "./_components/GoogleAnalytics";
import Header from "./_components/Header";
import { DEFAULT_METADATA } from "./_lib/seo/config";

export const metadata = DEFAULT_METADATA;

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="max-w-[1050px] mx-auto">{children}</div>
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="생각이 존재하는 곳" />
      </head>
      <GoogleAnalytics />
      <body className="bg-light-bg dark:bg-dark-bg">
        <InnerLayout>{children}</InnerLayout>
      </body>
    </html>
  );
}
