import "./_styles/globals.css";

import Header from "./_components/Header/Header";

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
    <html lang="en" className="dark">
      <body className="bg-light-bg dark:bg-dark-bg">
        <InnerLayout>{children}</InnerLayout>
      </body>
    </html>
  );
}
