import type { Metadata,Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const vazir = Vazirmatn({
  subsets: ["latin"],
  variable: "--font-vazir",
});
export const viewport: Viewport = {
  themeColor: "#059669",
};
 

export const metadata: Metadata = {
  title: "کافه رستوران یوکیو",
  description:
    "منوی کامل کافه اوکیو. مشاهده انواع نوشیدنی، قهوه، کیک و خوراکی‌های جذاب.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-512.png",
  },
  
  openGraph: {
    title: "منوی کافه اوکیو",
    description: "منوی کامل نوشیدنی‌ها و خوراکی‌های خوشمزه.",
    url: "https://ukiyocafe.ir",
    siteName: "Ukiyo Café",
    images: [
      {
        url: "https://ukiyocafe.ir/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "منوی کافه اوکیو",
    description: "منوی کامل نوشیدنی‌ها و خوراکی‌های خوشمزه.",
    images: ["https://ukiyocafe.ir/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${vazir.className} antialiased scroll-smooth bg-emerald-100`}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
