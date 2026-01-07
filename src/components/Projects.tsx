import { useState } from "react";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Cpu,
  Play,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openCarousel, setOpenCarousel] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Projects", icon: <Globe size={18} /> },
    { id: "apps", label: "Mobile Apps", icon: <Smartphone size={18} /> },
    { id: "web", label: "Web Apps", icon: <Globe size={18} /> },
    { id: "hardware", label: "Hardware", icon: <Cpu size={18} /> },
  ];

  const projects = [
    {
      id: 1,
      title: "FPV Drone",
      category: "hardware",
      description:
        "Custom-built First Person View drone with real-time video transmission and autonomous flight capabilities. Winner of 1st Prize at Techno-Cultural Fest.",
      technologies: ["Arduino", "C++", "Electronics", "RF Communication"],
      images: ["/images/fpv1.jpg", "/images/fpv2.png", "/images/fpv3.png", "/images/fpv4.png", "/images/fpv5.jpg", "/images/fpv6.jpg"],
      links: { video: "https://www.youtube.com/watch?v=xxxx" },
      featured: true,
    },
    {
      id: 2,
      title: "SATURN - Sentiment Analysis Tool",
      category: "web",
      description:
        "Advanced sentiment analysis platform for user review navigation using natural language processing and machine learning algorithms.",
      technologies: ["Python", "Flask", "TensorFlow", "NLP", "React"],
      image: "/images/saturn.jpg",
      links: {
        github: "https://github.com/kishanss4/saturn",
        demo: "https://saturn-5.onrender.com",
      },
      featured: true,
    },
    {
      id: 3,
      title: "Deepfake Detection System",
      category: "web",
      description:
        "CNN + RNN based system for detecting deepfake videos. Research paper presented at ICAIH 2025 conference.",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "RNN"],
      image: "/images/deepfake.jpg",
      links: {
        github: "https://github.com/kishanss4/deepfake-detection-project",
        demo: "https://youtu.be/DKCY2cx-Okw",
      },
      featured: true,
    },
    {
      id: 4,
      title: "Bacti-Go Mobile App",
      category: "apps",
      description:
        "Healthcare mobile application for bacteria identification and treatment recommendations. Participated in JVTM competition.",
      technologies: ["Android", "Java", "Machine Learning", "Image Processing"],
      images: ["/images/bacti1.png", "/images/bacti2.png", "/images/bacti3.png", "/images/bacti4.png", "/images/bacti5.png"],
      links: { github: "https://github.com/kishanss4/bacti-go", apk: "#" },
    },
    {
      id: 5,
      title: "Vital-Link Food Donation Platform",
      category: "web",
      description:
        "Web platform connecting food donors with NGOs and individuals in need, reducing food waste and hunger.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Leaflet Maps API"],
      image: "/images/vital-link.png",
      links: {
        github: "https://github.com/kishanss4/vital-link",
        demo: "https://vital-link-2.onrender.com/",
      },
    },
    {
      id: 6,
      title: "Dual-Axis Solar Tracking System",
      category: "hardware",
      description:
        "Automated solar panel positioning system that follows the sun's movement to maximize energy efficiency.",
      technologies: ["Arduino", "Servo Motors", "LDR Sensors", "C++"],
      images: ["/images/solar1.jpg", "/images/solar2.jpg", "/images/solar3.jpg"],
      links: { github: "https://github.com/kishanss4/solar-tracking-system-arduino" },
    },
    {
      id: 7,
      title: "Corrupt Watch",
      category: "web",
      description:
        "An AI–Blockchain Integrated Framework for Transparent Civic Grievance Redressal",
      technologies: ["Blockchain", "Artificial Intelligence", "Leaflet Maps API", "Python"],
      image: "/images/corrupt.png",
      links: { 
        github: "https://github.com/kishanss4/corrupt-watch",
        demo: "https://corruptwatch.vercel.app/" },
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
            A collection of innovative solutions spanning mobile apps, web
            platforms, and hardware projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "hero" : "neon"}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className="transition-all duration-300"
            >
              {cat.icon}
              <span className="ml-2">{cat.label}</span>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const hasImages = Array.isArray((project as any).images) && (project as any).images.length > 0;
            const hasSingleImage = (project as any).image;

            return (
              <Card
                key={project.id}
                className={`card-hover neon-border bg-card/50 backdrop-blur-sm overflow-hidden group animate-fade-in ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Images / Single Image / Placeholder */}
                {hasImages ? (
                  <div className="relative h-48 bg-gradient-secondary">
                    <Carousel className="w-full h-48">
                      <CarouselContent>
                        {(project as any).images.map((img: string, i: number) => (
                          <CarouselItem key={i}>
                            <img
                              src={img}
                              alt={`${project.title} ${i + 1}`}
                              className="object-cover w-full h-48"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full" />
                          <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full" />
                        </>
                      )}
                    </Carousel>
                  </div>
                ) : hasSingleImage ? (
                  <div className="relative h-48">
                    <img
                      src={(project as any).image}
                      alt={project.title}
                      className="object-cover w-full h-48"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 bg-gradient-secondary overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">
                        {project.category === "apps" && <Smartphone />}
                        {project.category === "web" && <Globe />}
                        {project.category === "hardware" && <Cpu />}
                      </div>
                    </div>
                  </div>
                )}

               

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="gradient-text">{project.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2 pt-2">
                    {"demo" in project.links && project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="gradient" size="sm" className="w-full">
                          <ExternalLink className="mr-2" size={14} />
                          Demo
                        </Button>
                      </a>
                    )}
                    {"github" in project.links && project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="neon" size="sm" className="w-full">
                          <Github className="mr-2" size={14} />
                          Code
                        </Button>
                      </a>
                    )}
                    {"apk" in project.links && project.links.apk && (
                      <a href={project.links.apk} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="neon" size="sm" className="w-full">
                          <Smartphone className="mr-2" size={14} />
                          APK
                        </Button>
                      </a>
                    )}
                    {"video" in project.links && project.links.video && (
                      <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="hero" size="sm" className="w-full">
                          <Play className="mr-2" size={14} />
                          Watch Video
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="https://github.com/kishanss4" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
