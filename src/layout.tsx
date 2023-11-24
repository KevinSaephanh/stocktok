import * as React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import Provider from 'provider';
import { Seo } from '@components/SEO/Seo';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
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
};
