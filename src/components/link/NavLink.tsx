import Link from "next/link";
import { FC } from "react";

type NavLink = {
  href: string;
  label: string;
};

export const NavLink: FC<NavLink> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a
        className="nav-item block px-3 py-2 text-white md:text-lg rounded md:bg-transparent md:p-0 hover:opacity-75"
        aria-current="page"
      >
        {label}
      </a>
    </Link>
  );
};
