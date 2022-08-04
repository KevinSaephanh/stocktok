import Link from "next/link";
import * as React from "react";

type NavLinkProps = {
  href: string;
  label: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a className="nav-item link-item text md:text-lg block px-3 py-2" aria-current="page">
        {label}
      </a>
    </Link>
  );
};
