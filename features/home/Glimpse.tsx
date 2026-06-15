"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const Glimpse = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30% 0px" });

  const variants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.25, ease: [0.32, 1, 0.3, 1], delay },
    }),
  };

  return (
    <motion.section
      ref={ref}
      className="min-h-screen w-full my-16 p-8 sm:p-16 space-y-8"
    >
      <SectionHeading>Hey!</SectionHeading>

      <div className="flex flex-col-reverse md:flex-row-reverse justify-between px-4 sm:px-8 pt-8 h-full items-start gap-6 md:gap-12 relative">
        <div className="flex flex-col justify-between md:w-2/3 lg:w-1/2 gap-16">
          <motion.p
            variants={variants}
            custom={0.3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-2xl font-semibold leading-snug"
          >
            I&apos;m Abdulrahman, a frontend engineer based in Alexandria,{" "}
            <span className="text-muted-foreground">
              currently co-founding Texon and building clean, fast digital
              products with Next.js and TypeScript.
            </span>
          </motion.p>
          <motion.p
            variants={variants}
            custom={0.45}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-xl font-medium text-muted-foreground leading-relaxed"
          >
            I&apos;m a frontend engineer with a growing command of the full MERN
            stack — focused on building experiences that feel intentional and
            perform at scale.
            <br />
            <br />
            I&apos;ve led teams, mentored developers, and shipped production
            apps — always with clean code and attention to detail.
          </motion.p>
        </div>

        <motion.span
          variants={variants}
          custom={0.25}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-jetbrains-mono font-semibold max-lg:w-1/3 text-lg text-muted-foreground uppercase tracking-widest sticky top-1/10"
        >
          About me
        </motion.span>
      </div>
    </motion.section>
  );
};

export default Glimpse;
