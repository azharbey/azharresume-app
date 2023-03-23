import React from "react";
//import "./global.css";

export const Button = ({ text, link }) => {
  return (
    <a href={link} className="btn">
      {text}
    </a>
  );
};

export default Button;
