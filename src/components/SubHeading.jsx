import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const SubHeading = ({children}) => {
    const subRef = useRef(null)

    useGSAP(() =>{

        gsap.to(subRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.65,
            delay: 0.25,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: subRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });
    }, [])
  return (
      <h4 ref={subRef} className="sub-heading opacity-0 translate-y-20 text-lg ">
          {children}
      </h4>
  );
};

export default SubHeading;
