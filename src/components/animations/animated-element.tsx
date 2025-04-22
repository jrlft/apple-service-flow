
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  threshold?: number;
  duration?: number;
}

export function AnimatedElement({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.1,
  duration = 0.5,
}: AnimatedElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: 40, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case "down":
        return {
          hidden: { y: -40, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case "left":
        return {
          hidden: { x: 40, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case "right":
        return {
          hidden: { x: -40, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={getDirectionVariants()}
      transition={{ duration: duration, delay: delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
