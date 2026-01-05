import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import SubHeading from "./SubHeading.jsx";
import SubtleStars from "./SubtleStars.jsx";

// مكون فرعي للعداد عشان كل رقم يعد لوحده
const Counter = ({ target, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            // لو الرقم علامة اللانهاية، مش محتاج عد
            if (target === "∞") {
                setCount("∞");
                return;
            }

            let start = 0;
            const end = parseInt(target.replace(/\D/g, "")); // استخراج الرقم فقط
            const totalMiliseconds = duration * 1000;
            const incrementTime = totalMiliseconds / end;

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

const stats = [
    { number: "+45", label: "Projects Done" },
    {
        number: `+${(new Date().getFullYear() + 2) % 2025}`,
        label: "Years of Coding",
    },
    { number: "8", label: "Happy Clients" },
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
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={`
                relative group overflow-hidden p-10 rounded-[2rem] 
                bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-400
                flex flex-col items-center justify-center text-center
                hover:border-red-light/50 transition-all duration-500
                ${i === 0 ? "md:col-span-2 md:row-span-2 py-16" : ""}
                ${i === 3 ? "md:col-span-2" : ""}
              `}
                        >
                            {/* Background Glow Effect */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-light/5 rounded-full blur-3xl group-hover:bg-red-light/10 transition-colors" />

                            <span className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#121212] dark:text-white group-hover:text-red-light transition-colors duration-500">
                <Counter target={stat.number} />
              </span>

                            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mt-4">
                {stat.label}
              </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <SubtleStars pos1="right-10 top-16" pos2="left-8 top-1/6" pos3="right-20 bottom-16" />
        </section>
    );
}