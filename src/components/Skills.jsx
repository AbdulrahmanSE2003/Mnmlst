import React from "react";
import SkillItem from "./SkillItem.jsx";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaNpm,
  FaGitAlt,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import {
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNotionFill,
  RiNextjsFill,
} from "react-icons/ri";
import { LuFramer } from "react-icons/lu";
import {
  SiVite,
  SiObsidian,
  SiRedux,
  SiNetlify,
  SiAxios,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "HTML",
    ele: FaHtml5,
  },
  {
    title: "CSS",
    ele: FaCss3Alt,
  },
  {
    title: "JavaScript",
    ele: RiJavascriptFill,
  },
  {
    title: "Bootstrap",
    ele: FaBootstrap,
  },
  {
    title: "TailwindCSS",
    ele: RiTailwindCssFill,
  },
  {
    title: "React",
    ele: FaReact,
  },
  {
    title: "Next.js",
    ele: RiNextjsFill,
  },
  {
    title: "TypeScript",
    ele: BiLogoTypescript,
  },
  {
    title: "npm",
    ele: FaNpm,
  },
  {
    title: "Redux",
    ele: SiRedux,
  },
  {
    title: "Vite",
    ele: SiVite,
  },
  {
    title: "Axios",
    ele: SiAxios,
  },
  {
    title: "Figma",
    ele: FaFigma,
  },
  {
    title: "VsCode",
    ele: VscVscode,
  },
  {
    title: "Framer",
    ele: LuFramer,
  },
  {
    title: "Git",
    ele: FaGitAlt,
  },
  {
    title: "Github",
    ele: FaGithub,
  },
  {
    title: "Netlify",
    ele: SiNetlify,
  },
  {
    title: "Notion",
    ele: RiNotionFill,
  },
  {
    title: "Obsidian",
    ele: SiObsidian,
  },
];
const Skills = () => {
  useGSAP(() => {
    gsap.to(".skill", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".skills",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <section id={`skills`} className={`px-14`}>
      <SectionHeading>Skills.</SectionHeading>
      <SubHeading>What makes my code come Alive.</SubHeading>
      <ul
        className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 my-8 skills`}
      >
        {skills.map((skill) => (
          <SkillItem key={skill.title} title={skill.title}>
            <skill.ele className="text-5xl text-red dark:text-red-light skill opacity-0 -translate-y-5  dark:group-hover:text-red transition-colors duration-300" />
          </SkillItem>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
