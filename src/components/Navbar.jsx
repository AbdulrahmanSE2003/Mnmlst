import React from 'react';

import { FaMoon } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";

const Navbar = ({theme, toggleTheme}) => {
  return (
      <header>
          <nav
              className={`bg-transparent w-full h-14 flex justify-between items-center p-5 py-2 fixed top-0 left-0 right-0 text-black dark:text-gray-100 z-50`}
          >
              <a href={`#hero`}>Mnmlst.</a>
              <ul className={`flex justify-center items-center gap-4`}>
                  <a
                      href="#"
                      className={`opacity-65 hover:opacity-100 transition duration-300`}
                  >
                      <li>Home</li>
                  </a>{" "}
                  <a
                      href="#"
                      className={`opacity-65 hover:opacity-100 transition duration-300`}
                  >
                      <li>About</li>
                  </a>{" "}
                  <a
                      href="#"
                      className={`opacity-65 hover:opacity-100 transition duration-300`}
                  >
                      <li>Projects</li>
                  </a>{" "}
                  <a
                      href="#"
                      className={`opacity-65 hover:opacity-100 transition duration-300`}
                  >
                      <li>Contact</li>
                  </a>
                  {/* Theme Toggle */}
                  <button
                      onClick={toggleTheme}
                      className={`cursor-pointer ml-4 rounded-full shadow-xl z-20 transition-colors duration-300 text-xl  dark:text-yellow-400  text-slate-700`}
                  >
                      {theme === "dark" ? <Sun /> : <FaMoon />}
                  </button>
              </ul>
          </nav>
      </header>
  );
};

export default Navbar;
