import React from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; // ممكن تستخدم GSAP أو Framer لمسة سريعة

const Footer = () => {
    // 1. الداتا بقت منفصلة عشان تعدلها في ثانية
    const socialLinks = [
        { id: 1, icon: <FaGithub />, href: "https://github.com/AbdulrahmanSE2003", label: "Github" },
        { id: 2, icon: <FaLinkedin />, href: "https://www.linkedin.com/in/abdulrahman-saad-hassan/", label: "LinkedIn" },
        { id: 3, icon: <FaRegEnvelope />, href: "mailto:abdulrahman.saad2303@gmail.com", label: "Email" },
        { id: 4, icon: <FaWhatsapp />, href: "https://wa.me/201116678912", label: "WhatsApp" },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 px-6 sm:px-14 border-t border-gray-100 dark:border-zinc-900 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

                {/* Brand Section */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <a
                        href="#hero"
                        className="text-3xl font-black tracking-tighter text-black dark:text-white hover:text-red-light transition-colors duration-300"
                    >
                        Mnmlst<span className="text-red-light">.</span>
                    </a>
                    <p className="text-gray-400 text-sm font-medium">
                        Building digital artifacts.
                    </p>
                </div>

                {/* Dynamic Socials */}
                <div className="flex flex-col items-center md:items-end gap-6">
                    <div className="flex gap-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.id}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                className="text-[1.75rem] text-gray-600 dark:text-gray-400 hover:text-red  transition-all duration-300 hover:scale-95"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright & Status */}
                    <div className="flex flex-col items-center md:items-end gap-1">
                        <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Available for projects</span>
                        </div>

                        <p className="text-gray-400 text-[12px] tracking-wide">
                            &copy; {currentYear} Created by{" "}
                            <span className="text-black dark:text-white font-semibold">Abdulrahman Saad</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;