import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SectionDivider = () => {
  const { ref, isInView } = useScrollReveal({ threshold: 0.5 });

  return (
    <div ref={ref} className="relative py-4 overflow-hidden">
      <motion.div
        className="h-px mx-auto"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.4), hsl(var(--primary) / 0.3), transparent)',
          maxWidth: '80%',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* Center dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.5, type: 'spring', stiffness: 200 }}
      />
    </div>
  );
};

export default SectionDivider;
