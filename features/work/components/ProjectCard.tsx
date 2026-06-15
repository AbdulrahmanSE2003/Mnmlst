"use client";

import { projects } from "@/lib/constants";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.3, 1] },
  },
};

const ProjectCard = ({ p }: { p: (typeof projects)[0] }) => (
  <Link href={`/work/${p.title}`}>
    <motion.div variants={cardVariants} className="group flex flex-col gap-4">
      <div className="relative h-96 rounded-2xl overflow-hidden bg-muted">
        <Image
          src={p.image}
          alt={p.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/2 transition-colors duration-500 rounded-2xl" />
      </div>
      <div className="flex items-start justify-between gap-4 px-1">
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium text-foreground">{p.title}</span>
          <span className="text-sm text-muted-foreground font-light leading-snug">
            {p.description}
          </span>
        </div>
      </div>
    </motion.div>
  </Link>
);

export default ProjectCard;
