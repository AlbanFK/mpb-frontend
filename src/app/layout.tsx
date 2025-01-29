import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/navigation/floating-navbar";
import menu from "@/lib/constants/menu";
import Footer from "@/components/ui/sections/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased bg-background font-[family-name:var(--font-montserrat)] flex flex-col`}
      >
        <FloatingNav navItems={menu} />
        <div className="w-full h-full max-w-[1500px] mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
