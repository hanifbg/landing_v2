import type { Metadata } from "next";
// Keep Geist fonts for now, we can swap if needed later
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header"; // Your updated Header component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iQibla Indonesia", // Updated title
  description: "Your Daily Spiritual Companion, Reimagined.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply Geist fonts and antialiasing to the body */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Render the Header component */}
        <Header />
        {/*
          The main content area needs padding-top to prevent it from being
          hidden under the fixed header. The header has a height, so pt-[header-height]
          is appropriate. Your header is roughly 64px (py-4 top/bottom + content height),
          so pt-16 (64px) is a good start.
          We'll keep the pt-16 on the main tag for now, as individual pages
          will likely have their own top padding within their main content div.
          Alternatively, you can apply it directly to the body and remove from main,
          but pt-16 on main is common.
        */}
        {children}
      </body>
    </html>
  );
}