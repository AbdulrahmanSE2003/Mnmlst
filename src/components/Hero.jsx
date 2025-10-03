import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";
import Button from "./Button.jsx";
import SubtleStars from "./SubtleStars.jsx";

export default function Hero({ start }) {
  useGSAP(() => {
    if (!start) return;

    let tl = gsap.timeline({ delay: 1 });

    tl.to("#hero-headline", {
      y: 0,
      opacity: 1,
      ease: "power3.inOut",
      duration: 0.8,
      delay: 0.2,
    })
      .to(
        "#sub-heading",
        {
          y: 0,
          opacity: 1,
          ease: "power3.inOut",
          duration: 0.8,
        },
        "-=0.5",
      )
      .to(
        "#hero-desc",
        {
          y: 0,
          opacity: 1,
          ease: "power3.inOut",
          duration: 0.8,
        },
        "-=0.5",
      )
      .to(
        ".hero-btn",
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.inOut",
          stagger: 0.3,
        },
        "-=0.5",
      )
      .to(".hero-star", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.inOut",
      });
  }, [start]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden transition-colors duration-600 dark:bg-black dark:text-white bg-white text-black"
    >
      <>
        {/* Background Animated Blobs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-[#A70606] opacity-30 blur-3xl"
          animate={{
            x: [0, 200, -200, 0],
            y: [0, -150, 150, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-[#754F44] opacity-30 blur-3xl"
          animate={{
            x: [0, -250, 250, 0],
            y: [0, 200, -200, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-[#A9A9A9] opacity-20 blur-3xl"
          animate={{
            x: [0, 150, -150, 0],
            y: [0, -100, 100, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </>

      {/* Content */}
      <div className="flex flex-col gap-3 items-start justify-center z-10">
        <h2
          id="hero-headline"
          className="capitalize font-bold text-2xl sm:text-4xl lg:text-6xl opacity-0 translate-y-6"
        >
          Hi, I<span className="text-red-light">'m</span> Abdulrahman Saad{" "}
          <span className={`hero-star opacity-0 scale-50`}>✦</span>
        </h2>
        <h5
          id="sub-heading"
          className="font-semibold text-xl sm:text-2xl lg:text-4xl opacity-0 translate-y-6"
        >
          Front-end Developer.
        </h5>
        <p
          id="hero-desc"
          className="capitalize text-[0.77rem] sm:text-[1rem] font-normal opacity-0 translate-y-6"
        >
          Building Minimalist ✦ Creative ✦ Interactive Experiences
        </p>

        {/* Hero Buttons */}
        <div className="mt-8 flex gap-4">
          <Button href="#projects" className="hero-btn opacity-0 ">
            View Projects
          </Button>
          <Button
            className={`btn-dark w-fit text-center`}
            href={`https://drive.google.com/uc?export=download&id=1LPExTzWBFhQGAS5cBXPJVdvkaxfNXPeK`}
            target={"_parent"}
          >
            Download CV
          </Button>
        </div>

        {/* Subtle Floating Shapes */}
        <SubtleStars
          pos1={`top-20 left-10`}
          pos2={`bottom-32 right-20`}
          pos3={`top-2/3 left-6`}
        />
      </div>
    </section>
  );
}
