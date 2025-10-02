import React from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ title, description, image, demoLink, githubLink, tech, project }) => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-[6px]" >
            {/* صورة البروجكت */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full brightness-90 dark:brightness-[80%] h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* التفاصيل */}
            <div className="flex-1 flex flex-col p-5">
                <h3 className="text-xl font-semibold mb-2 dark:text-white  group-hover:text-red-light dark:group-hover:text-red-dev transition-colors duration-300">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 min-h-10 max-h-10 overflow-hidden">{description}</p>

                {/* Tech Stack */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-lg"
                        >
              {t}
            </span>
                    ))}
                </div>

                {/* أزرار */}
                <div className="mt-4 flex gap-3">
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors text-sm"
                        >
                            <ExternalLink size={16} /> Demo
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                        >
                            <Github size={16} /> Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
