import React, { useEffect } from "react";
import gsap from "gsap";

const SubtleStars = ({ pos1, pos2, pos3 }) => {
  useEffect(() => {
    gsap.utils.toArray(".floating-shape").forEach((el, i) => {
      gsap.to(el, {
        y: "+=20",
        rotate: i % 2 === 0 ? 10 : -10,
        duration: 4 + i,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <>
      <span
        className={`floating-shape absolute ${pos1} text-3xl text-red dark:text-red-300 opacity-30`}
      >
        ✦
      </span>
      <span
        className={`floating-shape absolute ${pos2} text-3xl text-red dark:text-red-300 opacity-30`}
      >
        ●
      </span>
      <span
        className={`floating-shape absolute ${pos3} text-3xl text-red dark:text-red-300 opacity-30`}
      >
        ✦
      </span>
    </>
  );
};

export default SubtleStars;
