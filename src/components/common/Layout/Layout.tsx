import * as React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen flex-col justify-between'>
      <Navbar />
      <main role='main' className='p-5 my-5 flex-auto'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
