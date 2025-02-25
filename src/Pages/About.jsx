import { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const textRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const direction = useRef(-1); // -1 for left to right, 1 for right to left
  const speed = useRef(60); // Default Speed
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Duplicate the text to create an infinite scrolling effect
    const text = textRef.current;
    if (!text) return;

    text.innerHTML += " " + text.innerHTML;

    const animateText = () => {
      gsap.to(textRef.current, {
        x: direction.current === 1 ? "0%" : "-50%", // Ensures smooth infinite looping in both directions
        duration: speed.current, // Speed control
        ease: "linear",
        repeat: -1, // Infinite loop
      });
    };

    animateText();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY.current;

      if (scrollDiff > 0) {
        direction.current = 1;
      } else if (scrollDiff < 0) {
        direction.current = -1;
      }

      speed.current = 30;

      gsap.killTweensOf(textRef.current);
      animateText();

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        speed.current = 150;
        gsap.killTweensOf(textRef.current);
        animateText();
      }, 1000);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      gsap.killTweensOf(textRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <div className="w-full flex">
        <h1
          ref={textRef}
          className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[120px] font-black text-[var(--gray-color4)] whitespace-nowrap"
        >
          Empower Your Business: Your Trusted Consultant for Legal Business
          Compliance Solutions.
        </h1>
      </div>
    </div>
  );
};

export default About;
