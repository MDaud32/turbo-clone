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
      return (
        <div className="text-black dark:text-white">
          <BsSunFill onClick={() => setTheme("light")} />
        </div>
      );
    } else {
      return (
        <div className="text-black dark:text-white">
          <BsMoonFill onClick={() => setTheme("dark")} />
        </div>
      );
    }
  };
  return (
    <>
      <nav className="relative w-full flex flex-wrap top-0 items-center justify-between px-2 py-2 dark:bg-black/60 bg-white/90 mb-3 shadow-sm dark:shadow-gray-600 shadow-gray-200 md:fixed">
        <div className="max-w-6xl px-4 md:mx-auto flex flex-col md:items-center md:flex-row w-full justify-between">
          <div className=" w-full relative flex flex-row justify-between lg:w-auto lg:static ">
            <Link
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase dark:text-white"
              href="/">
              Turbo
            </Link>
            <div className="border-[1px] py-1 px-2 text-[12px] text-gray-500 dark:text-gray-400 dark:border-gray-400 rounded-md h-7 mt-3 items-center">
              <Link
                href=""
                className="mr-2 hover:text-gray-700 dark:hover:text-white">
                Repo
              </Link>
              <Link
                href=""
                className="hover:text-gray-700 dark:hover:text-white">
                Pack
              </Link>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              {!navbarOpen ? (
                <FiMenu className="text-black dark:text-white" />
              ) : (
                <AiOutlineClose className="text-black dark:text-white" />
              )}
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
                  className="block w-full p-2 text-sm text-gray-900 border  rounded-lg dark:bg-gray-900/40 bg-gray-50 focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search Docomentation..."
                />
                <div className="absolute inset-y-0 pl-2 left-0 flex items-center pointer-events-none">
                  <span className="sr-only">Search icon</span>
                </div>
              </div>
              <ul className="flex flex-col md:flex-row list-none lg:ml-auto text-black dark:text-gray-500">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-500 hover:opacity-75 dark:hover:text-white"
                    href="#pablo">
                    <span className="ml-1">Blog</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-500 hover:opacity-75 dark:hover:text-white"
                    href="#pablo">
                    <span className="ml-1">Showcase</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-500 hover:opacity-75 dark:hover:text-white"
                    href="#pablo">
                    <span className="ml-1">Enterprise</span>
                  </Link>
                </li>
              </ul>
              <div className="relative hidden md:block">
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-56 p-1  pl-4 text-sm border text-gray-900 dark:focus:border-blue-500  dark:focus:border-2 outline-none rounded-lg bg-gray-50  dark:bg-slate-500/30 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Search Documentation"
                />
                <div className="absolute top-0 mt-[6px] mr-2 px-1 right-0 flex items-center pointer-events-none border-[1px] border-gray-300 text-gray-500 rounded-[3px] text-[10px]">
                  CTRL K
                </div>
              </div>
              <button className="ml-2 items-center text-xl">
                {renderThemeChanger()}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
