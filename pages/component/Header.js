import Link from "next/link";
import React from "react";
import { FcDownload } from "react-icons/fc";
import { FiMenu } from "react-icons/fi";

export const Header = ({ toggleSidebar }) => {
  return (
    <section className="bg-white text-black top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-[24px] font-nameheading">Azhar Mahmood</div>
        <div className="hidden md:flex gap-6">
          <Link className="hover:text-[#06b97a]" href="/">
            Home
          </Link>
          <Link className="hover:text-[#06b97a]" href="#About">
            About
          </Link>
          <Link className="hover:text-[#06b97a]" href="#WhatIdo">
            Experience
          </Link>
          <Link className="hover:text-[#06b97a]" href="#Skills">
            Skills
          </Link>
          <Link className="hover:text-[#06b97a]" href="#ContactUs">
            Contact
          </Link>
        </div>
        <a
          href="#"
          className="hidden md:flex border border-[#06b97a] px-4 py-1 text-[#06b97a] rounded-[5px]
      items-center gap-2 hover:bg-[#06b97a] hover:text-white transition duration-200"
        >
          Download CV
          <FcDownload />
        </a>
        <div className="md:hidden text-[24px]" onClick={toggleSidebar}>
          <FiMenu />
        </div>
      </div>
    </section>
  );
};

export default Header;
