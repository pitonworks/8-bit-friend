import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "8-Bit Friend",
  description: "Your retro-style companion for the modern web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart.variable}`}>
      <body className={`${pressStart.className} antialiased`}>{children}</body>
    </html>
  );
}
