import * as React from 'react';
import Provider from 'provider';
import { Seo } from '@components/SEO/Seo';
import { Footer } from '@components/Footer/Footer';
import { Navbar } from '@components/Navbar/Navbar';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Seo />
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
