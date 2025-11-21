import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Java", level: 90 },
  { name: "Database", level: 85 },
  { name: "Python", level: 88 },
  { name: "Javascript", level: 80 },
  { name: "TypeScript", level: 75 },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl hover-lift"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
              </div>
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
