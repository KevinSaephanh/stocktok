import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import * as React from 'react';
import Provider from './provider';

export const metadata = {
  title: 'StockTok',
  author: 'Kevin Saephanh',
  description: 'Stock site',
  language: 'en-us',
  locale: 'en-US',
  openGraph: {
    title: 'Kevin Saephanh',
    description: '',
    type: 'website',
    url: 'https://kevinsaephanh.com/',
    siteName: 'Kevin Saephanh',
    images: [],
  },
  twitter: {
    card: 'summary_large_image',
    handle: 'Kevcoolio',
    site: 'https://twitter.com/Kevcoolio',
    description: '',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col justify-between">
        <Provider>
          <Navbar />
          <main role="main" className="p-5 my-5 flex-auto">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
