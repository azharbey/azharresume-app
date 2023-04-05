/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React from "react";
import { saveAs } from "file-saver";
import { FcDownload } from "react-icons/fc";
import { FiMenu } from "react-icons/fi";

const saveFile = () => {
  saveAs("/Resume-AzharMahmood.pdf", "Resume-AzharMahmood.pdf");
};

export const Header = ({ toggleSidebar }) => {
  return (
    <section className="bg-white text-black top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-[28px] font-nameheading">Azhar Mahmood</div>
        <div className="hidden md:flex gap-6">
          <Link className="hover:text-[#06b97a]" href="/">
            Home
          </Link>
          <Link className="hover:text-[#06b97a]" href="#About" scroll={false}>
            About
          </Link>
          <Link className="hover:text-[#06b97a]" href="#WhatIdo" scroll={false}>
            Experience
          </Link>
          <Link className="hover:text-[#06b97a]" href="#Skills" scroll={false}>
            Skills
          </Link>
          <Link
            className="hover:text-[#06b97a]"
            href="#ContactUs"
            scroll={false}
          >
            Contact
          </Link>
        </div>
        <div onClick={saveFile}>
          <a
            href="#"
            className="hidden md:flex border border-[#06b97a] px-4 py-1 text-[#06b97a] rounded-[5px]
      items-center gap-2 hover:bg-[#06b97a] hover:text-white transition duration-200"
          >
            Download CV
            <FcDownload />
          </a>
        </div>

        <div className="md:hidden text-[24px]" onClick={toggleSidebar}>
          <FiMenu />
        </div>
      </div>
    </section>
  );
};

export default Header;
