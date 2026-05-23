import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { credentials } from "@/data/portfolio";
import { Trophy, Award, GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const icons: Record<string, React.ComponentType<{ className?: string }>> = { Trophy, Award, GraduationCap };

export function CredentialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } },
  };

  return (
    <section id="credentials" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl" ref={ref}>
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Credentials & Impact</h2>
          <p className="text-muted-foreground font-mono text-sm md:text-base">Achievements and education.</p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {credentials.map((cred) => {
            const Icon = icons[cred.icon];
            return (
              <motion.div key={cred.id} variants={itemVariants} className="bg-card p-6 rounded-xl border border-border flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{cred.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cred.description}</p>
                </div>
              </motion.div>
            );
          })}
          <motion.div variants={itemVariants} className="bg-card p-6 rounded-xl border border-border/50 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="font-bold text-lg mb-2 relative z-10">Full Resume</h3>
            <p className="text-muted-foreground text-sm mb-6 relative z-10">Get a detailed look at my experience, skills, and background.</p>
            <Button className="relative z-10 w-full" asChild>
              <a href="/Sidhartha_Mohanty_Resume_2026.pdf" download className="flex items-center gap-2">
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
