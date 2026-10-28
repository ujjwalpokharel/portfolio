import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ujjwal Pokharel · Software Engineer",
  description: "Software engineer building scalable web applications with React, Next.js and NestJS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300/70 selection:text-teal-900`}>
        {children}
      </body>
    </html>
  );
}
