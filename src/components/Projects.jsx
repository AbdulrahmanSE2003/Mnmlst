import React, {useRef} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import ProjectCard from "./ProjectCard.jsx";
import {Taskly, Daleel, iphone} from "../constants/index.js";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";
import SubtleStars from "./SubtleStars.jsx";
import Button from "./Button.jsx";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "Taskly App",
        description: "A minimal task manager with clean UI, And Eisenhower matrix.",
        image: Taskly,
        demoLink: "https://taskly-mnmlst.netlify.app/",
        githubLink: "https://github.com/AbdulrahmanSE2003/Taskly",
        tech: ["React", "Tailwind", "GSAP", "Vite"],
    },
    {
        title: "Daleel App",
        description: "A clean WebApp keeps your links in one place & safe.",
        image: Daleel,
        demoLink: "https://daleel-safe-links.netlify.app/",
        githubLink: "https://github.com/AbdulrahmanSE2003/Daleel",
        tech: ["React", "Tailwind", "Laravel", "Vite", "SQL"],
    },{
        title: "IPhone 15 Pro",
        description: "An Iphone 15 Pro Clone Website with modern animations using GSAP, and 3D Look, Elegant feel.",
        image: iphone,
        demoLink: "https://iphone-15-pro-cl.netlify.app/",
        githubLink: "https://github.com/AbdulrahmanSE2003/iphone-15-clone-with-gsap",
        tech: ["React", "Tailwind", "GSAP", "Vite", "Netlify"],
    },
];

const Projects = () => {
    const btnRef = useRef(null);

    useGSAP(() => {
        gsap.to(".project-card", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay:0.2,
            ease: "power3.InOut",
            stagger: 0.55, // يوزع الزمن تلقائيًا
            scrollTrigger: {
                trigger: "#projects",     // خلي التريجر للقسم كله
                start: "top 95%",
                toggleActions: "play none none reverse",
            },
        });

        gsap.to(btnRef.current, {
            y:0,
            opacity:1,
            duration:0.8,
            ease:"power3.InOut",
            scrollTrigger:{
                trigger: btnRef.current,
                start: 'top 80%',
                toggleActions: "play none none none",
            }
        })
    }, []);


    return (
        <section id="projects" className="px-6 py-16">
            <SectionHeading>Projects.</SectionHeading>
            <SubHeading>A glimpse of my projects, see something you like?</SubHeading>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {projectsData.map((p, i) => (
                    <div key={i} className="opacity-0 translate-y-5 project-card">
                        <ProjectCard {...p} />
                    </div>
                ))}
            </div>
            <div className={`flex justify-center items-center`}>
                <Button ref={btnRef} className={`opacity-0 translate-y-20`} href={`https://github.com/AbdulrahmanSE2003`}>Explore More Projects</Button>
            </div>

            <SubtleStars pos1={`right-10 top-16`} pos2={`left-8 top-1/6`} pos3={`right-20 bottom-16`}/>
        </section>
    );
};

export default Projects;
