import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "상암동 LUNCH PICK",
  description: "상암동 직장인을 위한 점심 메뉴 추천 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
