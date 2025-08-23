import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.png';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Kishan S S</span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground font-medium">
                <span className="gradient-text">Tech Enthusiast</span> |{' '}
                <span className="gradient-text">AI & Data Science Engineer</span> |{' '}
                <span className="gradient-text">Innovator</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I'm a final-year CSE student specializing in AI & Data Science. A curious learner and 
              problem-solver, passionate about engineering impactful solutions, innovating with 
              technology, and exploring data. I stay ahead of tech trends, love to game, and enjoy 
              creating new possibilities through technology.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="hero" size="xl" className="group">
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download Resume
              </Button>
              <Button variant="neon" size="xl" onClick={scrollToAbout}>
                View My Work
                <ArrowDown className="ml-2 animate-bounce" size={20} />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-8">
              <a 
                href="https://linkedin.com/in/kishanss1804" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors hover:shadow-glow group"
              >
                <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={24} />
              </a>
              <a 
                href="https://github.com/kishanss4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors hover:shadow-glow group"
              >
                <Github className="text-primary group-hover:scale-110 transition-transform" size={24} />
              </a>
              <a 
                href="mailto:kishanss1804@gmail.com"
                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors hover:shadow-glow group"
              >
                <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors shadow-glow">
                <img
                  src={profilePicture}
                  alt="Kishan S S - AI & Data Science Engineer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -right-8 w-4 h-4 bg-primary-glow rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;