import './globals.css'; // 꼭 있어야 함!


export const metadata = {
  title: '분실물센터: 잃어버린 시선을 찾아드립니다.',
  description: '전시회 프로그램',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/IMG_1665.PNG" />
        <meta name="theme-color" content="#000000" />

      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

