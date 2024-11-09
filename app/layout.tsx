import Header from "./_components/Header/Header";

import "./_styles/globals.css";

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-light-bg dark:bg-dark-bg">
        <InnerLayout>{children}</InnerLayout>
      </body>
    </html>
  );
}
