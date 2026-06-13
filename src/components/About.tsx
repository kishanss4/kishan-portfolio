import { GraduationCap, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const { ref: sectionRef, isInView: sectionInView } = useScrollReveal({ threshold: 0.1 });
  const { ref: educationRef, isInView: educationInView } = useScrollReveal({ threshold: 0.1 });
  const { ref: highlightsRef, isInView: highlightsInView } = useScrollReveal({ threshold: 0.2 });

  const education = [
    {
      degree: "BE in Computer Science & Engineering (AI & DS)",
      institution: "BGS College of Engineering and Technology (VTU)",
      grade: "CGPA: 8.98",
      period: "2021 - 2025",
      icon: <GraduationCap className="text-primary" size={24} />,
    },
    {
      degree: "Pre-University (PCMC)",
      institution: "Karnataka Board",
      grade: "87.33%",
      period: "2019 - 2021",
      icon: <Award className="text-accent" size={24} />,
    },
    {
      degree: "Secondary School (SSLC)",
      institution: "Karnataka Board",
      grade: "81.28%",
      period: "2019",
      icon: <Target className="text-primary-glow" size={24} />,
    },
  ];

  const highlights = [
    { label: 'Curious Learner', color: 'bg-primary' },
    { label: 'Problem Solver', color: 'bg-accent' },
    { label: 'Gaming Enthusiast', color: 'bg-primary-glow' },
    { label: 'Tech Innovator', color: 'bg-primary' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology, innovation, and creating solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Personal Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-5">
              <h3 className="text-2xl font-bold gradient-text">My Journey</h3>
              {[
                "As a final-year Computer Science Engineering student specializing in Artificial Intelligence and Data Science at BGS College of Engineering and Technology, I've maintained a strong academic record with a CGPA of 8.76 while actively engaging in practical projects and research.",
                "My curiosity drives me to explore emerging technologies, from building FPV drones to developing machine learning models for deepfake detection. I believe in learning by doing, which is why I've participated in numerous hackathons and technical competitions.",
                "Beyond academics, I'm an avid gamer and technology enthusiast who enjoys staying updated with the latest tech trends. I find inspiration in solving real-world problems through innovative software solutions and data-driven insights.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button variant="gradient" size="lg" className="group">
                  <Target className="mr-2 group-hover:rotate-45 transition-transform duration-500" size={20} />
                  My Vision
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-6" ref={educationRef}>
            <motion.h3
              className="text-2xl font-bold gradient-text"
              initial={{ opacity: 0, x: 40 }}
              animate={educationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Education
            </motion.h3>

            {/* Timeline with animated connecting line */}
            <div className="relative space-y-4">
              {/* Vertical line */}
              <motion.div
                className="absolute left-[29px] top-6 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-glow"
                initial={{ height: 0 }}
                animate={educationInView ? { height: 'calc(100% - 24px)' } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={educationInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.4 + index * 0.2,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Card className="neon-border bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-400 hover:-translate-y-1 ml-4">
                    <CardContent className="p-5">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className="p-2 rounded-lg bg-secondary/50 flex-shrink-0"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {edu.icon}
                        </motion.div>
                        <div className="flex-1 space-y-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-sm md:text-base">{edu.degree}</h4>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="text-sm font-medium text-primary">{edu.grade}</span>
                            <span className="text-sm text-muted-foreground">{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Personal Highlights */}
            <motion.div
              ref={highlightsRef}
              className="mt-8 p-6 rounded-xl glass border border-border/30"
              initial={{ opacity: 0, y: 30 }}
              animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="font-semibold text-foreground mb-4">Personal Highlights</h4>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={highlightsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.1 + i * 0.1,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <div className={`w-2 h-2 ${item.color} rounded-full`} />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;