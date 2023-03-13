import Image from "next/image";
import Link from "next/link";
import React from "react";
import vercel from "../public/vercel1.svg";

const Footer = () => {
  return (
    <div className="px-6 md:px-28 flex flex-col justify-center w-full py-12 mx-auto bg-gray-200 mt-10">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-4xl mx-auto gap-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-center">
          <div className="text-gray-500 text-[12px] flex flex-col">
            <h1 className="text-[12px] text-black mb-2">Resourses</h1>
            <Link href="#">Blog</Link>
            <Link href="#">Releases</Link>
          </div>
          <div className="text-gray-500 text-[12px] flex flex-col">
            <h1 className="text-[12px] text-black mb-2">Turborepo</h1>
            <Link href="#">Documentation</Link>
            <Link href="#">API Reference</Link>
            <Link href="#">FAQ</Link>
          </div>
          <div className="text-gray-500 text-[12px] flex flex-col">
            <h1 className="text-[12px] text-black mb-2">Turbopack</h1>
            <Link href="#">Documentation</Link>
            <Link href="#">Features</Link>
          </div>
          <div className="text-gray-500 text-[12px] flex flex-col">
            <h1 className="text-[12px] text-black mb-2">Company</h1>
            <Link href="#">Vercel</Link>
            <Link href="#">Open Source</Link>
            <Link href="#">Software</Link>
            <Link href="#">Contact Sales</Link>
            <Link href="#">Twitter</Link>
          </div>
          <div className="text-gray-500 text-[12px] flex flex-col">
            <h1 className="text-[12px] text-black mb-2">Legal</h1>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
          <div className="text-gray-500 text-[12px] flex flex-col">
            <h1 className="text-[12px] text-black mb-2">Support</h1>
            <Link href="#">GitHub</Link>
            <Link href="#">Discord</Link>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <p className="text-[12px] mb-4">Subscribe to our newsletter</p>
          <p className="text-[12px] max-w-sm text-gray-500">
            Subscribe to the Turbo newsletter and stay updated on new releases
            and features, guides, and case studies.
          </p>
          <div className="flex flex-row mt-4">
            <input
              type="text"
              id="search-navbar"
              className="block w-full  p-2 text-sm text-gray-900 border  rounded-lg dark:bg-gray-900/40 bg-gray-50 focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white outline-none"
              placeholder="you@example.com"
            />
            <button className="bg-black text-white rounded-md px-4 py-1 ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Image src={vercel} alt="vercel logo" className="w-24" />
        <p className="text-gray-500 text-[12px]">
          © 2023 Vercel, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
