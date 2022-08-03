import * as React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <main className="p-5">{children}</main>
      <Footer />
    </div>
  );
};
