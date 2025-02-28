import {
  motion,
  useMotionValue,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";


export default function ExploreServices() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const controls = useAnimation();
  const { scrollY } = useScroll(); // Get scroll position

  const [isHovered, setIsHovered] = useState(false);

  // Moves div from 0 to -100vw (fully out of the screen)
  const scrollX = useTransform(scrollY, [0, 400], ["0%", "-100vw"]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const div = document.getElementById("explore-services");
      if (!div) return;

      const { left, top, width, height } = div.getBoundingClientRect();
      const { clientX, clientY } = event;

      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
      );

      if (distance < width / 2 + 50) {
        // If cursor is near, move slightly
        const moveX = ((clientX - left) / width - 0.5) * 20;
        const moveY = ((clientY - top) / height - 0.5) * 20;
        x.set(moveX);
        y.set(moveY);
      } else {
        // Reset position smoothly
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
      style={{ x, y, scale, translateX: scrollX }}
      animate={controls}
      onMouseEnter={() => {
        setIsHovered(true);
        scale.set(1.08);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Liquid Fill Background (Diagonal Fill Effect) */}
      <motion.div
        className="absolute inset-0 bg-[var(--gray-color5)] rounded-full origin-top-right"
        initial={{ width: "0%", height: "0%" }}
        animate={{
          width: isHovered ? "100%" : "0%",
          height: isHovered ? "100%" : "0%",
        }} // Expanding diagonally
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Text Layer */}
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-lg font-bold text-center flex items-center gap-2 z-10 text-[var(--gray-color4)]">
          Explore Our Services
        </h2>
        <ArrowUpRight className="text-[var(--gray-color4)] z-10" />
      </div>
    </motion.div>
  );
}
