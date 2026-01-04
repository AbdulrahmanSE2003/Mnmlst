import { AnimatePresence, motion } from "framer-motion";
import SubtleStars from "./SubtleStars.jsx";
import React from "react";

export default function Splash(props) {
  return (
    <AnimatePresence>
      {props.showSplash && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white z-50"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-light mb-2"
          >
            Choose your vibe ✦
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-gray-500 dark:text-gray-400 text-lg my-4"
          >
            Make it minimal. Make it yours.
          </motion.p>

          <div className="flex gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={props.onClick}
              className="px-6 py-2 rounded-2xl border border-gray-400 bg-white text-black shadow-sm hover:bg-gray-100"
            >
              Light
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={props.onClick1}
              className="px-6 py-2 rounded-2xl border border-gray-600 bg-black text-white shadow-sm hover:bg-gray-900"
            >
              Dark
            </motion.button>
          </div>

          {/* Subtle Floating Shapes */}
          <SubtleStars
            pos1={`top-20 left-10`}
            pos2={`bottom-32 right-20`}
            pos3={`top-2/3 left-6`}
          />
        </motion.section>
      )}
    </AnimatePresence>
  );
}
