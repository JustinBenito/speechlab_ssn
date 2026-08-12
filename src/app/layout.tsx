import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { TopBanner } from "@/components/TopBanner";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Speech Lab, SSN — Frontier Speech & Language Research",
  description:
    "Speech Lab at SSN College of Engineering builds speech recognition, synthesis, translation and assistive voice technology for India, since 2008.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <TopBanner />
        <Nav />
        <div className="h-8" aria-hidden="true" />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
