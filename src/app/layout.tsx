import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ゆれキャッチ | あなたの安全を守る地震速報アプリ",
  description: "ゆれキャッチは、最新の地震情報をリアルタイムでお届けし、あなたとあなたの大切な人の安全を守るためのアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
