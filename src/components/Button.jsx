import React from "react";
import { motion } from "framer-motion";

const Button = ({ className, children, onClick, href, target }) => {
    const isInternal = href && href.startsWith("#");

    const buttonContent = (
        <>
            {/* الخلفية اللي بتفتح من النص تحت */}
            <span
                className="absolute inset-0 bg-black dark:bg-white transition-all duration-1000 ease-in[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                    clipPath: "circle(0% at 50% 100%)", // بيبدأ من النص (50%) تحت (100%)
                }}
                // لما نعمل هوفر على الـ parent (الزرار)، الـ span ده هيتأثر
            />

            {/* ستايل إضافي عشان الـ hover يغير الـ clip-path */}
            <style dangerouslySetInnerHTML={{ __html: `
        .custom-btn-hover:hover .absolute.inset-0 {
          clip-path: circle(150% at 50% 100%) !important;
        }
      `}} />

            {/* النص */}
            <span className="relative z-10 flex items-center gap-3 py-1.5 px-6 transition-colors duration-700 group-hover:text-white dark:group-hover:text-black font-medium tracking-wide">
        {children}
      </span>
        </>
    );

    const sharedClasses = `
    group custom-btn-hover relative overflow-hidden inline-flex items-center 
    border border-black dark:border-white rounded-full 
    bg-transparent transition-all duration-500 hover:border-black dark:hover:border-white ${className || ""}
  `;

    if (href) {
        return (
            <motion.a
                href={href}
                className={sharedClasses}
                whileTap={{ scale: 0.97 }}
                {...(!isInternal && { target: target || "_blank", rel: "noopener noreferrer" })}
            >
                {buttonContent}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={sharedClasses}
            whileTap={{ scale: 0.97 }}
        >
            {buttonContent}
        </motion.button>
    );
};

export default Button;