
import "@/styles/index.scss";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="https://placehold.co/64x64/1a1a1a/ffffff?text=AP" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
      </head>

      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
