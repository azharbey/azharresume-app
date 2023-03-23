import React from "react";
import { RiCloseFill } from "react-icons/ri";

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}
    >
      <div
        className="absolute right-0 top-0 mr-[30px] mt-[10px] text-[24px] hover:cursor-pointer"
        onClick={toggleSidebar}
      >
        <RiCloseFill />
      </div>
      <div className="flex flex-col gap-4 text-[28px]">
        <a className="hover:text-[#06b97a]" href="#">
          Home
        </a>
        <a className="hover:text-[#06b97a]" href="#">
          About
        </a>
        <a className="hover:text-[#06b97a]" href="#">
          Projects
        </a>
        <a className="hover:text-[#06b97a]" href="#">
          Contact
        </a>
        <a className="hover:text-[#06b97a]" href="#">
          Experience
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
