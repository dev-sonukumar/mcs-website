import { motion } from "framer-motion";

import { Star } from "lucide-react"; // Replace with your actual Star component
import { asset } from "@/utils/ImgUtils";

const About = () => {
  return (
    <div className="ml-32 mb-12">
      <div className=" flex justify-center items-center ">
        <motion.div
          className="absolute"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
        >
          <div className="relative w-52 h-52 border-2 border-gray-300 rounded-full flex justify-center items-center">
            <img
              src={asset}
              className=" bg-white rounded-full object-cover shadow-lg"
            />
          </div>
        </motion.div>
        <Star className=" text-yellow-500 w-6 h-6  z-40" />
      </div>
    </div>
  );
};

export default About;
