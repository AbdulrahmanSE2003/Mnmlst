"use client";

import { motion, Variants } from "framer-motion";

// ─── Animation Variants ──────────────────────────────────────

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 1, 0.3, 1], delay: 2 },
  },
};

const paragraphContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 2.5, // Starts slightly before grid, after heading
      staggerChildren: 0.01, // Speed of letter appearance
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 5, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.2 },
  },
};

const Header = () => {
  const paragraphText =
    "A collection of projects built with purpose — clean architecture, intentional design, and a relentless focus on shipping things that work.";

  return (
    <div className="space-y-3 my-16">
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="text-7xl font-semibold tracking-tight leading-none"
      >
        My Brightest <br /> Creations
      </motion.h1>

      <motion.p
        variants={paragraphContainer}
        initial="hidden"
        animate="visible"
        className="text-md tracking-tight max-w-lg leading-relaxed flex flex-wrap"
      >
        {paragraphText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            // Preserve spaces during mapping
            className={char === " " ? "whitespace-pre" : ""}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default Header;
