import Link from 'next/link';
import * as React from 'react';

const sections = [
  {
    title: 'Company',
    links: [
      {
        href: '',
        label: 'About',
      },
      {
        href: '',
        label: 'Features',
      },
    ],
  },
  {
    title: 'Socials',
    links: [
      {
        href: '',
        label: 'Twitter',
      },
      {
        href: '',
        label: 'Contact Us',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        href: '',
        label: 'Privacy Policy',
      },
      {
        href: '',
        label: 'Terms & Conditions',
      },
    ],
  },
];

const links = [
  { href: '', label: 'About' },
  { href: '', label: 'Privacy Policy' },
  { href: '', label: 'Terms & Conditions' },
  { href: '', label: 'Contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className='p-4 shadow md:flex md:items-center md:justify-between md:p-6'>
      <span className='text-sm sm:text-center'>© 2023 Company™ . All Rights Reserved.</span>
      <ul className='flex flex-wrap items-center mt-3 text-sm sm:mt-0'>
        {links.map((link, key) => (
          <li key={key}>
            <Link href={link.href}>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
