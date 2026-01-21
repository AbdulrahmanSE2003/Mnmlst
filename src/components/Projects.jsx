import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";
import SubtleStars from "./SubtleStars.jsx";
import Button from "./Button.jsx";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxPWY-26whixFJruOMvPVbofHV7k-0wv27mo57T_qHB6eA3fgwJ2JbZ2LzCelLb6sOJdw/exec"
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((p) => ({
          ...p,
          tech: p.techstack ? p.techstack.split(",").map((t) => t.trim()) : [],
        }));
        setProjects(formattedData);
        setLoading(false);
      });
  }, []);

  useGSAP(() => {
    if (!loading) {
      const cards = gsap.utils.toArray(".project-reveal");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: i % 2 === 0 ? -500 : 500,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, [loading]);

  return (
    <section
      id="projects"
      className="px-6 py-24 bg-white dark:bg-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Projects</SectionHeading>
        <SubHeading>Crafted with purpose, refined with code.</SubHeading>

        {loading ? (
          <div className="h-96 flex items-center justify-center text-zinc-400 animate-pulse font-medium tracking-widest">
            FETCHING ARTIFACTS...
          </div>
        ) : (
          <div className="mt-32 flex flex-col gap-40">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`project-reveal flex flex-col md:flex-row items-center gap-12 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col items-center mt-20 gap-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold opacity-50">
            The full archive
          </p>
          <Button variant="dark" href="https://github.com/AbdulrahmanSE2003">
            GitHub Profile
          </Button>
        </div>
      </div>

      <SubtleStars
        pos1="right-10 top-16"
        pos2="left-9 top-1/5"
        pos3="right-20 bottom-16"
      />
    </section>
  );
};

export default Projects;
