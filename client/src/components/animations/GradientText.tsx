import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: ReactNode;
  animate?: boolean;
}

export function GradientText({ children, animate = true }: GradientTextProps) {
  if (!animate) {
    return <span className="text-gradient">{children}</span>;
  }

  return (
    <motion.span
      className="text-gradient inline-block"
      animate={{
        backgroundPosition: ['0%', '100%', '0%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {children}
    </motion.span>
  );
}
