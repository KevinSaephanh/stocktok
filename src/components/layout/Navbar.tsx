import Link from "next/link";
import * as React from "react";
import { useAppSelector } from "../../store/hooks";
import Pepe from "../../assets/pepe-business.png";

const links = [
  { href: "/watchlist", label: "Watchlist" },
  { href: "/help", label: "Help Center" },
];

export const Navbar: React.FC = () => {
  const user = useAppSelector((state) => state.users.user);
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-white w-full px-2 sm:px-4 py-2.5 dark:bg-gray-900 flex h-10 sticky">
      <div className="flex space-x-7">
        {/* Logo */}
        <div className="flex justify-between md:w-auto md:static md:block md:justify-start">
          <Link href="/">
            <img className="h-5" src={Pepe.src} alt="Logo" />
          </Link>
        </div>

        {/* Nav Items */}
        <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            {links.map((link, key) => (
              <Link href={link.href} key={key}>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                  {link.label}
                </a>
              </Link>
            ))}

            {/* Auth */}
            {!user ? (
              <>
                <Link href="/">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                    Signup
                  </a>
                </Link>
                <Link href="/">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                    Login
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/">
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                    Logout
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
