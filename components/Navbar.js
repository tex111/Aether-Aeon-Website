import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();

  const [showNavMenu, setShowNavMenu] = useState(false);

  function CheckActive(linkRoute) {
    let result = "mr-4 text-gray-400";

    if (router.pathname === linkRoute) {
      result = "mr-4";
    }

    return result;
  }

  return (
    <nav className="fixed top-0 left-0 w-screen h-auto mb-4 bg-slate-900">
      <div className="flex flex-wrap px-4 py-4 md:px-8 items-center text-white">
        <div className="flex w-full justify-between">
          <div className="flex">
            <div className="mr-8 text-xl whitespace-nowrap">Aether Aeon</div>
            <div className="hidden md:flex">
              <Link href="/">
                <a className={CheckActive("/")}>Home</a>
              </Link>
              <Link href="/news">
                <a className={CheckActive("/news")}>News</a>
              </Link>
              <Link href="/about">
                <a className={CheckActive("/about")}>About</a>
              </Link>
              <Link href="/wiki">
                <a className={CheckActive("/wiki/[[...params]]")}>Wiki</a>
              </Link>
            </div>
          </div>
          <div className="flex">
            <button className="md:hidden flex items-center px-2 py-2 border rounded border-white">
              <FaBars />
            </button>
            <div className="hidden md:flex">Searchbar</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
