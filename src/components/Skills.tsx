import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Video, 
  Zap,
  Server,
  Monitor,
  Brain,
  Award,
  BarChart
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Skills = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal({ threshold: 0.2 });
  const { ref: skillsRef, isInView: skillsInView } = useScrollReveal({ threshold: 0.05 });
  const { ref: certsRef, isInView: certsInView } = useScrollReveal({ threshold: 0.1 });
  const { ref: servicesRef, isInView: servicesInView } = useScrollReveal({ threshold: 0.1 });

  const technicalSkills = [
    {
      title: "Programming & Development",
      icon: <Code className="text-primary" size={24} />,
      skills: ["Android", "Web Development", "C", "Python", "HTML", "React"]
    },
    {
      title: "AI & Data Science",
      icon: <Brain className="text-accent" size={24} />,
      skills: ["Machine Learning", "Deep Learning", "Artificial Intelligence", "Data Science", "Data Analytics", "Statistical Modeling", "Natural Language Processing (NLP)", "Supervised Learning", "Unsupervised Learning"]
    },
    {
      title: "Libraries & Frameworks",
      icon: <Server className="text-primary-glow" size={24} />,
      skills: ["TensorFlow", "OpenCV", "Flask", "NumPy", "Seaborn"]
    },
    {
      title: "Databases",
      icon: <Database className="text-accent" size={24} />,
      skills: ["SQLite", "MySQL", "Firebase"]
    },
    {
      title: "Data Visualization & BI Tools",
      icon: <BarChart className="text-primary" size={24} />,
      skills: ["Power BI", "Excel"]
    },
    {
      title: "Software & Tools",
      icon: <Monitor className="text-primary-glow" size={24} />,
      skills: ["VS Code", "Adobe Photoshop", "Adobe Premiere Pro", "Adobe After Effects"]
    }
  ];

  const certifications = [
    {
      title: "Data Mining",
      organization: "NPTEL",
      icon: <Database className="text-primary" size={20} />
    },
    {
      title: "Complete Bootcamp of Python",
      organization: "Udemy",
      icon: <Code className="text-accent" size={20} />
    },
    {
      title: "Data Analysis Using Excel",
      organization: "Coursera",
      icon: <BarChart className="text-primary-glow" size={20} />
    },
    {
      title: "Machine Learning and Deep Learning",
      organization: "IBM SkillsBuild",
      icon: <Brain className="text-accent" size={20} />
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Full-stack web applications using modern frameworks and technologies",
      icon: <Globe className="text-primary" size={28} />,
      technologies: ["React", "Node.js", "MongoDB", "Flask"]
    },
    {
      title: "Mobile App Development",
      description: "Native Android applications with intuitive user interfaces",
      icon: <Smartphone className="text-accent" size={28} />,
      technologies: ["Android Studio", "Java", "UI/UX"]
    },
    {
      title: "Data Science & ML",
      description: "Machine learning models and data analysis solutions",
      icon: <Database className="text-primary-glow" size={28} />,
      technologies: ["Python", "TensorFlow", "OpenCV", "Pandas"]
    },
    {
      title: "Video & Photo Editing",
      description: "Creative content editing and visual design services",
      icon: <Video className="text-purple-400" size={28} />,
      technologies: ["Adobe Suite", "CapCut", "Photoshop"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise and certified knowledge to deliver exceptional solutions
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div ref={skillsRef} className="grid md:grid-cols-2 gap-6 mb-16">
          {technicalSkills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card className="neon-border bg-card/50 backdrop-blur-sm hover:shadow-card hover:-translate-y-1 transition-all duration-400 group h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3">
                    <motion.div
                      className="p-2 rounded-lg bg-secondary/50 group-hover:bg-secondary/70 transition-colors"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {category.icon}
                    </motion.div>
                    <span className="gradient-text text-base md:text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: index * 0.1 + skillIndex * 0.05,
                          duration: 0.4,
                          type: 'spring',
                          stiffness: 200,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1.5 bg-secondary/70 hover:bg-primary/20 hover:text-primary transition-all duration-300 text-sm font-medium cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Training */}
        <div ref={certsRef} className="mb-16">
          <motion.h3
            className="text-2xl font-bold gradient-text text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={certsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Certifications & Training
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={certsInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="neon-border bg-card/50 backdrop-blur-sm hover:shadow-card hover:-translate-y-1 transition-all duration-400 group">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-xl bg-secondary/50 flex-shrink-0 group-hover:bg-secondary/70 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {cert.icon}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base md:text-lg font-semibold mb-1 gradient-text">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <Award className="text-muted-foreground flex-shrink-0" size={14} />
                          <span className="text-sm text-muted-foreground">{cert.organization}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div ref={servicesRef} className="mb-16">
          <motion.h3
            className="text-2xl font-bold gradient-text text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Fields of Expertise
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="neon-border bg-card/50 backdrop-blur-sm text-center group hover:shadow-card hover:-translate-y-2 transition-all duration-400 h-full">
                  <CardContent className="p-5 md:p-6 space-y-4">
                    {/* Icon */}
                    <motion.div
                      className="mx-auto w-14 h-14 md:w-16 md:h-16 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      {service.icon}
                    </motion.div>

                    <h4 className="text-base md:text-lg font-semibold gradient-text">
                      {service.title}
                    </h4>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1 justify-center">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-[10px] md:text-xs bg-primary/10 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="inline-block p-8 rounded-2xl glass border border-border/30">
            <div className="flex items-center justify-center mb-4 gap-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Zap className="text-primary" size={24} />
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold gradient-text">
                Ready to Work Together?
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Let's bring our ideas to life with cutting-edge technology
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;