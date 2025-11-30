import { motion } from "framer-motion";

export function FloatingElements() {
  const floatingVariants = {
    animate: (custom: number) => ({
      y: [0, -30, 0],
      rotate: [0, 360],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 6 + custom,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1],
        delay: custom * 0.2
      }
    })
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatingVariants}
          animate="animate"
          className="absolute w-2 h-2 bg-amber-400/20 rounded-full blur-sm"
          style={{
            left: `${(i * 16.6) + 10}%`,
            top: `${(i * 15) + 20}%`
          }}
        />
      ))}
    </div>
  );
}
