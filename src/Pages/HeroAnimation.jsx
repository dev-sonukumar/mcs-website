import { motion } from "framer-motion";

import { Star } from "lucide-react"; // Replace with your actual Star component
import { asset } from "@/utils/ImgUtils";

const About = () => {
  return (
    <div className=" ml-52 mt-10 lg:mt-0 lg:ml-32 mb-12 bdr">
      <div className=" flex justify-center items-center bdr ">
        <motion.div
          className="absolute"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
        >
          <div className="w-40 h-40 lg:w-56 lg:h-56 border-2 border-gray-300 rounded-full flex justify-center items-center">
            <img
              src={asset}
              className=" w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-full object-cover shadow-lg"
            />
          </div>
        </motion.div>
        <Star className=" text-yellow-500  w-6 h-6  z-40" />
      </div>
    </div>
  );
};

export default About;
