import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";
import * as Icons from "react-icons/si";

export function SkillsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-24 bg-card/30 border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl" ref={ref}>
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Toolkit</h2>
          <p className="text-muted-foreground font-mono text-sm md:text-base">Technologies I build with.</p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <SkillCategory title="Languages" items={skills.languages} variants={itemVariants} />
          <SkillCategory title="Frameworks & Tools" items={skills.frameworks} variants={itemVariants} />
          <SkillCategory title="Ecosystems & DBs" items={skills.ecosystems} variants={itemVariants} />
        </motion.div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items, variants }: { title: string; items: { name: string; icon: string }[]; variants: object }) {
  return (
    <motion.div variants={variants} className="flex flex-col">
      <h3 className="text-lg font-mono font-semibold text-primary mb-6 border-b border-border/50 pb-2">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => <SkillBadge key={skill.name} skill={skill} />)}
      </div>
    </motion.div>
  );
}

function SkillBadge({ skill }: { skill: { name: string; icon: string } }) {
  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[skill.icon];
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(99,102,241,0.2)" }}
      className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-md text-sm font-medium transition-colors hover:border-primary/50"
    >
      {IconComponent && <IconComponent className="text-muted-foreground" />}
      <span>{skill.name}</span>
    </motion.div>
  );
}
