import { about2 } from "@/utils/ImgUtils";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/varients";
import TextMovingAnimation from "../AminamtionPages/TextMovingAnimation";

const HeroAbout = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10 pb-20">
      <div className="pb-10">
        <TextMovingAnimation
          spanText={"Empower Your Business:"}
          mainText={
            "Your Trusted Consultant for Legal Business Compliance Solutions."
          }
        />
      </div>

      {/* ----- About ----- */}

      <section className="w-full  container flex  flex-col lg:flex-row  gap-10 lg:gap-20 text-[var(--color-black)] ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={about2} alt="About Us" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/2  "
        >
          <h2 className="font-bold text-3xl lg:text-5xl mb-4">Who we are ?</h2>

          <p className="pt-5 text-[var(--gray-color)]  lg:mb-10">
            MCS Technology Inc is a New Delhi (India) based certified service
            provider, Our services are praised for their reasonable charges and
            clarification of procedure & policies before starting the work. We
            provide these services to a broad array of companies located all
            across the world. Further, our ethical trade practices and excellent
            track records have made us stand ahead of the counterparts.
          </p>
          <div className="flex items-center gap-5 mt-5">
            <h2>Know More</h2>
            <Link
              to="/about" // Replace with your actual route
              className="group border border-[var(--color-black)] rounded-full w-16 h-16 lg:w-24 lg:h-24 flex justify-center items-center transition-all ease-out transform hover:scale-150 lg:hover:scale-125 hover:bg-[var(--color-black)]"
              aria-label="Know More"
            >
              <ArrowUpRight className="text-[var(--color-black)] transition-colors group-hover:text-white" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroAbout;
