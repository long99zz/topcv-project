import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "TopCV - Nền tảng tuyển dụng hàng đầu Việt Nam",
  description: "TopCV - Website tuyển dụng trực tuyến hàng đầu Việt Nam. Tìm việc làm nhanh chóng và dễ dàng với hàng ngàn cơ hội nghề nghiệp từ các công ty uy tín.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
