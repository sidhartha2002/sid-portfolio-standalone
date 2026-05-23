import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profilePhoto from "../assets/profile.jpeg";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1 + "px",
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white dark:bg-white/80"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-32 h-32"
          animate={{
            x: ["-10vw", "110vw"],
            y: ["100vh", "-20vh"],
            rotate: [45, 45],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-xl text-primary"
          >
            <defs>
              <filter
                id="exhaust-blur"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
              </filter>
            </defs>
            <path
              d="M50 10 C50 10 30 40 30 60 C30 75 40 85 50 85 C60 85 70 75 70 60 C70 40 50 10 50 10 Z"
              fill="currentColor"
              opacity="0.8"
            />
            <path d="M35 60 L20 80 L35 75 Z" fill="currentColor" />
            <path d="M65 60 L80 80 L65 75 Z" fill="currentColor" />
            <path d="M40 80 C40 80 50 100 60 80 Z" fill="#34d399" />
            <path
              d="M45 85 Q50 120 55 85"
              fill="none"
              stroke="#34d399"
              strokeWidth="8"
              filter="url(#exhaust-blur)"
              opacity="0.6"
            />
            <circle cx="50" cy="45" r="5" fill="#0b0f19" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 relative"
        >
          <motion.div
            className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_24px_4px_rgba(99,102,241,0.3)] relative"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px 8px rgba(99,102,241,0.5)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={profilePhoto}
              alt="Sidhartha Mohanty"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          Engineering Smart Ecosystems &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Premium Interfaces
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-mono"
        >
          Software Engineer specializing in the iOS ecosystem and premium web
          experiences. Currently engineering new device features for the Google
          Home ecosystem at RSL.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            size="lg"
            className="font-semibold px-8"
            onClick={() => scrollTo("projects")}
          >
            Explore Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-semibold px-8 border-primary/20 hover:bg-primary/10"
            asChild
          >
            <a href="/Sidhartha_Mohanty_Resume_2026.pdf" download>
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
