import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"; // Importing a Serif
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Adding a sophisticated Serif for headings
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoundBridge Financial | Strategy-First Protection & Planning",
  description:
    "Modern protection and planning strategies for high-performing individuals and business owners. Alliance programs for trusted advisors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-stone-50/50`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
