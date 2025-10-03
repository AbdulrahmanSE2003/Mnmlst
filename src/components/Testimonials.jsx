import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { abdallah, ramez } from "../constants/index.js";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";

gsap.registerPlugin(ScrollTrigger);

// الكلمات اللي عايز تهايلايتها
const highlightWords = [
  "professional",
  "clean",
  "impressive",
  "better",
  "smooth",
  "perfect",
];

function highlightText(text) {
  const parts = text.split(new RegExp(`(${highlightWords.join("|")})`, "gi"));
  return parts.map((part, i) =>
    highlightWords.some((w) => w.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-red font-semibold dark:text-red-light">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

const testimonials = [
  {
    name: "Abdallah Fathallah",
    role: "Backend Engineer",
    avatar: abdallah,
    text: "Abdulrahman is a highly professional Front-end Developer, his work is clean, polished, and truly impressive. A pleasure to collaborate with!",
  },
  {
    name: "Mahmoud Harraz",
    role: "CEO, Founder Edmen (client)",
    text: "Abdulrahman brought my idea to life exactly as I envisioned it—and even better, Delivered in record time, which was perfect since I was on a tight schedule.",
  },
  {
    name: "Ramez Khaled",
    role: "Frontend Developer",
    avatar: ramez,
    text: "He turns ideas into reality in record time! Even when we have different ideas always, working with Abdulrahman is always smooth. We get things done really well together.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    gsap.to(".testimonial-card", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section id={`testimonials`} className="testimonials">
      <SectionHeading>Testimonials.</SectionHeading>
      <SubHeading>
        Some words from those who've seen my work in action.
      </SubHeading>
      <div className="grid md:grid-cols-3 gap-8 my-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-card bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center opacity-0 translate-y-20 hover:shadow-2xl transition duration-300"
          >
            <img
              src={
                t.avatar ||
                "https://ui-avatars.com/api/?name=mh&background=ddd&color=555&size=200"
              }
              alt={t.name || "person i worked with"}
              className="w-20 h-20 rounded-full mb-4"
            />
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              {highlightText(t.text)}
            </p>
            <h4 className="font-semibold">{t.name}</h4>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t.role}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
