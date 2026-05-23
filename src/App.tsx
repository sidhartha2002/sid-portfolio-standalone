import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Timeline } from "@/components/Timeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { CredentialsSection } from "@/components/CredentialsSection";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/portfolio";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <Timeline />
          <SkillsGrid />
          <section id="projects" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
              <div className="mb-16 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground font-mono text-sm md:text-base">A selection of my recent work.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>
          <CredentialsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
