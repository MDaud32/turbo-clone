import Image from "next/image";
import Link from "next/link";
import React from "react";
import repoLogo from "../public/repo-hero-logo-light.svg";
import turboLogo from "../public/turbopack-hero-logo-light.svg";
import adobe from "../public/adobe.svg";
import aws from "../public/aws.svg";
import disney from "../public/disney.svg";
import microsoft from "../public/microsoft.svg";
import netflix from "../public/netflix.svg";
import vercel from "../public/vercel.svg";
import adobe1 from "../public/adobe1.svg";
import aws1 from "../public/aws1.svg";
import disney1 from "../public/disney1.svg";
import microsoft1 from "../public/microsoft1.svg";
import netflix1 from "../public/netflix1.svg";
import vercel1 from "../public/vercel1.svg";
import { useTheme } from "next-themes";

const HeroPage = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="max-w-3xl gap-6 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-center mt-4 items-center px-12 md:px-0">
          <Image src={vercel} alt="vercel logo" className="w-28 " />
          <Image src={adobe} alt="adobe logo" className="w-28" />
          <Image src={aws} alt="aws logo" className="w-16" />
          <Image src={disney} alt="disney logo" className="w-28" />
          <Image src={microsoft} alt="microsoft logo" className="w-28" />
          <Image src={netflix} alt="netflix" className="w-28" />
        </div>
      );
    } else {
      return (
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-center gap-4 mt-4 items-center px-12 md:px-0">
          <Image src={vercel1} alt="vercel logo" className="w-28" />
          <Image src={adobe1} alt="adobe logo" className="w-28" />
          <Image src={aws1} alt="aws logo" className="w-16" />
          <Image src={disney1} alt="disney logo" className="w-28" />
          <Image src={microsoft1} alt="microsoft logo" className="w-28" />
          <Image src={netflix1} alt="netflix" className="w-28" />
        </div>
      );
    }
  };
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center dark:text-transparent text-black dark:bg-clip-text bg-gradient-to-tr dark:from-gray-400 dark:to-gray-50 mt-40">
        Make Ship Heppen
      </h1>
      <p className="text-center text-xl max-w-lg mx-auto  text-gray-500 dark:text-gray-300 mt-4">
        Turbo is an incremental bundler and build system
        <br /> optimized for JavaScript and TypeScript, written in Rust.
      </p>
      <div className="flex flex-col md:flex-row mx-auto justify-center mt-16 md:space-x-4 gap-4">
        <Link
          href="/RepoPage"
          className="w-[70%] md:w-[27%] border-[1px] dark:border-gray-800 rounded-md hover:bg-gradient-to-r p-[2px] from-pink-500 via-red-500 to-yellow-500 mx-auto md:mx-0">
          <div className="z-10 py-[3.3rem] bg-[#fffbfd] dark:bg-black rounded-md w-full      ">
            <Image
              src={repoLogo}
              width={72}
              height={72}
              alt="repo logo"
              className="mx-auto mb-3"
            />
            <h1 className="uppercase text-xl md:text-2xl font-extrabold text-center">
              Turborepo
            </h1>
            <p className="text-center  text-sm text-gray-500">
              High-performance build system for
              <br /> JavaScript and TypeScript codebases.
            </p>
          </div>
        </Link>
        <Link
          href="#"
          className="w-[70%] md:w-[27%] border-[1px] dark:border-gray-800 rounded-md  hover:bg-gradient-to-r p-[2px] from-pink-500 via-red-500 to-yellow-500 mx-auto md:mx-0">
          <div className="z-10 py-[3.3rem] bg-[#FFFBFD] dark:bg-black w-full p-[1px] rounded-md">
            <Image
              src={turboLogo}
              width={72}
              height={72}
              alt="repo logo"
              className="mx-auto mb-3"
            />
            <h1 className="uppercase text-xl md:text-2xl font-extrabold text-center">
              Turbopack
            </h1>
            <p className="text-center text-sm text-gray-500">
              Introducing the Rust-powered
              <br /> successor to Webpack.
            </p>
          </div>
        </Link>
      </div>
      <p className="text-center mt-12 text-[12px] text-gray-400">
        TRUSTED BY TEAMS FROM AROUND THE WORLD
      </p>
      <div>{renderThemeChanger()}</div>
    </div>
  );
};

export default HeroPage;
