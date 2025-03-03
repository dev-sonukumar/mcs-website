import ImageText from "@/components/ReuseComponents/ImageText";
import { motion } from "framer-motion";

import { about3 } from "@/utils/ImgUtils";
import TextMovingAnimation from "./AminamtionPages/TextMovingAnimation";
import { fadeIn } from "@/utils/varients";

const data = [
  {
    heading: "Why choose McsTechnology?",
    para: "We craft digital solutions that empower businesses on their journey to success. Through software development and digital marketing, we deliver tailored strategies that maximize ROI, integrate seamlessly with your systems, and drive success with precision and dedication.",
    img: about3,
    aboutBtn: "Contact Us",
    btnLink: "/contact",
  },
];

const AboutUs = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <section className="mt-20 mb-10 overflow-hidden">
        <div>
          <ImageText {...data[0]} />
        </div>
        <TextMovingAnimation
          spanText="Our Trusted Clients Say."
          mainText="Our Trusted Clients Say."
        />
      </section>
    </motion.div>
  );
};

export default AboutUs;
