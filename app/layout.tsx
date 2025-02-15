import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/header/header';
import Footer from '@/components/footer/footer';
import React from 'react';
import darkLogo from '/public/images/icon.png';
import lightLogo from '/public/images/icon-light.png';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Luxstay Ventures | Luxury Short-Stay Rentals for Business & Leisure',
  description:
    'Luxstay Ventures offers exceptional short-stay rentals designed for luxury, comfort, and convenience. Explore our premium accommodations tailored for both business and leisure travelers.',
  icons: {
    icon: [
      {
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
        url: lightLogo.src,
        href: lightLogo.src,
      },
      {
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
        url: darkLogo.src,
        href: darkLogo.src,
      },
    ],
    apple: lightLogo.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics GA4 Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X0SZDJHBZ1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X0SZDJHBZ1', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
