import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "Internship",
    title: "Autonomous Navigation & AI Engineer Intern",
    company: "ISAE SUPMECA Internship",
    period: "2025 - Present",
    description: "Developing AI-powered autonomous navigation for drones with object detection and obstacle avoidance.",
  },
  {
    type: "Internship",
    title: "Software Developer Intern",
    company: "Vikrama Technologies",
    period: "2022 - 2023",
    description: "Built responsive Softwares  using Java, Java Swing and MySQL ",
  },
  {
    type: "education",
    title: "B.Tech in Computer Science",
    company: "Nagesh Karajagi Orchid College of Engineering and Technology",
    period: "2023 - Present",
    description: "Working on diverse projects to build technical skills and hands-on experience",
  },
  {
    type: "education",
    title: "Diploma in Information Technology",
    company: "Shri Siddeshwar Women's Polytechnic, Solapur",
    period: "2020 - 2023",
    description: "Gained foundational programming knowledge and practical technical skills.",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              <div className="glass p-6 rounded-xl hover-lift md:w-[calc(100%-2rem)] ml-16 md:ml-0">
                <div
                  className={`absolute top-6 ${
                    index % 2 === 0 ? "left-0 md:right-[-2rem]" : "left-0 md:left-[-2rem]"
                  } w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow`}
                >
                  {exp.type === "Internship" ? (
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  )}
                </div>

                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-primary font-semibold mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
