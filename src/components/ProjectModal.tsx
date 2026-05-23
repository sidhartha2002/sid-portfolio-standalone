import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { projects } from "@/data/portfolio";

type Project = typeof projects[0];

export function ProjectModal({ project, isOpen, setIsOpen }: { project: Project; isOpen: boolean; setIsOpen: (v: boolean) => void }) {
  if (!project) return null;
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl bg-card border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">{project.title}</DialogTitle>
          <DialogDescription className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                {tech}
              </span>
            ))}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
          <p className="text-base text-foreground font-medium border-l-2 border-primary pl-4 py-1">{project.description}</p>
          <p>{project.fullDescription}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
