import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 300, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    setEnabled(media.matches);
    const handleMedia = (e: MediaQueryListEvent) => setEnabled(e.matches);
    media.addEventListener('change', handleMedia);

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      setHovering(Boolean(target?.closest('a, button')));
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);

    return () => {
      media.removeEventListener('change', handleMedia);
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 z-[9998] w-2 h-2 rounded-full pointer-events-none mix-blend-difference ${hovering ? 'bg-accent' : 'bg-white'}`}
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className={`fixed top-0 left-0 z-[9997] w-8 h-8 rounded-full border pointer-events-none ${hovering ? 'border-accent scale-125' : 'border-white/60 scale-100'}`}
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}
