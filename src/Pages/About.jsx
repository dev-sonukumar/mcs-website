import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about1 } from "@/utils/ImgUtils";

const Page = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;
  useEffect(() => {
    requestAnimationFrame(animation);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.2,
        onUpdate: (e) => (direction = e.direction * 1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -50) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -50;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.07 * direction;
    requestAnimationFrame(animation);
  };
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10 ">
      <div className="">
        <div className="w-full flex slider">
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
        <section className="container pt-10 ">
          <img src={about1} alt="" srcset="" />
        </section>
      </div>
    </div>
  );
};

export default Page;
