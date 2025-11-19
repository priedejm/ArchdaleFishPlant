import React from "react";
import { motion } from "framer-motion";

interface BubbleProps {
  size: number;
  duration: number;
  delay: number;
  left: string;
  opacity: number;
}

const Bubble: React.FC<BubbleProps> = ({ size, duration, delay, left, opacity }) => {
  return (
    <motion.div
      className="bubble"
      style={{
        width: size,
        height: size,
        left,
        bottom: -size,
        opacity,
      }}
      animate={{
        y: [0, -window.innerHeight - size],
        x: [0, Math.random() * 50 - 25],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export const BubbleBackground: React.FC = () => {
  const bubbles = React.useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 80 + 30,
      duration: Math.random() * 15 + 8,
      delay: Math.random() * 10,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.25,  // Slightly increased base opacity
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          size={bubble.size}
          duration={bubble.duration}
          delay={bubble.delay}
          left={bubble.left}
          opacity={bubble.opacity}
        />
      ))}
    </div>
  );
};