import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dotRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      dotRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover listeners to interactive elements
    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], input, textarea, .card-hover, .neon-border');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleElementHover);
        el.addEventListener('mouseleave', handleElementLeave);
      });
    };

    // Initial setup + MutationObserver for dynamically added elements
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div className="custom-cursor" style={{ opacity: isVisible ? 1 : 0 }}>
      {/* Inner dot - follows cursor exactly */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x,
          y: position.y,
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
        }}
        transition={{
          x: { duration: 0 },
          y: { duration: 0 },
          width: { duration: 0.2 },
          height: { duration: 0.2 },
        }}
        style={{
          background: isHovering ? 'hsl(var(--accent))' : 'hsl(var(--primary-glow))',
        }}
      />

      {/* Outer ring - follows with slight delay */}
      <motion.div
        className="cursor-ring"
        animate={{
          x: position.x,
          y: position.y,
          width: isHovering ? 50 : 36,
          height: isHovering ? 50 : 36,
          borderColor: isHovering ? 'hsl(var(--accent) / 0.6)' : 'hsl(var(--primary) / 0.4)',
        }}
        transition={{
          x: { type: 'spring', stiffness: 150, damping: 15, mass: 0.2 },
          y: { type: 'spring', stiffness: 150, damping: 15, mass: 0.2 },
          width: { duration: 0.3 },
          height: { duration: 0.3 },
        }}
      />
    </div>
  );
};

export default CustomCursor;
