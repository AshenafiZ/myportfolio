
import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import PageTransition from "@/components/PageTransition"; 
import StairTransition from "@/components/StairTransition"; 

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-jetbrainsMono'});
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: '--font-spaceGrotesk'});

export const metadata: Metadata = {
  title: "Ashenafi Zewdie — Computer Engineer",
  description: "Ashenafi Zewdie — Full-stack developer & hardware/embedded systems engineer. Web, mobile, and IoT builds from Addis Ababa, Ethiopia.",
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
        className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
