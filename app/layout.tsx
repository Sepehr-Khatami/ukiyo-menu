import type { Metadata,Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";


const vazir = Vazirmatn({
  subsets: ["latin"],
  variable: "--font-vazir",
  preload: true,
});
export const viewport: Viewport = {
  themeColor: "#059669",
};
 

export const metadata: Metadata = {
  title: "کافه رستوران یوکیو",
  description:
    "منوی کامل کافه یوکیو. مشاهده انواع نوشیدنی، قهوه، کیک و غذاهای جذاب.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-512.png",
    shortcut: "/favicon.ico",
  },
  
  openGraph: {
    title: "کافه یوکیو",
    description: "منوی کامل نوشیدنی‌ها و غذاها.",
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
    title: "کافه یوکیو",
    description: "منوی کامل نوشیدنی‌ها و غذاها.",
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
        {children}
        
      </body>
    </html>
  );
}
