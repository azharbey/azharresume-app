import React from "react";
import { useEffect, useState } from "react";

function BackTopButton() {
  const [backTopButton, setbackTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 300) {
        setbackTopButton(true);
      } else {
        setbackTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {BackTopButton && (
        <button
          className="bg-[#06b97a] text-white bottom-[50px] right-[50px] w-[50px] font-semibold text-3xl fixed  border-[#06b97a] hover:bg-slate-200 hover:text-[#06b97a] transition duration-200"
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}

export default BackTopButton;
