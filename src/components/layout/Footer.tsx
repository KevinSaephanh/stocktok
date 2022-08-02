import Link from "next/link";
import * as React from "react";

const links = [
  { href: "/", label: "Route 1" },
  { href: "/", label: "Route 2" },
];

export const Footer: React.FC = () => {
  return <footer className="flex items-center h-10">FOOTER</footer>;
};
