import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null); // To store the GSAP animation instance
  const lastScrollY = useRef(window.scrollY); // Track the last scroll position
  const direction = useRef(1); // 1 for left-to-right (default), -1 for right-to-left
  const baseSpeed = useRef(150); // Base speed (lower number = faster)
  const scrollSpeedMultiplier = useRef(1); // Multiplier for scroll-based speed adjustment

  useEffect(() => {
    const marquee = marqueeRef.current;

    // Duplicate the content for seamless looping
    marquee.innerHTML += marquee.innerHTML;

    // Calculate the width of the marquee content
    const marqueeWidth = marquee.scrollWidth / 2;

    // Function to create or update the GSAP animation
    const updateAnimation = () => {
      if (animationRef.current) {
        animationRef.current.kill(); // Kill the existing animation
      }

      // Calculate the adjusted speed based on scroll direction and multiplier
      const adjustedSpeed = baseSpeed.current / scrollSpeedMultiplier.current;

      // Create a new GSAP animation with updated direction and speed
      animationRef.current = gsap.to(marquee, {
        x: direction.current === 1 ? -marqueeWidth : 0, // Move left or right based on direction
        duration: adjustedSpeed,
        ease: "none", // Linear movement
        repeat: -1, // Infinite loop
      });
    };

    // ScrollTrigger to detect when the marquee is visible
    ScrollTrigger.create({
      trigger: marquee, // Element to trigger on
      start: "top bottom", // When the top of the marquee hits the bottom of the viewport
      end: "bottom top", // When the bottom of the marquee hits the top of the viewport
      onEnter: () => {
        // Start the animation when the marquee enters the viewport
        updateAnimation();
      },
      onLeave: () => {
        // Kill the animation when the marquee leaves the viewport
        if (animationRef.current) {
          animationRef.current.kill();
        }
      },
      onEnterBack: () => {
        // Restart the animation when the marquee re-enters the viewport
        updateAnimation();
      },
      onLeaveBack: () => {
        // Kill the animation when the marquee leaves the viewport again
        if (animationRef.current) {
          animationRef.current.kill();
        }
      },
    });

    // Handle scroll events to adjust direction and speed
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY.current;

      // Determine direction based on scroll
      if (scrollDiff > 0) {
        direction.current = 0.1; // Scroll down: left-to-right
        scrollSpeedMultiplier.current = 0.1; // Faster speed when scrolling down
      } else if (scrollDiff < 0) {
        direction.current = -1; // Scroll up: right-to-left
        scrollSpeedMultiplier.current = 0.5; // Slower speed when scrolling up
      }

      // Update the animation with new direction and speed
      updateAnimation();

      // Reset speed after a short delay (when scrolling stops)
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        scrollSpeedMultiplier.current = 0.1; // Reset to base speed
        updateAnimation();
      }, 100);

      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) {
        animationRef.current.kill(); // Kill the animation on unmount
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTrigger instances
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10 flex">
      <div
        className="whitespace-nowrap flex text-gray-700 text-[50px] sm:text-[70px] md:text-[90px] lg:text-[120px] font-black"
        ref={marqueeRef}
      >
        Empower Your Business: Your Trusted Consultant for Legal Business
        Compliance Solutions.
      </div>
    </div>
  );
};

export default About;
