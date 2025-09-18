import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";

export default function PortfolioPlaceholder() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    // useEffect عشان نغير الكلاس على عنصر الـ <html>
    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div
            className={`relative flex flex-col items-center justify-center h-screen overflow-hidden transition-colors duration-600 ${
                isDarkMode ? "isDarkMode bg-black text-white" : "bg-white text-black"
            }`}
        >
            {/* Theme Toggle */}
            <button
                onClick={() => toggleDarkMode()}
                className={`absolute cursor-pointer top-4 right-4 p-4 rounded-full shadow-xl z-20 transition-colors duration-300 text-xl ${
                    isDarkMode
                        ? "bg-gray-800 text-yellow-400"
                        : "bg-gray-200 text-slate-700"
                }`}
            >
                {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>


            {/* Background Animated Blobs */}
            <motion.div
                className="absolute w-96 h-96 rounded-full bg-[#A70606] opacity-30 blur-3xl"
                animate={{x: [0, 200, -200, 0], y: [0, -150, 150, 0], rotate: [0, 180, 360]}}
                transition={{duration: 20, repeat: Infinity, ease: "linear"}}
            />
            <motion.div
                className="absolute w-80 h-80 rounded-full bg-[#754F44] opacity-30 blur-3xl"
                animate={{x: [0, -250, 250, 0], y: [0, 200, -200, 0], rotate: [0, -180, -360]}}
                transition={{duration: 25, repeat: Infinity, ease: "linear"}}
            />
            <motion.div
                className="absolute w-72 h-72 rounded-full bg-[#A9A9A9] opacity-20 blur-3xl"
                animate={{x: [0, 150, -150, 0], y: [0, -100, 100, 0], rotate: [0, 90, 180, 270, 360]}}
                transition={{duration: 30, repeat: Infinity, ease: "linear"}}
            />

            {/* Content */}
            <div className="z-10 text-center space-y-6 px-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    🚧 Portfolio Under Construction 🚧
                </h1>

                <p className={`text-lg md:text-xl max-w-md mx-auto transition-colors duration-300 ${
                    isDarkMode ? "text-gray-200" : "text-gray-600"
                }`}>
                    Still building my portfolio.
                    Meanwhile, let's stay connected 👇
                </p>

                {/* Social Links */}
                <div className="flex gap-8 justify-center text-3xl">
                    <a
                        href="https://github.com/AbdulrahmanSE2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#A70606] transition-colors duration-300"
                    >
                        <FaGithub/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abdulrahman-saad-hassan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#A70606] transition-colors duration-300"
                    >
                        <FaLinkedin/>
                    </a>
                    <a
                        href="mailto:abdulrahman.saad2303@gmail.com"
                        className="hover:text-[#A70606] transition-colors duration-300"
                    >
                        <FaEnvelope/>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className={`absolute bottom-4 left-6 text-sm z-10 transition-colors duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}>
                © {new Date().getFullYear()} <span
                className={`transition-colors duration-300 cursor-pointer ${
                    isDarkMode
                        ? "hover:text-gray-200" // لو الدارك مود شغال، ده الكلاس اللي هيشتغل
                        : "hover:text-black" // لو مش شغال، ده الكلاس اللي هيشتغل
                }`}>Mnmlst</span>. All rights reserved.
            </footer>
        </div>
    );
}