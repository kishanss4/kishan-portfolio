import { GraduationCap, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "BE in Computer Science & Engineering (AI & DS)",
      institution: "BGS College of Engineering and Technology (VTU)",
      grade: "CGPA: 8.76",
      period: "2021 - 2025",
      icon: <GraduationCap className="text-primary" size={24} />
    },
    {
      degree: "Pre-University (PCMC)",
      institution: "Karnataka Board",
      grade: "87.33%",
      period: "2019 - 2021",
      icon: <Award className="text-accent" size={24} />
    },
    {
      degree: "Secondary School (SSLC)",
      institution: "Karnataka Board", 
      grade: "81.28%",
      period: "2019",
      icon: <Target className="text-primary-glow" size={24} />
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology, innovation, and creating solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a final-year Computer Science Engineering student specializing in Artificial Intelligence 
                and Data Science at BGS College of Engineering and Technology, I've maintained a strong 
                academic record with a CGPA of 8.76 while actively engaging in practical projects and research.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My curiosity drives me to explore emerging technologies, from building FPV drones to 
                developing machine learning models for deepfake detection. I believe in learning by doing, 
                which is why I've participated in numerous hackathons and technical competitions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond academics, I'm an avid gamer and technology enthusiast who enjoys staying updated 
                with the latest tech trends. I find inspiration in solving real-world problems through 
                innovative software solutions and data-driven insights.
              </p>
            </div>

            <div className="pt-6">
              <Button variant="gradient" size="lg" className="group">
                <Target className="mr-2 group-hover:rotate-45 transition-transform" size={20} />
                My Vision
              </Button>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold gradient-text">Education</h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover neon-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-secondary/50">
                        {edu.icon}
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-primary">{edu.grade}</span>
                          <span className="text-sm text-muted-foreground">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Personal Highlights */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-secondary border border-border/50">
              <h4 className="font-semibold text-foreground mb-3">Personal Highlights</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Curious Learner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Problem Solver</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <span className="text-muted-foreground">Gaming Enthusiast</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Tech Innovator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;