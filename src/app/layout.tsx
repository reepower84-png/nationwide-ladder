import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "전국사다리원 | 전국 어디든 사다리차·스카이차·카고크레인 배차",
  description: "전국 어디든, 올려야 할 순간엔 전국사다리원. 공사·이사·설비·간판 작업까지 한 번에 해결하는 사다리차 전문 배차 서비스",
  keywords: "사다리차, 스카이차, 카고크레인, 배차, 중개, 이사, 공사, 설비, 간판",
  openGraph: {
    title: "전국사다리원 | 전국 사다리차 배차 서비스",
    description: "전국 어디든, 올려야 할 순간엔 전국사다리원",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* 카카오톡 플로팅 버튼 */}
        <a
          href="http://pf.kakao.com/_xfqPAX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110"
          aria-label="카카오톡 상담"
        >
          <Image
            src="/카톡_원형_로고.png"
            alt="카카오톡 상담"
            width={60}
            height={60}
            className="rounded-full shadow-lg"
          />
        </a>
      </body>
    </html>
  );
}
