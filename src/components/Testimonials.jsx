import React from "react";
import { motion } from "framer-motion";
import { abdallah, ramez } from "../constants/index.js";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";
import SubtleStars from "./SubtleStars.jsx";

const highlightWords = ["professional", "clean", "impressive", "better", "smooth", "perfect"];

function highlightText(text) {
    const parts = text.split(new RegExp(`(${highlightWords.join("|")})`, "gi"));
    return parts.map((part, i) =>
        highlightWords.some((w) => w.toLowerCase() === part.toLowerCase()) ? (
            <span key={i} className="text-red-light font-semibold">
        {part}
      </span>
        ) : (
            part
        )
    );
}

const testimonials = [
    {
        name: "Abdallah Fathallah",
        role: "Backend Engineer",
        avatar: abdallah,
        text: "Abdulrahman is a highly professional Front-end Developer, his work is clean, polished, and truly impressive.",
    },
    {
        name: "Mahmoud Harraz",
        role: "CEO, Founder Edmen",
        text: "Abdulrahman brought my idea to life exactly as I envisioned it—and even better. Delivered in record time.",
    },
    {
        name: "Ramez Khaled",
        role: "Frontend Developer",
        avatar: ramez,
        text: "He turns ideas into reality in record time! Even with different ideas, working with him is always smooth.",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionHeading>Testimonials.</SectionHeading>
                <SubHeading>Kind words from great collaborators.</SubHeading>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="relative group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Quote Icon Background */}
                            <span className="absolute top-4 right-6 text-6xl text-gray-300 dark:text-zinc-800 font-serif select-none group-hover:text-red-light transition-colors duration-300 delay-300">
                “
              </span>

                            <div className="relative z-10">
                                <p className="text-lg leading-normal text-zinc-800 dark:text-zinc-300 italic mb-8">
                                    {highlightText(t.text)}
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={t.avatar || `https://ui-avatars.com/api/?name=${t.name}`}
                                            alt={t.name}
                                            className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 rounded-full border-2 border-red-light opacity-0 group-hover:opacity-100 scale-110 transition-all duration-500" />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg dark:text-white">{t.name}</h4>
                                        <p className="text-sm text-gray-400 font-medium">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <SubtleStars pos1="top-20 left-10" pos2="bottom-12 right-20" pos3="top-4/5 left-6" />
        </section>
    );
}