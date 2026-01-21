import React, { useState } from "react";
import Message from "./Message.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BotChoices = ({ className }) => {
  const [answers, setAnswers] = useState(null);

  const choices = [
    {
      q: "About Mnmlst",
      ans: [
        "Mnmlst is my personal brand.",
        "It’s all about keeping code and design simple, clean, and creative.",
        "The focus is on minimalism with subtle details is my mission.",
      ],
    },
    {
      q: "What services I provide",
      ans: [
        "I specialize in frontend development using React, JavaScript, and modern web tools.",
        "My goal is to build fast, responsive, and user-friendly web experiences.",
        "I also work on minimalistic UI/UX design — balancing functionality with clarity.",
      ],
    },
    {
      q: "Ways to contact me",
      ans: [
        <a href={`mailto:abdulrahman.saad2303@gmail.com`}>
          Click to Send Message.
        </a>,
        <a href="https://www.linkedin.com/in/abdulrahman-saad/">
          Or check my LinkedIn.
        </a>,
        "Also you can find more ways at the footer",
      ],
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".msg", {
      opacity: 1,
      y: 0,
      duration: 0.2,
      stagger: 0.2,
    }).to(".choice", {
      opacity: 1,
      y: 0,
      duration: 0.25,
      stagger: 0.3,
    });
  }, []);

  function handleChoice(i) {
    setAnswers(choices[i].ans);
  }
  return (
    <div className={className}>
      {choices.map((choice, i) => (
        <button
          key={`${choice} ${i}`}
          onClick={() => handleChoice(i)}
          className={`border border-red-dev rounded-2xl py-3 px-4 w-fit mb-2 hover:shadow-xl hover:-translate-y-1 transition duration-400 cursor-pointer choice opacity-0 translate-y-5`}
        >
          {choice.q}
        </button>
      ))}
      {answers &&
        answers.map((answer, i) => {
          if (i === answers.length - 1) {
            return (
              <>
                <Message className={`msg opacity-0 translate-y-5`}>
                  {answer}
                </Message>
                <BotChoices />
              </>
            );
          } else {
            return (
              <Message className={`msg opacity-0 translate-y-5`}>
                {answer}
              </Message>
            );
          }
        })}
    </div>
  );
};

export default BotChoices;
