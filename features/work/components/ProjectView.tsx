"use client";

import Image from "next/image";
import MoreProjects from "@/features/work/components/MoreProjects";
import ProjectLinks from "@/features/work/components/ProjectLinks";
import { projects } from "@/lib/constants";
import { motion, Variants } from "framer-motion";

// ─── Animation Variants ──────────────────────────────────────

const pageContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.5,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 1, 0.3, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: [0.25, 1, 0.3, 1] },
  },
};

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// ─── Component ───────────────────────────────────────────────

const ProjectView = ({ project }: { project: (typeof projects)[0] }) => {
  const otherProjects = projects
    .filter((p) => p.title !== project.title)
    .slice(0, 2);

  return (
    <motion.section
      variants={pageContainer}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-6 sm:px-14"
    >
      {/* Header */}
      <motion.div
        variants={headerVariants}
        className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 h-56"
      >
        <div className="flex flex-col gap-6 max-w-lg justify-between h-full">
          <motion.h1
            variants={headerVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-muted drop-shadow-2xl font-plus-jakarta-sans tracking-tight leading-none"
          >
            {project.title}
          </motion.h1>
          <div className={`flex gap-3`}>
            <ProjectLinks project={project} />
          </div>
        </div>

        {/* Stats */}
        <div className="w-full lg:w-2/5 flex flex-col justify-between gap-6 lg:gap-0 h-full">
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground/75 text-base">Category</span>
            <span className="text-lg">{project.brief}</span>
          </div>
          <p className="text-left leading-normal text-md font-light">
            {project.description}
          </p>
        </div>
      </motion.div>

      {/* Main Image Banner */}
      <motion.div
        variants={imageVariants}
        className="relative w-full h-[50vh] sm:h-[70vh] lg:h-[90vh] rounded-3xl overflow-hidden mb-20 sm:mb-32 bg-muted shadow-2xl"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* More Projects Section */}
      <motion.div
        variants={footerVariants}
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <MoreProjects projects={otherProjects} />
      </motion.div>
    </motion.section>
  );
};

export default ProjectView;
