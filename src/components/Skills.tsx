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
  Monitor
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-primary" size={24} />,
      skills: [
        { name: "Python", level: 90, color: "bg-blue-500" },
        { name: "C/C++", level: 85, color: "bg-green-500" },
        { name: "Java", level: 80, color: "bg-orange-500" },
        { name: "HTML/CSS", level: 88, color: "bg-red-500" },
        { name: "JavaScript", level: 75, color: "bg-yellow-500" }
      ]
    },
    {
      title: "AI & Data Science",
      icon: <Database className="text-accent" size={24} />,
      skills: [
        { name: "TensorFlow", level: 85, color: "bg-orange-500" },
        { name: "OpenCV", level: 80, color: "bg-green-500" },
        { name: "NumPy", level: 88, color: "bg-blue-500" },
        { name: "Pandas", level: 85, color: "bg-purple-500" },
        { name: "Seaborn", level: 82, color: "bg-teal-500" }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="text-primary-glow" size={24} />,
      skills: [
        { name: "React.js", level: 85, color: "bg-cyan-500" },
        { name: "Flask", level: 80, color: "bg-gray-500" },
        { name: "Node.js", level: 75, color: "bg-green-600" },
        { name: "MongoDB", level: 78, color: "bg-green-500" },
        { name: "Express.js", level: 76, color: "bg-gray-600" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-accent" size={24} />,
      skills: [
        { name: "Android Studio", level: 82, color: "bg-green-500" },
        { name: "Java (Android)", level: 80, color: "bg-orange-600" },
        { name: "UI/UX Design", level: 75, color: "bg-pink-500" }
      ]
    }
  ];

  const tools = [
    { name: "VS Code", icon: <Code size={20} /> },
    { name: "Adobe Suite", icon: <Paintbrush size={20} /> },
    { name: "CapCut", icon: <Video size={20} /> },
    { name: "Arduino IDE", icon: <Cpu size={20} /> },
    { name: "Git/GitHub", icon: <Server size={20} /> },
    { name: "Figma", icon: <Monitor size={20} /> }
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
            Skills & <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise and services I offer to bring your ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
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
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-2" />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {tools.map((tool, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="p-3 bg-secondary/50 hover:bg-secondary transition-colors cursor-default neon-border"
              >
                <div className="flex items-center space-x-2">
                  {tool.icon}
                  <span>{tool.name}</span>
                </div>
              </Badge>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">
            Services I Offer
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
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-secondary border border-border/50">
            <div className="flex items-center justify-center mb-4">
              <Zap className="text-primary mr-2" size={24} />
              <h3 className="text-xl font-bold gradient-text">
                Ready to Work Together?
              </h3>
            </div>
            <p className="text-muted-foreground">
              Let's discuss your project and bring your ideas to life with cutting-edge technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;