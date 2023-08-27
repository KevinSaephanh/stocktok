import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

type NavLinkProps = {
  href: string;
  label: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`link-item flex items-center font-bold hover-highlight text-xl py-2 hover:underline hover:underline-offset-4 ${
          router.pathname === href ? 'active-link' : ''
        }`}
        aria-current='page'
      >
        {label}
      </a>
    </Link>
  );
};
