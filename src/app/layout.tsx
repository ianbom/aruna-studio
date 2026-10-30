import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARUNA ATELIER | Architecture, Interior & Spatial Design",
  description: "Contemporary architecture and refined spatial experiences shaped by material, proportion, and the quiet beauty of space.",
  keywords: ["Architecture", "Interior Design", "Spatial Design", "Contemporary Architecture", "Minimalist Living", "Aruna Atelier"],
  authors: [{ name: "Aruna Atelier" }],
  openGraph: {
    title: "ARUNA ATELIER | Architecture & Spatial Design",
    description: "Architecture shaped by material, proportion, and the quiet beauty of space.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} dark`}>
      <body className="font-sans bg-background text-foreground min-h-screen flex flex-col selection:bg-accent selection:text-background antialiased">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
