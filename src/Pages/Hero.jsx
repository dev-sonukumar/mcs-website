import { Phone } from "lucide-react";
import { asset, bg } from "../utils/ImgUtils";
import animationImg from "../../public/assets/animation/animation0.json";

import { motion } from "framer-motion";

const Hero = () => {
  const animations = [animationImg]; // ✅ Correct

  // Check if any animation is missing
  if (
    animations.some(
      (animationImg) => !animationImg || Object.keys(animationImg).length === 0
    )
  ) {
    return (
      <div className="h-screen flex  items-center justify-center bg-gray-900 text-white">
        ❌ One or more animations not found!
      </div>
    );
  }

  return (
    <section
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-screen  flex justify-between items-center">
        <div className="container flex flex-col lg:flex-row justify-center items-center ">
          <div className="px-4 sm:px-6 lg:px-0 w-full ">
            <>
              {/* <img src={asset2} className=" absolute bg-right z-50" /> */}

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-400 mb-4  text-white  transition-colors duration-300 ">
                Best consulting firm for{" "}
                <span className="text-red-400">BIS, EPR </span> and various
                other certifications in Delhi, India.
              </h1>
              <p className="text-sm sm:text-base md:text-lg xl:text-2xl 2xl:text-3xl text-gray-100 max-w-[60rem]">
                We are an Indian firm specializing in{" "}
                <span className="text-red-400">
                  BIS, LMPC, EPR Certificate , and{" "}
                </span>
                <span className="text-red-400">
                  various other certifications
                </span>{" "}
                that will help you enter or sell in the Indian market at a
                reasonable price. Our expert team ensures a smooth and
                hassle-free certification process, making compliance quick and
                cost-effective.
              </p>

              {/* -- Call Button --*/}
              <div className="inline-block h-[50px] mt-10">
                <a href="tel:+917065995901">
                  <button
                    aria-label="Call Now"
                    className="bg-[var(--gray-color5)] p-3 shadow rounded-xl flex items-center  hover:bg-[var(--gray-color4)] text-[var(--black-color)] transition-all  font-bold animate-bounce"
                  >
                    <Phone
                      className="mr-2 transition-transform duration-200"
                      size={16}
                    />
                    +91-7065995901
                  </button>
                </a>
              </div>
              {/* <img src={asset18} className="lg:absolute " /> */}
            </>
          </div>
          <div className="w-1/2 ml-0">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <motion.div
                className="absolute text-xl font-bold text-blue-600"
                animate={{
                  rotate: [0, 360], // Full rotation
                }}
                transition={{
                  repeat: Infinity, // Infinite loop
                  duration: 7, // Speed of rotation
                  ease: "linear",
                }}
              >
                <div className=" ">
                  <img src={asset} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
