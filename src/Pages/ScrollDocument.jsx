import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import { FaSearch, FaCog, FaCheckCircle, FaThumbsUp } from "react-icons/fa";
import animation1 from "../../public/assets/animation/animation1.json";
import animation3 from "../../public/assets/animation/animation3.json";
import animation4 from "../../public/assets/animation/animation4.json";

const Scroll3DEffect = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const animations = [
    {
      animation: animation1,
      title: "Identify product",
      icon: <FaSearch />,
    },
    {
      animation: animation1,
      title: "prepare documents",
      icon: <FaCog />,
    },
    {
      animation: animation3,
      title: "submit an application",
      icon: <FaCheckCircle />,
    },
    {
      animation: animation4,
      title: "testing and inspection",
      icon: <FaThumbsUp />,
    },
    {
      animation: animation4,
      title: "successful verification",
      icon: <FaThumbsUp />,
    },
    {
      animation: animation4,
      title: "Your Licence",
      icon: <FaThumbsUp />,
    },
  ];

  return (
    <div
      className="h-[500vh] flex flex-col items-center justify-center  space-y-48"
      ref={ref}
    >
      {animations.map((item, index) => {
        const animRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: animRef,
          offset: ["start center", "end center"],
        });

        const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
        const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
        const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

        return (
          <motion.div
            key={index}
            ref={animRef}
            style={{ rotateX, rotateY, scale, opacity }}
            className="w-full h-[35rem] flex flex-col items-center justify-center"
          >
            <div className="flex justify-center items-center container">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  Key steps in the certification process:
                </h1>

                <h2 className="text-7xl font-extrabold mb-4">
                  {item.title} {item.icon}
                </h2>
              </div>
              <div>
                <Lottie
                  animationData={item.animation}
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Scroll3DEffect;
