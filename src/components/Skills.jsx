import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNpm, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill  } from "react-icons/ri";
import { LuFramer } from "react-icons/lu";
import { SiVite } from "react-icons/si";
import SkillItem from "./SkillItem.jsx";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";



const skills = [
    {
        title: "HTML",
        ele: FaHtml5,
    },{
        title: "CSS",
        ele: FaCss3Alt,
    },{
        title: "JavaScript",
        ele: RiJavascriptFill,
    },{
        title: "Github",
        ele: FaGithub,
    },{
        title: "React",
        ele: FaReact,
    },{
        title: "Framer",
        ele: LuFramer ,
    },{
        title: "TailwindCSS",
        ele: RiTailwindCssFill ,
    },{
        title: "npm",
        ele: FaNpm ,
    },{
        title: "Git",
        ele: FaGitAlt ,
    },{
        title: "Vite",
        ele: SiVite ,
    }
]
const Skills = () => {
  useGSAP(() => {

      gsap.to('.skill', {
          y:0,
          opacity:1,
          duration:0.4,
          stagger:0.1,
          scrollTrigger:{
              trigger: '.skills',
              start: "top 85%",
              toggleActions: "play none none none",
          }
      })
  }, []);
  return (
    <section id={`skills`} className={`px-14`}>
      <SectionHeading>Skills.</SectionHeading>
        <SubHeading>What i do?</SubHeading>
        <ul className={`grid grid-cols-5 gap-6 my-8 skills`}>
            {skills.map(skill => (
                <SkillItem key={skill.title} title={skill.title}>
                    <skill.ele className="text-5xl text-red dark:text-red-light skill opacity-0 -translate-y-5" />
                </SkillItem>
            ))}
        </ul>
    </section>
  );
};

export default Skills;
