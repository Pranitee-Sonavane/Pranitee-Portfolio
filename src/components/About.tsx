import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";



const milestones = [
  { year: "2025", title: "National Hackathons", description: "Participated in 3 national hackathons in 1 year." },
  { year: "2023", title: "Dipex Project Selection", description: "Project selected for DIPEX-State Level Project Exhibition." },
  { year: "2022", title: "Paper Presentation Award", description: "Won 2nd place in a national level paper presentation." },
  { year: "2021", title: "Started Coding Journey", description: "Began exploring programming and developing small projects" },
];


export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass p-8 rounded-2xl hover-lift">
              <p className="text-lg leading-relaxed mb-6">
                Hello, I’m Pranitee! I’m an engineering student passionate about building useful projects that solve real problems, with a special focus on user interface design.                </p>
              <p className="text-lg leading-relaxed mb-6">
                I’m also a creative artist, who loves sketching, painting, and exploring different forms of visual expression. Combining my technical skills with my artistic side, I strive to create projects that are not just functional, but also beautiful, engaging, and innovative.              </p>
              <p className="text-lg leading-relaxed">
                Always curious and full of ideas, I enjoy turning creativity into meaningful experiences.              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 gradient-text">Journey Milestones</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold group-hover:glow smooth-transition">
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-lg">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
