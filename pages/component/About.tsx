import React from "react";
import { Heading } from "./Heading";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <section className="container mx-auto py-10 px-4 " id="About">
      <Heading title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div>
          {/* <img className="w-[400px]" src="/azhar.jpg" alt="" /> */}
          <Image
            className="w-[400px]"
            src="/azhar.jpg"
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center justify-between w-[400px]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center font-medium">
                <FiBookOpen className="text-[#06b97a] text-[22px]" />
                Study
              </div>
              <div className="flex gap-4 items-center font-medium">
                <BsGlobe2 className="text-[#06b97a] text-[22px]" />
                Website
              </div>
              <div className="flex gap-4 items-center font-medium">
                <HiOutlineMail className="text-[#06b97a] text-[22px]" />
                Email
              </div>
              <div className="flex gap-4 items-center font-medium">
                <FaLinkedinIn className="text-[#06b97a] text-[22px]" />
                Linkedin
              </div>
              <div className="flex gap-4 items-center font-medium">
                <FiGithub className="text-[#06b97a] text-[22px]" />
                Github
              </div>
              <div className="flex gap-4 items-center font-medium">
                <TbPacman className="text-[#06b97a] text-[22px]" />
                Interest
              </div>
              <div className="flex gap-4 items-center font-medium">
                <IoLocationOutline className="text-[#06b97a] text-[22px]" />
                Location
              </div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className="flex flex-col py-4 px-10 gap-6 text-gray-600">
              <div>Fast University</div>
              <Link
                className="hover:font-normal underline text-blue-400 font-semibold hover:text-[#06b97a] transition duration-200 "
                href="https://azharresume-8khwkwysv-azharbey.vercel.app"
                target="_blank"
                scroll={false}
              >
                azhar-Profile
              </Link>

              <div>iamazhar@gmail.com</div>
              {/* <div>https://www.linkedin.com/in/azhar-mahmood-bey/</div> */}
              <Link
                className="hover:font-normal underline text-blue-400 font-semibold hover:text-[#06b97a] transition duration-200 "
                href="https://www.linkedin.com/in/azhar-mahmood-bey/"
                target="_blank"
              >
                azhar-Linkedin
              </Link>
              <Link
                className="hover:font-normal underline text-blue-400 font-semibold hover:text-[#06b97a] transition duration-200 "
                href="https://github.com/azharbey"
                target="_blank"
              >
                azhar-Github
              </Link>
              <div>Movies, Cricket, Football</div>
              <div>Lahore, Punjab, Pakistan</div>
            </div>
          </div>
          <div className="max-w-[800px] ">
            <h2 className="font-bold mt-16 mb-5">
              I am Azhar Software Engineer
            </h2>
            <p className="text-gray-600">
              I have 14+ years of experience in the Software Engineering,
              Motivated and forward-thinking Project Lead with 4+ years of
              experience in a dynamic environment architecting, developing,
              automating and optimizing apps using best practices at Coca Cola
              Beverages Pvt. Ltd. which is famous world wide beverages company.
              work.
            </p>
            <Button link="#ContactUs" text="Hire Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
