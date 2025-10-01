import React from "react";

const Footer = () => {
  return (
    <footer
      className={`text-sm z-10 transition-colors duration-300 dark:text-gray-400 text-gray-700 `}
    >
      © {new Date().getFullYear()}{" "}
      <span
        className={`transition-colors duration-300 cursor-pointer dark:hover:text-gray-200 hover:text-black `}
      >
        Mnmlst
      </span>
      . All rights reserved.
    </footer>
  );
};

export default Footer;
