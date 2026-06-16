"use client";

import { motion } from "framer-motion";

const getDynamicStats = () => {
  const startDate = new Date("2023-10-01");
  const currentDate = new Date();

  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  const sixMonthPeriods = Math.floor(totalMonths / 6);

  const yearsBuilding = Math.ceil(sixMonthPeriods * 0.5)
    .toFixed(1)
    .replace(".0", "");
  const studentsMentored = 15 + sixMonthPeriods * 4;
  const projectsShipped = 5 + Math.floor(sixMonthPeriods * 2);

  return [
    { value: `${projectsShipped}+`, label: "Projects Shipped" },
    { value: `${studentsMentored}+`, label: "Students Mentored" },
    { value: `${yearsBuilding}+`, label: "Years Building" },
    { value: "∞", label: "Lines of Code" },
  ];
};

const Stats = () => {
  const stats = getDynamicStats();

  return (
    <section className="relative w-full py-24 px-6 sm:px-16 overflow-hidden border-y border-border">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-37.5 bg-foreground/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="flex flex-col gap-3 px-8 items-center first:pl-0 last:pr-0 border-r border-border nth-[2]:max-sm:border-r-0 last:border-r-0"
            >
              <span className="text-6xl sm:text-7xl font-medium font-plus-jakarta-sans tracking-tight text-foreground leading-none">
                {stat.value}
              </span>
              <span className="text-xs  text-muted-foreground tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
