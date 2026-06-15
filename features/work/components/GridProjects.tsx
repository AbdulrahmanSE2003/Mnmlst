"use client";

import { motion, Variants } from "framer-motion";
import { projects } from "@/lib/constants";
import ProjectCard from "./ProjectCard";

const rowVariants = (isFirstRow: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: isFirstRow ? 4 : 0, // Wait for header only on first row
      staggerChildren: 0.2, // Stagger cards within the row
    },
  },
});

const GridProjects = () => {
  const pairs = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push(projects.slice(i, i + 2));
  }
  return (
    <div className="space-y-16">
      {pairs.map((pair, idx) => (
        <motion.div
          key={idx}
          variants={rowVariants(idx === 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {pair.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default GridProjects;
