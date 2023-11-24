import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import { ThemeButton } from '../Buttons/ThemeButton';
import { NavLink } from './NavLink';
import { HamburgerButton } from '../Buttons/HamburgerButton';

export const Navbar: React.FC = () => {
  const user = null;
  const [open, setOpen] = React.useState(false);

  return (
    <nav
      className={`w-full flex-none mt-4 px-2 lg:px-6 md:h-16 z-20 shadow-md dark:shadow-none ${
        open ? 'fixed pb-4' : 'relative'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between">
        <section className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <Image
              src="/assets/pepe-business.png"
              alt="pepe"
              height={35}
              width={35}
              layout="fixed"
              className="mt-4 cursor-pointer"
            />
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="mt-2 inline-flex items-center p-2 ml-2 themed-text rounded-lg md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <HamburgerButton
              path={`${
                !open ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'
              }`}
            />
          </button>
        </section>

        <section
          className={`flex-center flex-col md:flex-row md:flex md:ml-auto w-full md:w-auto pr-2 lg:pr-0
              ${open ? 'flex' : 'hidden'}`}
        >
          <ul className="flex flex-col md:flex-row list-none p-2 mt-4 md:space-x-8 md:mt-0">
            <NavLink href={'/about'} label={'About'} />
            <NavLink href={'/help'} label={'Help'} />
            {!user ? (
              <>
                <NavLink href={'/signup'} label={'Signup'} />
                <NavLink href={'/login'} label={'Login'} />
              </>
            ) : (
              <NavLink href={'#'} label={'Logout'} />
            )}
          </ul>
          <ThemeButton />
        </section>
      </div>
    </nav>
  );
};
