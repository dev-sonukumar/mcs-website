import { about2, } from "@/utils/ImgUtils";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import TextMovingAnimation from "./AminamtionPages/TextMovingAnimation";

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
        </div>
      </section>
    </div>
  );
};

export default HeroAbout;
