import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {abdo} from "../constants/index.js";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";
import Button from "./Button.jsx";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef();

    useGSAP(() => {
        // 1. أنيميشن الصور - ظهور ناعم مع حركة خفيفة
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
            }
        });

        // 2. أنيميشن التايم لاين - رسم الخط أولاً ثم ظهور النقاط
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".journey-container",
                start: "top 60%",
            }
        });

        tl.from(".journey-line", { scaleY: 0, duration: 1.2, ease: "power3.inOut" })
            .from(".journey-item", {
                opacity: 0,
                x: 20,
                stagger: 0.3,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5");

        // 3. أنيميشن النصوص - كشف السطور سطر سطر
        gsap.from(".reveal-text", {
            opacity: 0,
            y: 20,
            delay:0.8,
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".reveal-text",
                start: "top 65%",
            }
        });
    }, { scope: container });

    return (
        <section ref={container} id="about" className="py-20 px-5 sm:px-14">
            {/* Header */}

            <SectionHeading>About.</SectionHeading>
            <SubHeading>Some information about my human side.</SubHeading>

            <div className="grid lg:grid-cols-2 gap-16 items-start mt-10 ">

                {/* Left Side: Image Experience */}
                <div className="img-card group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 p-2 max-w-lg">
                    <div className="aspect-square overflow-hidden rounded-xl flex flex-col justify-center">
                        <img
                            src={abdo}
                            alt="Abdulrahman"
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col gap-10">
                    <div className="space-y-6">
                        <h3 className="reveal-text text-3xl font-bold leading-snug">
                            I’m Abdulrahman Saad, a <span className="text-red-light">Front-end Developer</span> focused on high-end interactive craft.
                        </h3>
                        <p className="reveal-text text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            Leading technical vision at <a href={`https://texon-io-dev.netlify.app/`} className="text-black dark:text-white font-semibold hover-target">Texon</a> and mentoring the next generation at GDG. I build digital products that feel fast, polished, and purposeful.
                        </p>
                    </div>

                    {/* Timeline (The Journey) */}
                    <div className="journey-container relative pl-10 py-2">
                        {/* Vertical Line */}
                        <div className="journey-line absolute left-[7px] top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-zinc-800 origin-top" />

                        <div className="space-y-12">
                            <div className="journey-item relative">
                                {/* Dot: Perfect Centering */}
                                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-red-light border-4 border-white dark:border-zinc-950 z-10" />
                                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-red-light border-4 border-white dark:border-zinc-950 z-10 animate-ping" />
                                <h4 className="text-xs uppercase tracking-[0.2em] text-red-light font-black mb-2">Leadership</h4>
                                <div className="text-2xl font-bold tracking-tight">CTO & Founder <span className={`text-red-light`}>—</span> Texon</div>
                                <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                                    Architecting the future of minimalist technology and leading the engineering vision behind scalable digital products.
                                </p>
                            </div>

                            <div className="journey-item relative">
                                {/* Dot */}
                                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-gray-400 border-4 border-white dark:border-zinc-950 z-10" />

                                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-black mb-2">Education & Impact</h4>
                                <div className="text-2xl font-bold tracking-tight">Web Mentor <span className={`text-red-light`}>—</span> GDG on Campus</div>
                                <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                                    Empowering next-gen developers by deconstructing complex web ecosystems and fostering a culture of creative engineering.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="reveal-text pt-6">
                        <Button className={`w-fit text-center hover-target`} href="https://drive.google.com/uc?export=download&id=1LPExTzWBFhQGAS5cBXPJVdvkaxfNXPeK" >
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;