import React, { useRef, useEffect } from "react";
import { darkLogo } from "../constants/index.js";
import { AnimatePresence, motion } from "framer-motion";
import Message from "./Message.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BotChoices from "./BotChoices.jsx";

const Contact = ({ setShowBot, showBot }) => {
  const messagesContainerRef = useRef(null);

  // scroll to bottom (inside chat box only)
  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth", // smooth instead of jump
      });
    }
  };

  useGSAP(() => {
    gsap.to(".msg", {
      opacity: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.45,
      onComplete: scrollToBottom, // كل ما تظهر رسالة جديدة ينزل تحت
    });
  }, [showBot]);

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <AnimatePresence>
      {showBot && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.35 }}
          className={`absolute sm:fixed bottom-0 left-0 sm:left-auto sm:right-8 sm:bottom-5 z-[60] h-[90vh] sm:h-[85vh] lg:h-[70vh] border-2 border-red-dev rounded-t-xl sm:rounded-xl w-full sm:w-80`}
        >
          <div className={`flex flex-col h-full`}>
            {/* Header */}
            <div
              className={`bar w-full h-20 bg-red-dev  rounded-t-lg flex justify-start p-3 gap-3`}
            >
              <div className={`flex justify-center items-center`}>
                <img
                  src={darkLogo}
                  alt={`logo`}
                  width={36}
                  height={36}
                  className={`border border-white rounded-full`}
                />
              </div>
              <div className={`flex flex-col gap-1 text-sm font-semibold`}>
                <h5>Mnmlst Bot</h5>
                <p className={`text-gray-500`}>Ready for any Question ?</p>
              </div>
              <div className={`ml-auto`}>
                <button
                  onClick={() => setShowBot(false)}
                  className={`p-3 hover:bg-gray-200/50 text-black text-3xl transition-colors duration-500 py-1 rounded-xl cursor-pointer`}
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={messagesContainerRef}
              className={`h-full bg-gray-100  w-full rounded-b-xl messages p-2 overflow-y-auto`}
            >
              <Message className={`msg opacity-0 translate-y-5`}>Hi !</Message>
              <Message className={`msg opacity-0 translate-y-5`}>
                I'm Mnmlst Bot. I'm Ready to help you with any questions you
                might have about my work.
              </Message>
              <Message className={`msg opacity-0 translate-y-5`}>
                How can i help you ?
              </Message>
              <BotChoices
                className={`msg opacity-0 translate-y-5 flex flex-col gap-1`}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
