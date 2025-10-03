import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white p-6  flex max-sm:flex-col max-sm:items-start  items-center justify-between gap-6">
      {/* Brand / Logo */}
      <a href={`#hero`} className="text-2xl font-bold">
        Mnmlst.
      </a>

      <div className="flex flex-col gap-5">
        {/* Socials */}
        <div className={`flex gap-6 text-2xl justify-start sm:justify-end`}>
          <a
            href="https://github.com/AbdulrahmanSE2003"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulrahman-saad-hassan/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:abdulrahman.saad2303@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red transition-colors duration-300"
          >
            <FaRegEnvelope />
          </a>
          <a
            href="https://wa.me/201116678912"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div>
          {/* Mini copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <a
              className={`hover:text-black dark:hover:text-white duration-300 transition-colors`}
              href={`#hero`}
            >
              Mnmlst.
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
