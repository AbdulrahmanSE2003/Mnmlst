"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AutoSwitchTitle = () => {
  const titles = [
    "Abdulrahman Saad",
    "Frontend Engineer",
    "MERN Stack Engineer",
    "Abdulrahman Saad",
  ];

  const [index, setIndex] = useState(0);
  const [isReady, setIsReady] = useState(false); // الحالة الجديدة للتحميل
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsReady(true);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if (!isReady || !isInView || index >= titles.length - 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, [index, titles.length, isInView, isReady]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: isReady && isInView ? 1 : 0,
        y: isReady && isInView ? 0 : -10,
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="text-xl font-medium text-foreground tracking-wider font-plus-jakarta-sans flex flex-col h-8 overflow-hidden w-auto px-2"
    >
      <motion.div
        animate={{ y: -(index * 32) }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.3, 1] }}
        className="flex flex-col"
      >
        {titles.map((title, i) => (
          <span key={i} className="h-8 flex items-center shrink-0">
            {title}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AutoSwitchTitle;
