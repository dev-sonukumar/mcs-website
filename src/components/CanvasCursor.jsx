import { useEffect, useState } from "react";

const CanvasCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll("a, button, .expand-hover");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  return (
    <div
      className={`expanding-cursor ${hovered ? "hovered" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CanvasCursor;
