
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ujjwalpokharel.com.np"),

  title: {
    default: "Ujjwal Pokharel | Software Engineer & Full Stack Developer",
    template: "%s | Ujjwal Pokharel",
  },

  description:
    "Official portfolio of Ujjwal Pokharel, a Software Engineer with 4+ years of experience building scalable web applications using React, Next.js, TypeScript, NestJS and PostgreSQL. Exploring AI Engineering.",

  applicationName: "Ujjwal Pokharel Portfolio",

  authors: [
    {
      name: "Ujjwal Pokharel",
      url: "https://ujjwalpokharel.com.np",
    },
  ],

  creator: "Ujjwal Pokharel",
  publisher: "Ujjwal Pokharel",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ujjwalpokharel.com.np",
    siteName: "Ujjwal Pokharel",
    title: "Ujjwal Pokharel | Software Engineer",
    description:
      "Explore the portfolio, professional experience and projects of Ujjwal Pokharel, Software Engineer and Full Stack Developer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ujjwal Pokharel - Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ujjwal Pokharel | Software Engineer",
    description:
      "Software Engineer specializing in React, Next.js, NestJS and modern web technologies.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300/70 selection:text-teal-900`}
      >
        {children}
      </body>
    </html>
  );
}
