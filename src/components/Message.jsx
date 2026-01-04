import React from "react";

const Message = ({ children, className }) => {
  return (
    <p
      className={`text-[1rem] mb-2 font-medium capitalize bg-red-dev/75 text-black  rounded-2xl p-3 px-4 w-fit ${className || ""} max-w-full`}
    >
      {children}
    </p>
  );
};

export default Message;
