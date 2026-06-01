import { motion } from 'motion/react';

export function PageLoader() {
  return (
    <div className="min-h-screen radiant-bg flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 border-2 border-accent/20 border-t-accent rounded-full"
      />
    </div>
  );
}
