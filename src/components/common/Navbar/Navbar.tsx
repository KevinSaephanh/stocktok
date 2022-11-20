import Link from 'next/link';
import * as React from 'react';
import { useAppSelector } from '../../../store/hooks';
import Pepe from '../../../assets/pepe-business.png';
import { ThemeButton } from '../../ui/Buttons/ThemeButton';
import { NavLink } from './NavLink';
import { HamburgerButton } from '../../ui/Buttons/HamburgerButton';
import { SearchButton } from '../../ui/Buttons/SearchButton';

export const Navbar: React.FC = () => {
  const user = useAppSelector((state) => state.users.user);
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a href="#">
            <img src={Pepe.src} className="mr-3 h-9 ml-2" alt="Logo" />
          </a>
        </Link>

        {/* Search and Theme Buttons */}
        <div className="flex md:order-2">
          <div className="flex flex-grow items-center">
            <button
              type="submit"
              className="p-2 font-medium themed-text rounded-full hover:text-blue-500 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            >
              <SearchButton
                classes="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
              <span className="sr-only">Search</span>
            </button>
            <ThemeButton />
          </div>

          {/* Hamburger menu */}
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-2 themed-text rounded-lg md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <HamburgerButton path={'M4 6h16M4 12h16M4 18h16'} />
            ) : (
              <HamburgerButton path={'M6 18L18 6M6 6l12 12'} />
            )}
          </button>
        </div>

        {/* Links */}
        <div
          className={
            'justify-between items-center w-full md:flex md:w-auto md:order-1' +
            (open ? ' flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 rounded-lg border border-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink href={'/about'} label={'About'} />
            <NavLink href={'/help'} label={'Help Center'} />
            {!user ? (
              <>
                <NavLink href={'/signup'} label={'Signup'} />
                <NavLink href={'/login'} label={'Login'} />
              </>
            ) : (
              <NavLink href={'#'} label={'Logout'} />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
