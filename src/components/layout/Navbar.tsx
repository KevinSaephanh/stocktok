import Link from "next/link";
import * as React from "react";
import { useAppSelector } from "../../store/hooks";
import Pepe from "../../assets/pepe-business.png";
import { ThemeButton } from "../buttons/ThemeButton";
import { SvgButton } from "../buttons/SvgButton";
import { NavLink } from "../link/NavLink";

export const Navbar: React.FC = () => {
  const user = useAppSelector((state) => state.users.user);
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          {/* Logo */}
          <Link href="/">
            <a href="#" className="flex items-center">
              <img src={Pepe.src} className="mr-3 h-6 sm:h-9" alt="Logo" />
            </a>
          </Link>

          {/* Hamburger menu */}
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-white rounded-lg md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <SvgButton path={"M4 6h16M4 12h16M4 18h16"} handleClick={() => {}} />
            ) : (
              <SvgButton path={"M6 18L18 6M6 6l12 12"} handleClick={() => {}} />
            )}
          </button>
        </div>

        {/* Search and Theme Buttons */}
        <div className="md:flex flex-grow items-center">
          <button
            type="submit"
            className="p-2 text-sm font-medium text-black dark:text-white rounded-full hover:text-blue-500 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <ThemeButton />
        </div>

        {/* Links */}
        <div
          className={"md:flex flex-grow items-center" + (open ? " flex" : " hidden")}
          id="example-navbar-danger"
        >
          <ul className="flex flex-col md:flex-row list-none md:ml-auto bg-gray-50 rounded-lg border border-gray-100 md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink href={"/help"} label={"Help Center"} />
            {!user ? (
              <>
                <NavLink href={"#"} label={"Signup"} />
                <NavLink href={"#"} label={"Login"} />
              </>
            ) : (
              <NavLink href={"#"} label={"Logout"} />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
