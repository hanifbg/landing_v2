import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import '@fontsource/poppins';
import '@fontsource/roboto';
import "./globals.css";
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'iQibla E-commerce',
  description: 'Your trusted source for Islamic products',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen w-full pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
