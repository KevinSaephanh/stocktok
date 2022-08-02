import * as React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <div className="flex flex-1 overflow-auto">{children}</div>
      <Footer />
    </div>
  );
};
