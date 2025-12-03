import { CustomCursor } from "@/components/CustomCursor";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <ThemeToggle />
      <ScrollProgress />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Pranitee Sonavane. Crafted with passion and code.</p>
      </footer>
    </div>
  );
};

export default Index;
