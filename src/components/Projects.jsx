import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard.jsx";
import { Taskly, Daleel, iphone } from "../constants/index.js";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";
import SubtleStars from "./SubtleStars.jsx";
import Button from "./Button.jsx";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "iPhone 15 Pro",
        category: "Creative Coding / 3D",
        description: "An Apple-inspired experience featuring sophisticated GSAP animations and a 3D visual language.",
        image: iphone,
        demoLink: "https://iphone-15-pro-cl.netlify.app/",
        githubLink: "https://github.com/AbdulrahmanSE2003/iphone-15-clone-with-gsap",
        tech: ["React", "Three.js", "GSAP", "Tailwind"],
    },
    {
        title: "Daleel Safe",
        category: "Full-stack App",
        description: "A secure digital vault for links, engineered for privacy and minimalist utility.",
        image: Daleel,
        demoLink: "https://daleel-safe-links.netlify.app/",
        githubLink: "https://github.com/AbdulrahmanSE2003/Daleel",
        tech: ["Laravel", "React", "SQL", "Tailwind"],
    },
    {
        title: "Taskly",
        category: "Productivity Tool",
        description: "Reimagining the Eisenhower matrix with a focus on deep work and zero-clutter UI.",
        image: Taskly,
        demoLink: "https://taskly-mnmlst.netlify.app/",
        githubLink: "https://github.com/AbdulrahmanSE2003/Taskly",
        tech: ["React", "Tailwind", "Vite"],
    },
];

const Projects = () => {
    useGSAP(() => {
        gsap.to(".project-card", {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".projects-grid",
                start: "top 80%",
            },
        });
    }, []);

    return (
        <section id="projects" className="px-6 py-24 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeading>Projects</SectionHeading>
                <SubHeading>A glimpse of my projects, see something you like?</SubHeading>

                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
                    {projectsData.map((p, i) => (
                        <div key={i} className="opacity-0 translate-y-20 scale-[0.98] project-card">
                            <ProjectCard {...p} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center mt-24 gap-6">
                    <p className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase opacity-60">Hungry for more?</p>
                    <Button
                        className="py-2"
                        href="https://github.com/AbdulrahmanSE2003"
                    >
                        View More on GitHub
                    </Button>
                </div>
            </div>

            <SubtleStars pos1="right-10 top-16" pos2="left-8 top-1/4" pos3="right-20 bottom-16" />
        </section>
    );
};

export default Projects;