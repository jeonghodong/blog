import "./_styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-light-bg dark:bg-dark-bg min-h-screen">{children}</body>
    </html>
  );
}
