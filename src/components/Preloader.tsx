import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'revealing' | 'done'>('loading');

  const letters = ['K', 'I', 'S', 'H', 'A', 'N'];
  const subtitle = 'AI & Data Science Engineer';

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setPhase('revealing');
          setTimeout(() => {
            setPhase('done');
            setTimeout(onComplete, 600);
          }, 800);
          return 100;
        }
        // Non-linear progress for more dramatic feel
        const increment = prev < 30 ? 3 : prev < 70 ? 2 : prev < 90 ? 1.5 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ 
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          initial={{ clipPath: 'circle(150% at 50% 50%)' }}
        >
          {/* Aurora background effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
              style={{
                background: 'radial-gradient(circle, hsl(221 83% 53% / 0.15), transparent 70%)',
                top: '20%',
                left: '30%',
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
              style={{
                background: 'radial-gradient(circle, hsl(195 100% 65% / 0.12), transparent 70%)',
                bottom: '20%',
                right: '20%',
              }}
              animate={{
                x: [0, -40, 30, 0],
                y: [0, 30, -20, 0],
                scale: [1, 0.9, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="relative z-10 text-center space-y-8">
            {/* Animated Logo Letters */}
            <div className="relative">
              <div className="flex items-center justify-center gap-1 md:gap-2">
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-5xl md:text-7xl font-bold gradient-text"
                    initial={{ opacity: 0, y: 40, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Subtitle */}
              <motion.p
                className="text-muted-foreground text-sm md:text-base mt-3 tracking-[0.3em] uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {subtitle}
              </motion.p>

              {/* Glowing backdrop */}
              <motion.div
                className="absolute -inset-8 rounded-full blur-3xl -z-10"
                style={{ background: 'var(--gradient-primary)', opacity: 0.1 }}
                animate={{
                  opacity: [0.08, 0.15, 0.08],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Progress Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Progress Bar */}
              <div className="relative w-64 md:w-80 h-1 bg-secondary/50 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    background: 'var(--gradient-primary)',
                    width: `${progress}%`,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-in-right" />
                </motion.div>
              </div>

              {/* Progress Text */}
              <motion.p
                className="text-muted-foreground text-xs tracking-widest font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {progress < 100 ? (
                  <span className="tabular-nums">{Math.round(progress)}%</span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    WELCOME
                  </motion.span>
                )}
              </motion.p>

              {/* Animated dots */}
              <div className="flex items-center justify-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: i === 0 ? 'hsl(var(--primary))' : i === 1 ? 'hsl(var(--accent))' : 'hsl(var(--primary-glow))',
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: i % 3 === 0 ? 'hsl(var(--primary))' : i % 3 === 1 ? 'hsl(var(--accent))' : 'hsl(var(--primary-glow))',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;