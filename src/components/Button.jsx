import React from "react";
import { motion } from "framer-motion";

const Button = ({ className, px, py, children, onClick, href }) => {
  const Tag = href ? "a" : "button";

  const MotionTag = `motion.${Tag}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`btn ${className || ""} ${px || ""} ${py || ""}`}
      >
        {children}
      </motion.a>
    );
  } else {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`btn ${className || ""} ${px || ""} ${py || ""}`}
      >
        {children}
      </motion.button>
    );
  }
};

export default Button;
