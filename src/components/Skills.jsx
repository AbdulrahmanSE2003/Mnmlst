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


gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    useGSAP(() => {
        gsap.to(".skill-card", {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".skills-grid",
                start: "top 80%",
            },
        });
    }, []);

    return (
        <section id="skills" className="px-6 sm:px-14 py-20 overflow-hidden">
            <SectionHeading>Skills</SectionHeading>
            <SubHeading>Technologies and tools I use to craft digital artifacts.</SubHeading>

            <div className="skills-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 mt-16">
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        className="skill-card opacity-0 translate-y-10 [perspective:1000px] group"
                    >
                        <div className="relative flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-all duration-500 hover:border-red-light group-hover:shadow-[0_0_30px_-15px_rgba(255,77,77,0.3)]">

                            {/* Icon */}
                            <skill.ele className="text-4xl mb-4 text-black/60 dark:text-zinc-400 group-hover:text-red-light group-hover:scale-110 transition-all duration-500" />

                            {/* Title */}
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                {skill.title}
              </span>

                            {/* Decorative Dot - بيظهر بس في الهوفر */}
                            <div className="absolute bottom-3 w-1 h-1 rounded-full bg-red-light opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_8px_#ff4d4d]" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;