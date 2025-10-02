import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { darkLogo, lightLogo } from "../constants/index.js";
import SubtleStars from "./SubtleStars.jsx";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";
import Button from "./Button.jsx";

const About = ({ theme }) => {
  useGSAP(() => {
    gsap.to(".about-para", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "easeInOut",
      stagger: 0.45,
      scrollTrigger: {
        trigger: ".section-heading",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo(
      ".about-img",
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      ".collab-text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".collab-text",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section id={`about`} className="">
      <SectionHeading>About.</SectionHeading>
      <SubHeading>Some information about my human side.</SubHeading>
      <div className={`flex justify-between items-center gap-5 mb-6`}>
        <div
          className={`p-8 w-full hidden lg:flex justify-center items-center`}
        >
          <img
            className={`about-img opacity-0 -translate-x-20 rounded-full hover:scale-105 transition-transform duration-1000`}
            alt={`logo`}
            src={`${theme === "light" ? lightLogo : darkLogo}`}
          />
        </div>
        <div className={` w-full flex flex-col gap-6 px-5 sm:px-14 lg:px-5`}>
          <p
            className={`about-para opacity-0 translate-y-20 text-left max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed text-2xl font-bold`}
          >
            I'm Abdulrahman Saad, a Front-end Developer{" "}
            <span className={`about-highlight`}>
              crafting <span className={`text-red-light`}>minimalist</span> and
              interactive web experiences.
            </span>
          </p>

          <p className="about-para opacity-0 translate-y-20 text-left max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed text-xl  ">
            Over the past years, I've experimented with different areas of web
            development, design, and creative coding, always exploring new ways
            to make interfaces intuitive and engaging.
          </p>

          <p className="about-para opacity-0 translate-y-20 text-left max-w-3xl mx-auto text-gray-600 dark:text-gray-400 opacity85 leading-relaxed text-lg   mt-6">
            These days, I focus on building projects that balance simplicity
            with creativity, using tools like React, Tailwind CSS, and GSAP to
            bring ideas to life. I love combining design and code to create
            experiences that feel both professional and playful.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center px-0 sm:px-8 p-8 my-7">
        <p className="collab-text opacity-0 text-left sm:text-center text-lg sm:text-2xl font-semibold w-full px-2 sm:px-6 text-gray-700 dark:text-gray-300">
          I’m always eager to collaborate on meaningful projects that drive
          innovation, and create lasting impact. Together, we can bring ideas to{" "}
          <span className="text-red-light capitalize font-semibold">life</span>{" "}
          <span className="text-red-light">✦</span>
        </p>
      </div>

      <div className={`flex justify-center items-center`}>
        <Button
          className={`w-fit text-center`}
          href={`https://drive.google.com/uc?export=download&id=1LPExTzWBFhQGAS5cBXPJVdvkaxfNXPeK`}
          target={"_parent"}
        >
          Download CV
        </Button>
      </div>

      <SubtleStars
        pos1={`right-10 top-16`}
        pos2={`left-20 top-2/3`}
        pos3={`right-28 bottom-28`}
      />
    </section>
  );
};

export default About;
