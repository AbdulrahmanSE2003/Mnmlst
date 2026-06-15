"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text =
  "Clean, scalable digital products built to move fast and perform in real-world use — driven by clarity, purpose, and intentional design.";
const words = text.split(" ");

export default function TextReveal() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} style={{ height: "300vh" }} className="relative">
      <div className="sticky top-0 h-screen flex items-center justify-center px-8 sm:px-16">
        <div className="max-w-5xl">
          <p className="text-[clamp(1.6rem,3vw,2.3rem)] font-plus-jakarta-sans font-medium text-center leading-snug tracking-tight">
            From{" "}
            {words.map((word, i) => (
              <Word
                key={i}
                word={word}
                index={i}
                total={words.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollYProgress: any;
}) {
  const start = (index / total) * 0.9;
  const end = start + 0.9 / total + 0.05;

  const rawOpacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  const opacity = useTransform(rawOpacity, (v) =>
    scrollYProgress.get() >= end ? 1 : v,
  );

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.25em] text-foreground"
    >
      {word}
    </motion.span>
  );
}
