import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";

const stats = [
  { number: "+30", label: "Projects Done" },
  { number: (new Date().getFullYear() + 2) % 2025, label: "Years of Coding" },
  { number: "5", label: "Happy Clients" },
  { number: "∞", label: "Ideas Brewing" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Stats() {
  return (
    <section id={`stats`} className="">
      <SectionHeading>Stats.</SectionHeading>
      <SubHeading>Numbers with some stories.</SubHeading>
      <div className="max-w-5xl mx-auto px-6 my-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`flex flex-col justify-center items-center rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800 p-8 group hover:shadow-xl transition duration-300 hover:-translate-y-[6px] ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${i === 3 ? "md:col-span-2" : ""}`}
            >
              <span className="text-4xl md:text-5xl font-bold text-red-light group-hover:text-red transition-colors duration-300">
                {stat.number}
              </span>
              <span className="text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
