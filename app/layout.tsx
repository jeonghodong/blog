import "./_styles/globals.css";
import "./_styles/reset.css";

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
      <body className="bg-light-bg dark:bg-dark-bg">
        <InnerLayout>{children}</InnerLayout>
      </body>
    </html>
  );
}
