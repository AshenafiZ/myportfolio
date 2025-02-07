import type { Metadata } from "next";
import { JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-jetbrainsMono'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashenafi",
  description: "Ashenafi's Portfolio Website ",
};
// ${geistSans.variable} ${geistMono.variable} antialiased
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        
      </body>
    </html>
  );
}
