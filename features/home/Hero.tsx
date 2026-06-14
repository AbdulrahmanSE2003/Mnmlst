"use client";
import { motion, Variants } from "framer-motion";
import { star, zap } from "@/lib/constants";
import Image from "next/image";
import AutoSwitchTitle from "./AutoSwitchTitle";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 1.25 } },
};

const clipReveal: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.25, 1, 0.3, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatIn: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { delay: 2.2, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
  },
};
const Hero = () => {
  return (
    <motion.section
      className="min-h-screen mb-16 rounded-[2rem] w-full mx-auto p-8 flex items-center justify-center relative overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center gap-2 relative z-10">
        <AutoSwitchTitle />

        {["Software", "Engineer"].map((word, i) => (
          <div key={i}>
            <motion.span
              variants={clipReveal}
              className="block text-[clamp(5rem,12vw,12rem)] leading-none text-foreground font-black font-plus-jakarta-sans tracking-wide"
            >
              {word}
            </motion.span>
          </div>
        ))}
      </div>

      {/* Bottom corners */}
      <motion.span
        variants={fadeUp}
        className="absolute uppercase text-lg font-medium text-muted-foreground bottom-6 left-6 z-10"
      >
        &copy; {new Date().getFullYear()}
      </motion.span>

      <motion.span
        variants={fadeUp}
        className="absolute uppercase text-md font-mono text-muted-foreground bottom-6 right-6 z-10"
      >
        Building since 2023
      </motion.span>

      {/* Floating icons */}
      <motion.div
        variants={floatIn}
        className="absolute  top-[12.5%] left-[5%] sm:left-[12.5%] z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <Image
          src={star}
          alt="3d star image"
          className={`dark:brightness-150`}
          width={120}
          height={120}
          priority
          aria-hidden
        />
      </motion.div>

      <motion.div
        variants={floatIn}
        className="absolute bottom-[12.5%] right-[5%] sm:right-[12.5%] z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.5,
        }}
      >
        <Image
          src={zap}
          alt="3d zap image"
          className={`dark:brightness-150`}
          width={120}
          height={120}
          priority
          aria-hidden
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
