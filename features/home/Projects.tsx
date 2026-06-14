"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import { bgTextures, projects } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Types
type Project = (typeof projects)[0];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Project Card Component
const ProjectCard = ({ p }: { p: Project }) => (
  <motion.div
    variants={cardVariants}
    className="relative h-120 rounded-4xl overflow-hidden shadow-2xl group border border-zinc-700"
  >
    <Image
      src={p.image}
      alt={p.title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

    <div className="absolute inset-0 z-10 flex flex-col justify-end gap-3 p-8 text-white">
      <h6 className="text-3xl font-semibold drop-shadow-md">{p.title}</h6>
      <p className="text-sm font-medium leading-relaxed tracking-wide text-zinc-200 drop-shadow-sm max-w-[90%]">
        {p.description}
      </p>
    </div>
  </motion.div>
);

// CTA Card Component
const CtaCard = () => (
  <motion.div
    variants={cardVariants}
    className="relative h-120 rounded-4xl overflow-hidden shadow-2xl group bg-zinc-800"
  >
    <Image
      src={bgTextures}
      alt=""
      fill
      aria-hidden
      className="object-cover transition-transform duration-700 group-hover:scale-103"
    />

    <div className="absolute inset-0 bg-linear-to-b from-foreground/50 to-foreground/25 pointer-events-none" />

    <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 text-white">
      <h6 className="text-4xl font-semibold font-plus-jakarta-sans leading-snug max-w-xs">
        See how I shape ideas with clarity and craft — explore more.
      </h6>

      <Button
        variant="link"
        asChild
        className="text-white text-sm font-medium w-fit p-0 h-auto hover:no-underline"
      >
        <Link
          href="/work"
          className="group flex items-center gap-1 hover:underline"
        >
          View All Work
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Button>
    </div>
  </motion.div>
);

// Section Component
const Projects = () => (
  <section className="min-h-screen w-full my-16 p-8 sm:p-16 space-y-10">
    <SectionHeading>Projects</SectionHeading>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.slice(0, 2).map((p) => (
        <ProjectCard key={p.title} p={p} />
      ))}
      <CtaCard />
    </motion.div>
  </section>
);

export default Projects;
