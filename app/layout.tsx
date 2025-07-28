import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["latin"],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "کافه یوکیو",
  description: "منو کافه یوکیو",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vazir.className} antialiased scroll-smooth bg-emerald-100`}
      >
        {children}
      </body>
    </html>
  );
}
