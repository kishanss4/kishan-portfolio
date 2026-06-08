import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Footer = () => {
  const { ref: footerRef, isInView: footerInView } = useScrollReveal({ threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socials = [
    { href: 'https://linkedin.com/in/kishanss1804', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/kishanss4', icon: Github, label: 'GitHub' },
    { href: 'mailto:kishanss1804@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="relative overflow-hidden bg-background border-t border-border/30">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      {/* Gradient line separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div ref={footerRef} className="container mx-auto px-6 py-10 md:py-12 relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left: Brand & Description */}
          <div className="text-center md:text-left">
            <motion.h3
              className="text-xl md:text-2xl font-bold gradient-text mb-1"
              whileHover={{ scale: 1.02 }}
            >
              Kishan S S
            </motion.h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              AI & Data Science Engineer
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Building the future with technology
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="p-2.5 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:shadow-glow group"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={footerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-primary group-hover:text-accent transition-colors" size={17} />
                </motion.a>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground">
              Let's connect and build something amazing together
            </p>
          </div>

          {/* Right: Back to Top */}
          <div className="text-center md:text-right">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                variant="neon"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="mr-2 group-hover:-translate-y-1 transition-transform duration-300" size={15} />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-6 border-t border-border/30"
          initial={{ opacity: 0 }}
          animate={footerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Copyright */}
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>© {currentYear} Built by </span>
              <span className="text-primary font-medium">Kishan SS</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
              <span>Built with React + TypeScript</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span>Styled with Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;