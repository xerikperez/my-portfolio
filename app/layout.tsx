import type { Metadata } from "next";
import "./globals.css";
import { Orbitron, Inter } from "next/font/google";

// Free, Tesla‑adjacent display font for headings
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
// Body font fallback
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CoreVisionEP – HomePage",
  description:
    "Welcome to CoreVisionEP, where we build fast, elegant, and automated web solutions.",
};

// (Optional Local Font) — if you own a licensed Tesla‑style font file
// import localFont from 'next/font/local';
// const teslaLocal = localFont({
//   src: [{ path: '../public/fonts/tesla.woff2', weight: '400', style: 'normal' }],
//   variable: '--font-orbitron',
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
