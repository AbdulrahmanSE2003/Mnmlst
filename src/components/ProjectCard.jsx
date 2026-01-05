import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
    const { title, category, description, imageurl: image, demolink, githublink, tech } = project;

    return (
        <>
            {/* Image Section */}
            <div className="flex-1 w-full group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-600">
                <img
                    src={image}
                    alt={title}
                    className="w-full aspect-video md:aspect-auto md:h-[450px] object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                    <a href={githublink} target="_blank" rel="noreferrer" className="text-white hover:text-red-light transition-colors p-3 bg-black/20 backdrop-blur-md rounded-full">
                        <FaGithub size={24} />
                    </a>
                    <a href={demolink} target="_blank" rel="noreferrer" className="text-white hover:text-red-light transition-colors p-3 bg-black/20 backdrop-blur-md rounded-full">
                        <FaExternalLinkAlt size={22} />
                    </a>
                </div>
            </div>

            {/* Info Section */}
            <div className={`flex-1 flex flex-col ${index % 2 !== 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-light mb-4">
                    {category}
                </span>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter dark:text-white mb-6">
                    {title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
                    {description}
                </p>

                <div className={`flex flex-wrap gap-4 ${index % 2 !== 0 ? "md:justify-end" : "md:justify-start"}`}>
                    {tech.map((t) => (
                        <span key={t} className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-300 dark:border-zinc-600 hover:border-red-light hover:text-red-light transition-colors duration-300 pb-1">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectCard;