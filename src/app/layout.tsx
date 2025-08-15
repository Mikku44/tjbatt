import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const noto = Noto_Sans_Thai({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "TJ Batt – ตั้งใจขายแบต",
  description:
    "บริการเปลี่ยนและติดตั้งแบตเตอรี่รถยนต์ถึงที่ พร้อมเลี้ยงไฟป้องกันข้อมูลหาย ตรวจเช็กสุขภาพแบตเตอรี่ฟรี บริการรวดเร็ว ครอบคลุมหลายพื้นที่",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={` ${noto.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
