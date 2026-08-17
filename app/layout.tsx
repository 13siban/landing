import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* 디자인 파일이 Inter 를 쓴다. 정적 내보내기라 빌드 시점에 self-host 된다. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logo — Welcome to our new website!",
  description: "Your collections, your references, your taste. Connected, searchable, yours.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
