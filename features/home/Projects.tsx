"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import { bgTextures, projects } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = (typeof projects)[0];

const ScrollCardWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.85, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.6, 1, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="w-full will-change-transform"
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ p }: { p: Project }) => (
  <ScrollCardWrapper>
    <div className="relative h-[65vh] md:h-[90vh] w-full rounded-4xl overflow-hidden shadow-2xl group border border-zinc-800">
      <Image
        src={p.image}
        alt={p.title}
        fill
        priority
        sizes="100vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12 text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-6 w-full">
          <div className="space-y-3 max-w-2xl">
            <h5 className="text-4xl md:text-5xl font-semibold tracking-tight drop-shadow-md">
              {p.title}
            </h5>
            <p className="text-sm md:text-base font-light leading-relaxed text-zinc-300 drop-shadow-sm">
              {p.brief}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end shrink-0 max-w-full md:max-w-[45%]">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono tracking-wider text-zinc-300 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full whitespace-nowrap capitalize shadow-xs transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </ScrollCardWrapper>
);

const CtaCard = () => (
  <ScrollCardWrapper>
    <div className="relative h-[50vh] w-full rounded-4xl overflow-hidden shadow-2xl group bg-zinc-900 border border-zinc-800">
      <Image
        src={bgTextures}
        alt=""
        fill
        className="object-cover opacity-20 transition-transform duration-1000 group-hover:scale-105"
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12 text-white">
        <h6 className="text-3xl md:text-4xl font-semibold font-plus-jakarta-sans leading-snug max-w-2xl">
          See how I shape ideas with clarity and craft — explore more.
        </h6>

        <Button
          variant="link"
          asChild
          className="text-white text-base font-medium w-fit p-0 h-auto hover:no-underline"
        >
          <Link
            href="/work"
            className="group flex items-center gap-1 hover:underline"
          >
            View All Work
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </div>
    </div>
  </ScrollCardWrapper>
);

const Projects = () => (
  <section className="w-full my-16 px-6 sm:px-16 space-y-12">
    <SectionHeading>Projects</SectionHeading>

    {/* Flex layout forces every element to occupy 100% width cleanly */}
    <div className="flex flex-col gap-12 max-w-7xl mx-auto">
      {projects.slice(0, 2).map((p) => (
        <ProjectCard key={p.title} p={p} />
      ))}
      <CtaCard />
    </div>
  </section>
);

export default Projects;
