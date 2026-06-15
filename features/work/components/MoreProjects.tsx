"use client";

import ProjectCard from "./ProjectCard";
import { projects as TProjects } from "@/lib/constants";
import { motion, Variants } from "framer-motion";

const gridVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.3, 1],
      delayChildren: 0.3,
      staggerChildren: 0.25,
    },
  },
};

export default function MoreProjects({
  projects,
}: {
  projects: typeof TProjects;
}) {
  return (
    <div className="flex flex-col gap-12">
      <motion.h5
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`text-3xl sm:text-5xl font-plus-jakarta-sans font-semibold`}
      >
        More Projects
      </motion.h5>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </motion.div>
    </div>
  );
}
