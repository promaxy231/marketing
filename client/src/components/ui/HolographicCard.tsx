import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HolographicCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function HolographicCard({ className, children, delay = 0 }: HolographicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md p-6",
        "hover:border-primary/50 hover:shadow-[0_0_30px_-10px_var(--color-primary)] transition-all duration-500 group",
        className
      )}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 rounded-tl-lg group-hover:border-primary/80 transition-colors" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 rounded-tr-lg group-hover:border-primary/80 transition-colors" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 rounded-bl-lg group-hover:border-primary/80 transition-colors" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 rounded-br-lg group-hover:border-primary/80 transition-colors" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent translate-y-[-100%] group-hover:animate-[scan_2s_linear_infinite] pointer-events-none" />
      
      {children}
    </motion.div>
  );
}
