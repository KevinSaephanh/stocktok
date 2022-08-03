import Link from "next/link";
import * as React from "react";

type NavLinkProps = {
  href: string;
  label: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a
        className="nav-item block px-3 py-2 text-black dark:text-white md:text-lg rounded md:bg-transparent md:p-0 hover:text-slate-400 dark:hover:text-slate-500"
        aria-current="page"
      >
        {label}
      </a>
    </Link>
  );
};
