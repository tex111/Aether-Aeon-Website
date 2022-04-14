import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();

  const [showNavMenu, setShowNavMenu] = useState(false);
  const [searchText, setSearchText] = useState("");

  function CheckActive(linkRoute) {
    let result = "";

    if (router.pathname != linkRoute) {
      result = "text-gray-400 hover:text-blue-600 ";
    }

    return result;
  }

  return (
    <nav className="fixed top-0 left-0 w-screen h-auto mb-4 bg-slate-900">
      <div className="flex flex-col px-4 py-4 md:px-8 font-semibold text-white text-lg">
        <div className="flex w-full justify-between">
          <div className="flex">
            <div className="mr-16 text-xl whitespace-nowrap self-center">
              Aether Aeon
            </div>
            <div className="hidden md:flex self-center">
              <Link href="/">
                <a className={CheckActive("/") + "mr-4"}>Home</a>
              </Link>
              <Link href="/news">
                <a className={CheckActive("/news") + "mr-4"}>News</a>
              </Link>
              <Link href="/about">
                <a className={CheckActive("/about") + "mr-4"}>About</a>
              </Link>
              <Link href="/wiki">
                <a className={CheckActive("/wiki/[[...params]]") + "mr-4"}>
                  Wiki
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex w-1/4">
            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              className="hidden md:flex px-2 py-1 pl-4 mr-4 w-full rounded border
              placeholder:text-slate-300 bg-slate-700 border-white 
              focus:ring-blue-600 focus:border-blue-600"
              placeholder="Search Wiki..."
            />
            <button
              type="button"
              className="hidden md:flex px-4 border rounded
              border-white hover:bg-blue-600"
            >
              <span className="self-center">Search</span>
            </button>
          </div>
          <button
            onClick={() => setShowNavMenu(!showNavMenu)}
            type="button"
            className="flex md:hidden items-center px-2 py-2 border rounded border-white"
          >
            <FaBars />
          </button>
        </div>
        <div className={showNavMenu ? "flex flex-col md:hidden" : "hidden"}>
          <Link href="/">
            <a className={CheckActive("/") + "mt-4 self-center"}>Home</a>
          </Link>
          <Link href="/news">
            <a className={CheckActive("/news") + "mt-2 self-center"}>News</a>
          </Link>
          <Link href="/about">
            <a className={CheckActive("/about") + "mt-2 self-center"}>About</a>
          </Link>
          <Link href="/wiki">
            <a
              className={
                CheckActive("/wiki/[[...params]]") + "mt-2 self-center"
              }
            >
              Wiki
            </a>
          </Link>
          <div className="flex mt-4">
            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              className="flex px-2 py-1 pl-4 mr-4 grow rounded border
              placeholder:text-slate-300 bg-slate-700 border-white 
              focus:ring-blue-600 focus:border-blue-600"
              placeholder="Search Wiki..."
            />
            <button
              type="button"
              className="flex px-4 border rounded
              border-white hover:bg-blue-600"
            >
              <span className="self-center">Search</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
