import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ArtFolio",
    description: "A cozy little corner of the internet where I share my love for traditional art and thoughtful design.",
    category: "Design",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "src/images/artfolio.jpg",
    github: "https://github.com/Pranitee-Sonavane/Pranitee-Artfolio",
    demo: "https://pranitee-sonavane.github.io/Pranitee-Artfolio/",
  },
  {
    title: "Decentralised Science",
    description: "Blockchain-based platform to decentralize and democratize scientific research.",
    category: "Blockchain",
    tags: ["React", "TypeScript", "Vite"],
    image: "src/images/decentralised.jpg",
    github: "https://github.com/Pranitee-Sonavane/Decentralized-Science",
    demo: "https://pranitee-sonavane.github.io/Pranitee-Artfolio/",
  },
  {
    title: "Youtube Video Transcript Summarizer",
    description: "YSummarize is a Chrome extension that quickly summarizes YouTube videos, saving users time.",
    category: "Web",
    tags: ["HTML", "CSS", "Python","Flask","JavaScript","NLP"],
    image: "src/images/youtube.jpg",
    github: "https://github.com/Pranitee-Sonavane/YSummarize",
    demo: "https://pranitee-sonavane.github.io/Pranitee-Artfolio/",
  },
  {
    title: "Ecofriendly Hybrid Dashboard",
    description: "Dashboard displaying real-time sensor data on energy savings, power generation, and voltage.",
    category: "Web",
    tags: ["React", "Arduino", "Socket.IO"],
    image: "src/images/ecofriendly.jpg",
    github: "https://github.com/Pranitee-Sonavane/Hybrid-Ecofriendly",
    demo: "https://pranitee-sonavane.github.io/Pranitee-Artfolio/",
  },
  {
    title: "Travel and Tourism Management System",
    description: "The System is a Java-based project designed to streamline the process of managing travel bookings, itineraries, and customer details",
    category: "Software",
    tags: ["Java", "MySQL", "Java Swing"],
    image: "src/images/tourism.jpg",
    github: "https://github.com/Pranitee-Sonavane/Travel-And-Tourism-Management-System",
    demo: "https://pranitee-sonavane.github.io/Pranitee-Artfolio/",
  },
  {
    title: "Hope On A Plate",
    description: "An integrated system to manage hotel operations and NGO activities efficiently.",
    category: "Web",
    tags: ["React", "Firebase", "Material-UI"],
    image: "src/images/hopeonaplate.jpg",
     github: "https://github.com/Pranitee-Sonavane/Hope-On-A-Plate",
    demo: "https://pranitee-sonavane.github.io/Pranitee-Artfolio/",
  },
];

const categories = ["All", "Web", "Blockchain", "Design","Software"];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "glow" : "glass"}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden hover-lift"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text smooth-transition">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
  <Button 
    size="sm" 
    variant="outline" 
    className="glass"
    onClick={() => window.open(project.github, "_blank")}
  >
    <Github className="w-4 h-4 mr-2" />
    Code
  </Button>
  <Button 
    size="sm" 
    className="glow"
    onClick={() => window.open(project.demo, "_blank")}
  >
    <ExternalLink className="w-4 h-4 mr-2" />
    Live Demo
  </Button>
</div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
