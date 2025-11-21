import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient" />
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Pranitee Sonavane</span>
          </motion.h1>

          <div className="text-2xl md:text-4xl font-semibold mb-8 h-20">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Artsist Enthusiast",
                2000,
                "Creative Thinker",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crafting digital experiences that blend innovation with elegance
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="glass glow hover-lift group"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass hover-lift"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { icon: Github, href: "https://github.com/Pranitee-Sonavane" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/pranitee-sonavane-2582752b2/" },
              { icon: Mail, href: "mailto:sonavanepranitee@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:glow smooth-transition"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};
