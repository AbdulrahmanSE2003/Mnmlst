import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/constants";

const ProjectLinks = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <div className="flex items-center gap-4 pt-2">
      <Button size={"lg"} asChild>
        <Link
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group  font-medium px-5 py-5 rounded-lg hover:bg-foreground/90 transition-colors duration-300"
        >
          Live Demo
          <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Button>

      <Button variant={"outline"} asChild>
        <Link
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="group  text-sm text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 px-5 py-5 rounded-lg transition-all duration-500"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </Link>
      </Button>
    </div>
  );
};

export default ProjectLinks;
