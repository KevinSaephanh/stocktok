import Link from "next/link";
import * as React from "react";
import { useSelector } from "react-redux";
import { getUserState } from "../../store/users/slice";

const links = [
  { href: "/watchlist", label: "Watchlist" },
  { href: "/help", label: "Help Center" },
];

export const Navbar: React.FC = () => {
  const { user } = useSelector(getUserState);
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="w-full sticky flex shadow-lg p-4">
      <div className="flex space-x-7">
        {/* <!-- Website Logo --> */}
        <div className="w-3/12 flex items-center">
          <Link className="text-2xl font-semibold" href="/">
            <img
              className="rounded-full w-10 border-2 border-transparent hover:border-indigo-400"
              src={`https://robohash.org/${Math.floor(Math.random() * (1000 - 1 + 1))}`}
              alt="Logo"
            />
          </Link>
        </div>
        {/* <!-- Primary Navbar items --> */}

        <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Services
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                About us
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Contact us
              </a>
            </Link>
            {!!user ? (
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
