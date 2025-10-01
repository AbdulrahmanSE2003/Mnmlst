import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Dev = ({ children }) => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".dev-ad",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Step 1: النص يظهر
    timeline.to(".dev-ad", {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
    });

    // // Step 2: نضيف delay قبل filling
    // timeline.to('.fill-overlay', {
    //     scaleX: 1,
    //     duration: 1,
    //     ease: "power2.inOut"
    // }, "+=0.1"); // يبدأ بعد ثانية من انتهاء الأنيميشن الأول

    timeline.to(
      ".star",
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.87,
        ease: "easeInOut",
      },
      "+=0.3",
    );
  }, []);

  return (
    <section className="flex justify-center items-center p-8 py-16 bg-red-dev">
      <h2 className="dev-ad opacity-0 -translate-x-20 relative text-6xl font-semibold dark:text-black">
        <span className="relative z-10 text-shadow-sm text-shadow-red-light">
          {children}
        </span>
      </h2>
      <span
        className={`star opacity-0 scale-50 ml-5 text-5xl translate-y-5 text-shadow-sm text-shadow-red-light dark:text-black`}
      >
        ✦
      </span>
    </section>
  );
};

export default Dev;
