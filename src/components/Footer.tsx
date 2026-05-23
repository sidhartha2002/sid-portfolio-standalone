import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card py-12 relative overflow-hidden border-t border-border/50">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Sidhartha Mohanty</h2>
        <p className="text-muted-foreground font-mono text-sm mb-8">Building the future, one line at a time.</p>
        <div className="flex gap-6 mb-8">
          <a href="https://github.com/sidhartha2002" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/sidhartha2002/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60">© {new Date().getFullYear()} Sidhartha Mohanty. All rights reserved.</p>
      </div>
    </footer>
  );
}
