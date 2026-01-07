import React from "react";
import { motion } from "framer-motion";
import "./Button.css";

const Button = ({ className = "", children, onClick, href, target }) => {
  const isInternal = href?.startsWith("#");

  const buttonContent = (
    <>
      <span className="btn-bg" />
      <span className="btn-text">{children}</span>
    </>
  );

  const sharedProps = {
    // Merge custom classes with our base class
    className: `custom-btn ${className}`,
    whileTap: { scale: 0.96 }, // Subtle click effect
  };

  // If it's a link (internal or external)
  if (href) {
    return (
      <motion.a
        href={href}
        {...sharedProps}
        {...(!isInternal && {
          target: target || "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {buttonContent}
      </motion.a>
    );
  }

  // If it's a standard button
  return (
    <motion.button type="button" onClick={onClick} {...sharedProps}>
      {buttonContent}
    </motion.button>
  );
};

export default Button;
