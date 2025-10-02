import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionHeading = ({ children }) => {
  const h2ref = useRef(null);
  useGSAP(() => {
    gsap.to(h2ref.current, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: h2ref.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <h2 ref={h2ref} className="section-heading">
      {children}
    </h2>
  );
};

export default SectionHeading;
