import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useMousePosition } from '@/hooks/useMousePosition';
import profilePicture from '@/assets/profile-picture.png';

const roles = ['Tech Enthusiast', 'AI & Data Science Engineer', 'Innovator', 'Problem Solver'];

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { normalizedX, normalizedY } = useMousePosition(containerRef as React.RefObject<HTMLElement>);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const staggerChild = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated orbs with mouse parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]"
          animate={{
            x: normalizedX * 30,
            y: normalizedY * 30,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[80px]"
          animate={{
            x: normalizedX * -20,
            y: normalizedY * -20,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-glow/5 rounded-full blur-[60px]"
          animate={{
            x: normalizedX * 15,
            y: normalizedY * 15,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? 'hsl(var(--primary) / 0.4)' : 'hsl(var(--accent) / 0.3)',
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -(20 + Math.random() * 40), 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting tag */}
            <motion.div variants={staggerChild}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase border border-primary/30 text-primary bg-primary/5">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div className="space-y-4" variants={staggerChild}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                Hi, I'm{' '}
                <span className="gradient-text relative">
                  Kishan S S
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
              </h1>

              {/* Typing role */}
              <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium h-[1.5em]">
                <span className="gradient-text">{displayText}</span>
                <span className="typing-cursor" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
              variants={staggerChild}
            >
              I'm a final-year CSE student specializing in AI & Data Science. A curious learner and
              problem-solver, passionate about engineering impactful solutions, innovating with
              technology, and exploring data. I stay ahead of tech trends, love to game, and enjoy
              creating new possibilities through technology.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              variants={staggerChild}
            >
              <motion.a
                href="/Kishan's_Resume.pdf"
                download="Kishan-Resume.pdf"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button variant="hero" size="xl" className="group">
                  <Download className="mr-2 group-hover:animate-bounce-subtle" size={20} />
                  Download Resume
                </Button>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button variant="neon" size="xl" onClick={scrollToAbout}>
                  View My Work
                  <ArrowDown className="ml-2 animate-bounce-subtle" size={20} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 pt-4"
              variants={staggerChild}
            >
              {[
                { href: 'https://linkedin.com/in/kishanss1804', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://github.com/kishanss4', icon: Github, label: 'GitHub' },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:shadow-glow group"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon
                    className="text-primary group-hover:text-accent transition-colors"
                    size={22}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              {/* Glowing background */}
              <motion.div
                className="absolute -inset-4 rounded-full opacity-20 blur-2xl"
                style={{ background: 'var(--gradient-primary)' }}
                animate={{
                  opacity: [0.15, 0.25, 0.15],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Morphing border ring */}
              <motion.div
                className="absolute -inset-2"
                style={{
                  background: 'var(--gradient-primary)',
                  padding: '2px',
                }}
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                    '30% 60% 70% 40% / 50% 60% 30% 60%',
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-full h-full bg-background" style={{ borderRadius: 'inherit' }} />
              </motion.div>

              {/* Profile image container */}
              <motion.div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/20 shadow-glow"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={profilePicture}
                  alt="Kishan S S - AI & Data Science Engineer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Floating elements */}
              {[
                { top: '-1rem', right: '-1rem', size: 'w-8 h-8', color: 'bg-accent', delay: 0 },
                { bottom: '-1.5rem', left: '-1.5rem', size: 'w-6 h-6', color: 'bg-primary', delay: 1 },
                { top: '25%', right: '-2rem', size: 'w-4 h-4', color: 'bg-primary-glow', delay: 2 },
              ].map((el, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${el.size} ${el.color} rounded-full`}
                  style={{
                    top: el.top,
                    right: el.right,
                    bottom: el.bottom,
                    left: el.left,
                  } as React.CSSProperties}
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: el.delay,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center cursor-pointer"
            onClick={scrollToAbout}
            whileHover={{ borderColor: 'hsl(var(--primary))' }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1 h-2.5 bg-primary rounded-full mt-2"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;