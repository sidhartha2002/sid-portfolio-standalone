import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { milestones } from "@/data/portfolio";

export function Timeline() {
  return (
    <section id="journey" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-muted-foreground font-mono text-sm md:text-base">The path that led me here.</p>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent transform md:-translate-x-1/2 opacity-30" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <TimelineItem key={milestone.id} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""}`}>
      <div className="hidden md:flex absolute left-1/2 top-6 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-1/2 shadow-[0_0_10px_rgba(99,102,241,0.8)] z-10" />
      <div className="flex md:hidden absolute left-[15px] top-6 w-3 h-3 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(99,102,241,0.8)] z-10" />
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
        className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}
      >
        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:border-primary/30 transition-colors">
          <div className="flex flex-col mb-3">
            <span className="text-primary font-mono text-sm font-semibold mb-1">{milestone.period}</span>
            <h3 className="text-xl font-bold text-card-foreground">{milestone.role}</h3>
            <span className="text-muted-foreground font-medium">{milestone.company} • {milestone.location}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
