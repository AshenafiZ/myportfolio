import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashenafi-zewdie.vercel.app"),

  title: {
    default: "Ashenafi Zewdie | Full Stack Developer & Computer Engineer",
    template: "%s | Ashenafi Zewdie",
  },

  description:
    "Ashenafi Zewdie is a Full Stack Developer and Computer Engineer from Ethiopia specializing in Next.js, React, Flutter, IoT, Embedded Systems, Networking, and Web Development.",

  keywords: [
    "Ashenafi Zewdie",
    "Ashenafi",
    "Full Stack Developer",
    "Computer Engineer",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "IoT",
    "Embedded Systems",
    "Ethiopia",
  ],

  authors: [{ name: "Ashenafi Zewdie" }],
  creator: "Ashenafi Zewdie",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ashenafi Zewdie",
    description:
      "Computer Engineer & Full Stack Developer Portfolio",
    url: "https://ashenafi-zewdie.vercel.app",
    siteName: "Ashenafi Zewdie",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashenafi Zewdie Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashenafi Zewdie",
    description:
      "Computer Engineer & Full Stack Developer",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      >
        <StructuredData />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}