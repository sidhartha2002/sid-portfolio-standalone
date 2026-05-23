import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectModal } from "./ProjectModal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

type Project = typeof projects[0];

export function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:border-primary/50 flex flex-col h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded-full border border-border/50">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>
          <Button
            variant="outline"
            className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
            onClick={() => setIsOpen(true)}
          >
            View Details
          </Button>
        </div>
      </motion.div>
      <ProjectModal project={project} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
