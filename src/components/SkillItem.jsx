import React from 'react';

const SkillItem = ({children, title}) => {
  return (
      <li className={ `border border-gray-300 dark:border-gray-200/20 rounded-2xl flex flex-col justify-between items-center p-6 px-3 gap-5 hover:-translate-y-1 shadow-xs dark:shadow-gray-700 hover:border-gray-500 dark:hover:border-gray-200/50 transition duration-500 skill`}>
          {children}
          <span>{title}</span>
      </li>
  );
};

export default SkillItem;
