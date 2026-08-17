import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

/* 디자인 파일이 Inter 를 쓴다. 정적 내보내기라 빌드 시점에 self-host 된다. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logo — Welcome to our new website!",
  description:
    "Your collections, your references, your taste. Connected, searchable, yours.",
};

/*
 * 헤더·푸터는 사이트 공통 크롬이라 레이아웃에서 관리한다.
 * 라우트가 늘어나도 각 페이지가 다시 붙일 필요가 없고, not-found 에도 그대로 적용된다.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-base font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
