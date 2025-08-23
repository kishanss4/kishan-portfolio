import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-background border-t border-border/50">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Brand & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Kishan S S
            </h3>
            <p className="text-muted-foreground text-sm">
              AI & Data Science Engineer
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Building the future with technology
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <a 
                href="https://linkedin.com/in/kishanss1804" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors hover:shadow-glow group"
              >
                <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={18} />
              </a>
              <a 
                href="https://github.com/kishanss4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors hover:shadow-glow group"
              >
                <Github className="text-primary group-hover:scale-110 transition-transform" size={18} />
              </a>
              <a 
                href="mailto:kishanss1804@gmail.com"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors hover:shadow-glow group"
              >
                <Mail className="text-primary group-hover:scale-110 transition-transform" size={18} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Let's connect and build something amazing together
            </p>
          </div>

          {/* Right: Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="neon"
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="mr-2 group-hover:-translate-y-1 transition-transform" size={16} />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} Kishan S S. Made with</span>
              <Heart className="text-red-500 animate-pulse" size={14} />
              <span>and lots of</span>
              <span className="text-primary">code</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>Built with React + TypeScript</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span>Styled with Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;