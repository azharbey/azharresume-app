import React from "react";
import { Heading } from "./Heading";

export const Skills = () => {
  return (
    <section className="container mx-auto py-10 px-4" id="Skills">
      <Heading title="Skills" />
      {/* <p className="text-gray-600 mt-10 mb-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        molestias deleniti dicta quod consequatur, maxime corporis odio quos,
        alias praesentium mollitia beatae tempore. Maxime sint corporis cum
        repudiandae. Iure, natus.
      </p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p>React.js</p>
          <div className="relative bg-gray-400 h-2 mt-2">
            <div className="bg-[#06b97a] absolute h-2 w-[60%]"></div>
          </div>
        </div>
        <div>
          <p>Next.js</p>
          <div className="relative bg-gray-400 h-2 mt-2">
            <div className="bg-[#06b97a] absolute h-2 w-[70%]"></div>
          </div>
        </div>
        <div>
          <p>C#</p>
          <div className="relative bg-gray-400 h-2 mt-2">
            <div className="bg-[#06b97a] absolute h-2 w-[80%]"></div>
          </div>
        </div>
        <div>
          <p>VB.Net</p>
          <div className="relative bg-gray-400 h-2 mt-2">
            <div className="bg-[#06b97a] absolute h-2 w-[90%]"></div>
          </div>
        </div>
        <div>
          <p>MS SQL Server</p>
          <div className="relative bg-gray-400 h-2 mt-2">
            <div className="bg-[#06b97a] absolute h-2 w-[90%]"></div>
          </div>
        </div>
        <div>
          <p>MVC .Net Core</p>
          <div className="relative bg-gray-400 h-2 mt-2">
            <div className="bg-[#06b97a] absolute h-2 w-[80%]"></div>
          </div>
        </div>
        <div>
          <p>Crystal Reports</p>
          <div className="relative bg-gray-400 h-2 mt-2">
            <div className="bg-[#06b97a] absolute h-2 w-[90%]"></div>
          </div>
        </div>
        <div>
          <p>Telerik Controls & Reports</p>
          <div className="relative bg-gray-400 h-2 mt-2">
            <div className="bg-[#06b97a] absolute h-2 w-[80%]"></div>
          </div>
        </div>
        <div>
          <p>Tailwind CSS</p>
          <div className="relative bg-gray-400 h-2 mt-2">
            <div className="bg-[#06b97a] absolute h-2 w-[70%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
