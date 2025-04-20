import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer"
import Image from "next/Image"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-noto-sans flex flex-col min-h-screen justify-between bg-[rgb(91,209,215)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
