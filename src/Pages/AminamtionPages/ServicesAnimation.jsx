import { motion, useMotionValue, useAnimation } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleArrowOutUpRight,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ExploreServices() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const div = document.getElementById("explore-services");
      if (!div) return;

      const { left, top, width, height } = div.getBoundingClientRect();
      const { clientX, clientY } = event;

      // Calculate distance from the div's center
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
      );

      if (distance < width / 2 + 40) {
        // If cursor is inside or near (20px outside), move the div
        setIsNear(true);
        const moveX = ((clientX - left) / width - 0.5) * 30;
        const moveY = ((clientY - top) / height - 0.5) * 30;
        x.set(moveX);
        y.set(moveY);
      } else {
        // If cursor is too far, reset the position smoothly
        setIsNear(false);
        controls.start({ x: 0, y: 0, scale: 1 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, controls]);

  return (
    <motion.div
      id="explore-services"
      className="w-40 h-40 border rounded-full flex justify-center items-center overflow-hidden transition-all ease-in-out relative"
      style={{ x, y, scale }}
      animate={controls}
      onMouseEnter={() => {
        setIsHovered(true);
        scale.set(1.05);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {/* Liquid Fill Background (Diagonal Fill Effect) */}
      <motion.div
        className="absolute inset-0 bg-[var(--gray-color5)] rounded-full origin-top-right"
        initial={{ width: "0%", height: "0%" }}
        animate={{
          width: isHovered ? "100%" : "0%",
          height: isHovered ? "100%" : "0%",
        }} // Expanding diagonally
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Text Layer */}
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-lg font-bold text-center flex items-center gap-2 z-10 text-[var(--gray-color4)]">
          Explore Our Services
        </h2>
        <ArrowUpRight className="text-[var(--gray-color4)]  z-10" />
      </div>
    </motion.div>
  );
}
