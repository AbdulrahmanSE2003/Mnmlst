import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = ({ theme, toggleTheme, setShowBot }) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <header>
      <nav
        className={`w-full h-14 flex justify-between items-center px-5 py-2 fixed top-0 left-0 right-0 text-black dark:text-gray-100 z-50 bg-white dark:bg-black transition-colors duration-500`}
      >
        <a href={`#hero`} className="font-bold text-lg">
          Mnmlst.
        </a>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex justify-center items-center gap-4">
          <a
            href="#hero"
            className="opacity-65 hover:opacity-100 transition duration-300"
          >
            <li>Home</li>
          </a>
          <a
            href="#about"
            className="opacity-65 hover:opacity-100 transition duration-300"
          >
            <li>About</li>
          </a>
          <a
            href="#projects"
            className="opacity-65 hover:opacity-100 transition duration-300"
          >
            <li>Projects</li>
          </a>
          <button
              onClick={() => setShowBot(prev => !prev)}
            href="#contact"
            className="opacity-65 hover:opacity-100 transition duration-300 cursor-pointer contact-tab"
          >
            <li>Contact</li>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="cursor-pointer ml-4 rounded-full shadow-xl z-20 transition-colors duration-300 text-xl dark:text-yellow-400 text-slate-700"
          >
            {theme === "dark" ? <Sun /> : <FaMoon />}
          </button>
        </ul>

        {/* Mobile Nav */}
        <div className="sm:hidden flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="cursor-pointer rounded-full transition-colors duration-300 text-xl dark:text-yellow-400 text-slate-700"
          >
            {theme === "dark" ? <Sun /> : <FaMoon />}
          </button>

          {/* Burger */}
          <button onClick={() => setIsOpen(!isOpen)} className="z-50">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-1/2 h-screen bg-white dark:bg-black shadow-xl flex flex-col items-center justify-center gap-8 text-lg z-40"
            >
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="hover:opacity-100 opacity-70 transition"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:opacity-100 opacity-70 transition"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:opacity-100 opacity-70 transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:opacity-100 opacity-70 transition"
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
