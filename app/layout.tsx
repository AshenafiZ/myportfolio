
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import PageTransition from "@/components/PageTransition"; 
import StairTransition from "@/components/StairTransition"; 

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-jetbrainsMono'});

export const metadata: Metadata = {
  title: "Ashenafi",
  description: "Ashenafi's Portfolio Website ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <style>{`
          :root {
            --radius: 8px;
            --ring: 2px solid black; /* Default ring */
          }
        `}</style>
      </head>
      <body
        className={jetbrainsMono.variable}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
