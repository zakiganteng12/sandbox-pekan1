// app/layout.tsx
// import { ThemeProvider } from "@material-tailwind/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
// Impor komponen yang baru kita buat
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Keren",
  description: "Dibuat dengan Next.js oleh seorang developer hebat!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-100`}>
        {/* Kita bungkus seluruh aplikasi dalam flex container vertikal */}
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* 'children' adalah tempat halaman kita (page.tsx) akan ditampilkan */}
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
