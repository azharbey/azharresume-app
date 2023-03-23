import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "./Button";

export const HomeSection = () => {
  return (
    <section className='bg-[url("/azhar.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>
      <div className="container mx-auto px-4">
        <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
          <div>
            <h1 className="text-3xl"> I am Azhar Mahmood</h1>
            <h4 className="text-2xl mt-3">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Full Stack Developer",
                    "Backend Developer",
                  ],
                  changeDelay: 3,
                  changeDeleteSpeed: 2,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>

          <div className="bg-[#06b97a] h-[2px] w-[40px]"></div>
          <div>
            <p>I am a Soft Engineer with the experience of 14+ years</p>

            <Button link="#" text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
