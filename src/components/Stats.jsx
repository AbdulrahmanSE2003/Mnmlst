import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";
import SubtleStars from "./SubtleStars.jsx";
import StatCard from "./StatCard.jsx";


export const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      if (target === "∞") {
        setCount("∞");
        return;
      }

      let start = 0;
      const end = parseInt(target.replace(/\D/g, ""));
      const totalMilliseconds = duration * 1000;
      const incrementTime = totalMilliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{target.includes("+") ? `+${count}` : count}</span>;
};
  

  const currentYear = new Date().getFullYear();
  const startYear = 2025; 
  const yearsPassed = currentYear - startYear;

  const totalProjects = 30 + (yearsPassed * 15);
  const totalClients = 5 + (yearsPassed * 3);
  const codingYears = yearsPassed + 2; 

  const stats = [
    { number: `+${totalProjects}`, label: "Projects Done" },
    { number: `+${codingYears}`, label: "Years of Coding" },
    { number: `+${totalClients}`, label: "Happy Clients" },
    { number: "∞", label: "Ideas Brewing" },
  ];

export default function Stats() {
  return (
    <section id="stats" className="py-20">
      <SectionHeading>Stats</SectionHeading>
      <SubHeading>Numbers that define my professional growth.</SubHeading>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard stat={stat} key={i} i={i} />
          ))}
        </div>
      </div>

      <SubtleStars
        pos1="right-10 top-16"
        pos2="left-8 top-1/6"
        pos3="right-20 bottom-16"
      />
    </section>
  );
}
