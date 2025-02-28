import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about2, asset2 } from "@/utils/ImgUtils";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Page = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;
  let speedFactor = 0.02; // Base speed (increased for rest state)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    requestAnimationFrame(animation);

    ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      scrub: 0.2,
      onUpdate: (e) => {
        direction = e.direction;
        const velocity = Math.abs(e.getVelocity());
        speedFactor = Math.max(0.02, velocity / 5000); // Adjust speed with min limit
      },
    });
  }, []);

  const animation = () => {
    if (xPercent <= -50) xPercent = 0;
    if (xPercent > 0) xPercent = -50;

    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });

    xPercent += speedFactor * direction; // Apply dynamic speed
    requestAnimationFrame(animation);
  };

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <div>
        <div
          ref={slider}
          className="w-full overflow-x-hidden flex slider mb-12"
        >
          <h1
            ref={firstText}
            className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[120px] font-black text-[var(--gray-color4)] whitespace-nowrap"
          >
            Empower Your Business: Your Trusted Consultant for Legal Business
            Compliance Solutions.
          </h1>
          <h1
            ref={secondText}
            className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[120px] font-black text-[var(--gray-color4)] whitespace-nowrap"
          >
            Empower Your Business: Your Trusted Consultant for Legal Business
            Compliance Solutions.
          </h1>
        </div>

        {/* ----- About ----- */}

        <section className="w-full  container flex  flex-col lg:flex-row  gap-10 lg:gap-20 text-[var(--color-black)] ">
          <div>
            <img src={about2} alt="About Us" />
          </div>
          <div className="lg:w-1/2  ">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-bold text-3xl lg:text-5xl lg:mb-10"
            >
              Who we are ?
            </motion.h2>

            <p className="pt-5 text-[var(--gray-color)]  lg:mb-10">
              MCS Technology Inc is a New Delhi (India) based certified service
              provider, Our services are praised for their reasonable charges
              and clarification of procedure & policies before starting the
              work. We provide these services to a broad array of companies
              located all across the world. Further, our ethical trade practices
              and excellent track records have made us stand ahead of the
              counterparts.
            </p>
            <div className="flex items-center gap-5 mt-5">
              <h2>Know More</h2>
              <Link
                to="/" // Replace with your actual route
                className="group border border-[var(--color-black)] rounded-full w-16 h-16 lg:w-24 lg:h-24 flex justify-center items-center transition-all ease-out transform hover:scale-150 lg:hover:scale-125 hover:bg-[var(--color-black)]"
                aria-label="Know More"
              >
                <ArrowUpRight className="text-[var(--color-black)] transition-colors group-hover:text-white" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
