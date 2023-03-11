import React from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <BsSunFill onClick={() => setTheme("light")} />;
    } else {
      return <BsMoonFill onClick={() => setTheme("dark")} />;
    }
  };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-black/30 mb-3">
        <div className="max-w-6xl px-4 mx-auto flex flex-col md:flex-row w-full justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block ">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/">
              Turbo
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              {!navbarOpen ? <FiMenu /> : <AiOutlineClose />}
            </button>
          </div>
          {/* mobile */}
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger">
            <div className="flex flex-col md:flex-row md:ml-auto w-full">
              <div className="relative block md:hidden">
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Docomentation..."
                />
                <div className="absolute inset-y-0 pl-2 left-0 flex items-center pointer-events-none">
                  <span className="sr-only">Search icon</span>
                </div>
              </div>
              <ul className="flex flex-col md:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo">
                    <span className="ml-1">Blog</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo">
                    <span className="ml-1">Showcase</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo">
                    <span className="ml-1">Enterprise</span>
                  </Link>
                </li>
              </ul>
              <div className="relative hidden md:block">
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-56 p-1 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Documentation"
                />
                <div className="absolute top-0 mt-[6px] mr-2 px-1 right-0 flex items-center pointer-events-none border-[1px] border-gray-500 rounded-[3px] text-[10px]">
                  CTRL K
                </div>
              </div>
              <button className="ml-2">{renderThemeChanger()}</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
