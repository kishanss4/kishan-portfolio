import { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Globe size={18} /> },
    { id: 'apps', label: 'Mobile Apps', icon: <Smartphone size={18} /> },
    { id: 'web', label: 'Web Apps', icon: <Globe size={18} /> },
    { id: 'hardware', label: 'Hardware', icon: <Cpu size={18} /> },
  ];

  const projects = [
    {
      id: 1,
      title: "FPV Drone",
      category: "hardware",
      description: "Custom-built First Person View drone with real-time video transmission and autonomous flight capabilities. Winner of 1st Prize at Techno-Cultural Fest.",
      technologies: ["Arduino", "C++", "Electronics", "RF Communication"],
      image: "/api/placeholder/400/250",
      links: {
        demo: "#",
        video: "#"
      },
      featured: true
    },
    {
      id: 2,
      title: "SATURN - Sentiment Analysis Tool",
      category: "web",
      description: "Advanced sentiment analysis platform for user review navigation using natural language processing and machine learning algorithms.",
      technologies: ["Python", "Flask", "TensorFlow", "NLP", "React"],
      image: "/api/placeholder/400/250",
      links: {
        github: "#",
        demo: "#"
      },
      featured: true
    },
    {
      id: 3,
      title: "Deepfake Detection System",
      category: "web",
      description: "CNN + RNN based system for detecting deepfake videos. Research paper presented at ICAIH 2025 conference.",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "RNN"],
      image: "/api/placeholder/400/250",
      links: {
        github: "#",
        paper: "#"
      },
      featured: true
    },
    {
      id: 4,
      title: "Bacti-Go Mobile App",
      category: "apps",
      description: "Healthcare mobile application for bacteria identification and treatment recommendations. Participated in JVTM competition.",
      technologies: ["Android", "Java", "Machine Learning", "Image Processing"],
      image: "/api/placeholder/400/250",
      links: {
        github: "#",
        apk: "#"
      }
    },
    {
      id: 5,
      title: "Vital-Link Food Donation Platform",
      category: "web",
      description: "Web platform connecting food donors with NGOs and individuals in need, reducing food waste and hunger.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Google Maps API"],
      image: "/api/placeholder/400/250",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 6,
      title: "Dual-Axis Solar Tracking System",
      category: "hardware",
      description: "Automated solar panel positioning system that follows the sun's movement to maximize energy efficiency.",
      technologies: ["Arduino", "Servo Motors", "LDR Sensors", "C++"],
      image: "/api/placeholder/400/250",
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of innovative solutions spanning mobile apps, web platforms, and hardware projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "hero" : "neon"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.icon}
              <span className="ml-2">{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`card-hover neon-border bg-card/50 backdrop-blur-sm overflow-hidden group animate-fade-in ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-secondary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {project.category === 'apps' && <Smartphone />}
                    {project.category === 'web' && <Globe />}
                    {project.category === 'hardware' && <Cpu />}
                  </div>
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="gradient-text">{project.title}</span>
                  <div className="flex items-center space-x-2">
                    {project.links.github && (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github size={16} />
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink size={16} />
                      </Button>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2 pt-2">
                  {project.links.demo && (
                    <Button variant="gradient" size="sm" className="flex-1">
                      <ExternalLink className="mr-2" size={14} />
                      Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="neon" size="sm" className="flex-1">
                      <Github className="mr-2" size={14} />
                      Code
                    </Button>
                  )}
                  {project.links.apk && (
                    <Button variant="neon" size="sm" className="flex-1">
                      <Smartphone className="mr-2" size={14} />
                      APK
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;