import Link from 'next/link';
import * as React from 'react';

type NavLinkProps = {
  href: string;
  label: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a
        className='link-item flex items-center font-bold hover-highlight text-xl py-2 hover:underline hover:underline-offset-4'
        aria-current='page'
      >
        {label}
      </a>
    </Link>
  );
};
