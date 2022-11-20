import * as React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <main role="main" className="p-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};
