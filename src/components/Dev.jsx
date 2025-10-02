import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Dev = ({ children, triggerStart = "top 85%", dir }) => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: triggerStart,
          toggleActions: "play none none none",
        },
      });

      // النص
      tl.to(".dev-ad", {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
      });

      // النجمة
      tl.to(
        ".star",
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.inOut",
        },
        "-=0.4", // تبدأ تقريبًا مع النص (تقدر تغيرها)
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex justify-center items-center px-2 sm:px-8 p-8 py-16 bg-red-dev"
    >
      <h2
        className={`dev-ad opacity-0 ${dir === "left" ? "-translate-x-20" : "translate-x-20"} relative text-5xl sm:text-6xl font-semibold text-black`}
      >
        <span className="relative z-10 text-shadow-sm text-shadow-red-light">
          {children}
        </span>
      </h2>
      <span className="star opacity-0 scale-50 ml-5 text-4xl sm:text-5xl translate-y-5 text-shadow-sm text-shadow-red-light text-black">
        ✦
      </span>
    </section>
  );
};

export default Dev;
