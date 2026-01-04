import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, category, description, image, demoLink, githubLink, tech }) => {
    return (
        <div className="group relative flex flex-col h-full bg-transparent">
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-zinc-200 transition-all duration-500 ">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out  g group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <a href={githubLink} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-red-light hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href={demoLink} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-red-light hover:text-white transition-colors">
                        <FaExternalLinkAlt size={18} />
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="mt-6 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-[0.2em] text-red-light font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {category}
                </span>
                <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-red-light transition-colors">
                    {title}
                </h3>
                <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {description}
                </p>

                {/* Tech Tags - Minimalist & Unified */}
                <div className="mt-auto flex flex-wrap gap-2">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="text-[10px] px-2 py-1 rounded-md border border-gray-200 dark:border-zinc-800 text-gray-800 dark:text-gray-300 font-medium group-hover:text-gray-600 dark:group-hover:text-zinc-200 transition-colors cursor-default hover:bg-gray-500/10 dark:hover:bg-gray-100/10 transition-colors duration-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;