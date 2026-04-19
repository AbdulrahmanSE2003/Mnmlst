import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { abdo } from "../constants/index.js";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";
import Button from "./Button.jsx";

gsap.registerPlugin(ScrollTrigger);

const journeyItems = [
  {
    label: "Startup",
    color: "text-red-light",
    dotColor: "bg-red-light",
    ping: true,
    title: "Texon",
    titleSuffix: "Founded & Built",
    description:
      "Took a product from zero — owning the full cycle from UI/UX ideation to frontend architecture and technical execution.",
    href: "https://texon-io-dev.netlify.app/",
  },
  {
    label: "Education & Impact",
    color: "text-gray-400",
    dotColor: "bg-gray-400",
    ping: false,
    title: "GDG on Campus",
    titleSuffix: "Web Mentor",
    description:
      "Breaking down complex web ecosystems for the next generation of developers and fostering a culture of creative engineering.",
  },
];

const About = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".img-card", {
        opacity: 0,
        scale: 0.9,
        delay: 1.2,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".img-card",
          start: "top 65%",
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".journey-container",
          start: "top 60%",
        },
      });

      tl.from(".journey-line", {
        scaleY: 0,
        duration: 1.2,
        ease: "power3.inOut",
      }).from(
        ".journey-item",
        {
          opacity: 0,
          x: 20,
          stagger: 0.3,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      );

      gsap.from(".reveal-text", {
        opacity: 0,
        y: 20,
        delay: 0.8,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 65%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} id="about" className="py-20 px-5 sm:px-14">
      <SectionHeading>About</SectionHeading>
      <SubHeading>Some information about my human side.</SubHeading>

      <div className="grid lg:grid-cols-2 gap-16 items-start mt-10">
        {/* Left: Photo */}
        <div className="img-card group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 p-2 max-w-lg">
          <div className="aspect-auto overflow-hidden rounded-2xl">
            <img
              src={abdo}
              alt="Abdulrahman Saad"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-10">
          <div className="space-y-6">
            <h3 className="reveal-text text-3xl font-bold leading-snug">
              I'm Abdulrahman Saad, a{" "}
              <span className="text-red-light">Front-end Developer</span> who
              obsesses over the intersection of clean code and intentional
              design.
            </h3>
            <p className="reveal-text text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I build digital experiences that are fast, polished, and
              thoughtfully crafted — from pixel-level UI details to scalable
              frontend architecture.
            </p>
          </div>

          {/* Timeline */}
          <div className="journey-container relative pl-10 py-2">
            <div className="journey-line absolute left-1.75 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-zinc-800 origin-top" />

            <div className="space-y-12">
              {journeyItems.map((item, index) => (
                <div key={index} className="journey-item relative">
                  <div
                    className={`absolute -left-10.25 top-1.5 w-5 h-5 rounded-full ${item.dotColor} border-4 border-white dark:border-zinc-950 z-10`}
                  />
                  {item.ping && (
                    <div
                      className={`absolute -left-10.25 top-1.5 w-5 h-5 rounded-full ${item.dotColor} border-4 border-white dark:border-zinc-950 z-10 animate-ping opacity-75`}
                    />
                  )}
                  <h4
                    className={`text-xs uppercase tracking-[0.2em] ${item.color} font-black mb-2`}
                  >
                    {item.label}
                  </h4>
                  <div className="text-2xl font-bold tracking-tight">
                    {item.titleSuffix} <span className="text-red-light">—</span>{" "}
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:underline hover-target"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </div>
                  <p className="text-gray-500 text-base leading-relaxed max-w-sm mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="reveal-text text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            I'm now looking to bring that same ownership mindset to a team
            building something meaningful.
          </p>

          <div className="reveal-text">
            <Button
              href="https://drive.google.com/uc?export=download&id=1FnN2NKtqLvmAQantSjo_qgN60mRRiyom"
              className="w-fit text-center py-2 hover-target"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
