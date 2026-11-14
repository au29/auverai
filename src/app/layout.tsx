import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AUVERAI Innovations — Building What’s Next",
    template: "%s | AUVERAI Innovations",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: site.name,
    title: "AUVERAI Innovations — Building What’s Next",
    description: site.description,
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "AUVERAI Innovations — Building what’s next.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/social-card.png"],
  },
  icons: {
    icon: { url: "/favicon.png", type: "image/png", sizes: "64x64" },
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${mono.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
