import { useState, useRef } from "react";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Cpu,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";
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
import { useScrollReveal } from "@/hooks/useScrollReveal";

// 3D Tilt Card wrapper
const TiltCard = ({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -8;
    const rotateY = (x - 0.5) * 8;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPosition({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transform,
        transition: 'transform 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow follow effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, hsl(var(--primary) / 0.15), transparent 50%)`,
        }}
      />
      {children}
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref: headerRef, isInView: headerInView } = useScrollReveal({ threshold: 0.2 });
  const { ref: gridRef, isInView: gridInView } = useScrollReveal({ threshold: 0.05 });

  const categories = [
    { id: "all", label: "All Projects", icon: <Globe size={16} /> },
    { id: "apps", label: "Mobile Apps", icon: <Smartphone size={16} /> },
    { id: "web", label: "Web Apps", icon: <Globe size={16} /> },
    { id: "hardware", label: "Hardware", icon: <Cpu size={16} /> },
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
        demo: "https://corruptwatch.vercel.app/",
      },
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of innovative solutions spanning mobile apps, web
            platforms, and hardware projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={activeCategory === cat.id ? "hero" : "neon"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className="transition-all duration-300"
              >
                {cat.icon}
                <span className="ml-2">{cat.label}</span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => {
            const hasImages = Array.isArray((project as any).images) && (project as any).images.length > 0;
            const hasSingleImage = (project as any).image;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                layout
              >
                <TiltCard className="relative h-full">
                  <Card
                    className={`neon-border bg-card/50 backdrop-blur-sm overflow-hidden group h-full flex flex-col ${
                      project.featured ? "ring-1 ring-primary/20" : ""
                    }`}
                  >
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-20">
                        <Badge className="bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-wider">
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Images / Single Image / Placeholder */}
                    {hasImages ? (
                      <div className="relative h-48 bg-gradient-secondary overflow-hidden">
                        <Carousel className="w-full h-48">
                          <CarouselContent>
                            {(project as any).images.map((img: string, i: number) => (
                              <CarouselItem key={i}>
                                <img
                                  src={img}
                                  alt={`${project.title} ${i + 1}`}
                                  className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-110"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          {project.images && project.images.length > 1 && (
                            <>
                              <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full border-0 h-8 w-8" />
                              <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full border-0 h-8 w-8" />
                            </>
                          )}
                        </Carousel>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    ) : hasSingleImage ? (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={(project as any).image}
                          alt={project.title}
                          className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    ) : (
                      <div className="relative h-48 bg-gradient-secondary overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-500">
                            {project.category === "apps" && <Smartphone />}
                            {project.category === "web" && <Globe />}
                            {project.category === "hardware" && <Cpu />}
                          </div>
                        </div>
                      </div>
                    )}

                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between">
                        <span className="gradient-text text-lg">{project.title}</span>
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-[11px] bg-secondary/50 hover:bg-secondary transition-colors px-2 py-0.5"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 pt-2">
                        {"demo" in project.links && project.links.demo && (
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="gradient" size="sm" className="w-full text-xs">
                              <ExternalLink className="mr-1.5" size={13} />
                              Demo
                            </Button>
                          </a>
                        )}
                        {"github" in project.links && project.links.github && (
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="neon" size="sm" className="w-full text-xs">
                              <Github className="mr-1.5" size={13} />
                              Code
                            </Button>
                          </a>
                        )}
                        {"apk" in project.links && project.links.apk && (
                          <a href={project.links.apk} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="neon" size="sm" className="w-full text-xs">
                              <Smartphone className="mr-1.5" size={13} />
                              APK
                            </Button>
                          </a>
                        )}
                        {"video" in project.links && project.links.video && (
                          <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="hero" size="sm" className="w-full text-xs">
                              <Play className="mr-1.5" size={13} />
                              Watch
                            </Button>
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/kishanss4"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button variant="hero" size="lg">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
