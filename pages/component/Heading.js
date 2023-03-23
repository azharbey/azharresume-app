import React from "react";

export const Heading = ({ title }) => {
  return (
    <div className="text-black text-[32px] font-medium flex items-center gap-4 py-16">
      {title}
      <div className="bg-[#06b97a] h-[2px] w-[40px] translate-y-1"></div>
    </div>
  );
};

export default Heading;
