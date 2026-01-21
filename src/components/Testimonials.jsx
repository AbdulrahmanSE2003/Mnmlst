import { motion } from "framer-motion";
import { abdallah, ramez } from "../constants/index.js";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";
import SubtleStars from "./SubtleStars.jsx";
import TestimonialCard from "./TestimonialCard.jsx";

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
        <SectionHeading>Testimonials</SectionHeading>
        <SubHeading>Kind words from great collaborators.</SubHeading>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <TestimonialCard
              t={t}
              key={i}
              i={i}
              highlightText={highlightText}
            />
          ))}
        </div>
      </div>

      <SubtleStars
        pos1="top-20 left-10"
        pos2="bottom-12 right-20"
        pos3="top-4/5 left-6"
      />
    </section>
  );
}
