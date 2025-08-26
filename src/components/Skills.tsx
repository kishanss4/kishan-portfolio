import { 
  Code, 
  Smartphone, 
  Globe, 
  Paintbrush, 
  Database, 
  Cpu, 
  Video, 
  Zap,
  Server,
  Monitor,
  Brain,
  Award,
  BookOpen,
  BarChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
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
      icon: <Globe className="text-primary" size={32} />,
      technologies: ["React", "Node.js", "MongoDB", "Flask"]
    },
    {
      title: "Mobile App Development",
      description: "Native Android applications with intuitive user interfaces",
      icon: <Smartphone className="text-accent" size={32} />,
      technologies: ["Android Studio", "Java", "UI/UX"]
    },
    {
      title: "Data Science & ML",
      description: "Machine learning models and data analysis solutions",
      icon: <Database className="text-primary-glow" size={32} />,
      technologies: ["Python", "TensorFlow", "OpenCV", "Pandas"]
    },
    {
      title: "Video & Photo Editing",
      description: "Creative content editing and visual design services",
      icon: <Video className="text-purple-400" size={32} />,
      technologies: ["Adobe Suite", "CapCut", "Photoshop"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise and certified knowledge to deliver exceptional solutions
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {technicalSkills.map((category, index) => (
            <Card 
              key={index} 
              className="card-hover neon-border bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-secondary/50">
                    {category.icon}
                  </div>
                  <span className="gradient-text">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1 bg-secondary/70 hover:bg-secondary transition-colors text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Training */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="card-hover neon-border bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-secondary/50 flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 gradient-text">
                        {cert.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Award className="text-muted-foreground" size={16} />
                        <span className="text-muted-foreground">{cert.organization}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">
            Fields of Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-hover neon-border bg-card/50 backdrop-blur-sm text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Icon */}
                  <div className="mx-auto w-16 h-16 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70 transition-colors">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold gradient-text">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-secondary border border-border/50">
            <div className="flex items-center justify-center mb-4">
              <Zap className="text-primary mr-2" size={24} />
              <h3 className="text-xl font-bold gradient-text">
                Ready to Work Together?
              </h3>
            </div>
            <p className="text-muted-foreground">
              Let's bring our ideas to life with cutting-edge technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;