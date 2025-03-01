import { ArrowUpRight, CircleDot } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { asset2 } from "@/utils/ImgUtils";

const ImageText = ({ img, heading, para, aboutBtn, btnLink }) => {
  return (
    <section className="w-full container flex flex-col lg:flex-row gap-10 lg:gap-20 text-[var(--color-black)]">
      {/* Image Section */}
      <div>
        <img src={img} alt="About Us" className="w-full h-auto" />
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-bold text-3xl lg:text-5xl lg:mb-10"
        >
          {heading}
        </motion.h2>

        <p className="pt-5 text-[var(--gray-color)] mb-10 ">{para}</p>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4">
          <ul className="flex-wrap">
            <li className="flex items-center gap-2 pb-3">
              <CircleDot />
              Fast & Hassle-Free BIS Certification
            </li>
            <li className="flex items-center gap-2 pb-3">
              <CircleDot /> Stay Compliant, Stay Ahead
            </li>
            <li className="flex items-center gap-2 pb-3">
              <CircleDot /> 100% Reliable & Transparent Process
            </li>
          </ul>
          <ul className="flex-wrap">
            <li className="flex items-center gap-2 pb-3">
              <CircleDot /> Quick & Smooth Approvals.
            </li>
            <li className="flex items-center gap-2 pb-3">
              <CircleDot /> Guaranteed Compliance, Minimum Effort
            </li>
          </ul>
        </div>

        {/* Button Section */}
        <div className="flex items-center gap-5 mt-5 relative">
          {aboutBtn && <h2 className="font-semibold">{aboutBtn}</h2>}
          {btnLink && (
            <Link
              to={btnLink}
              className="group border border-[var(--color-black)] rounded-full w-16 h-16 lg:w-24 lg:h-24 flex justify-center items-center transition-transform transform hover:scale-125 hover:bg-[var(--color-black)]"
              aria-label="Know More"
            >
              <ArrowUpRight className="text-[var(--color-black)] transition-colors group-hover:text-white" />
            </Link>
          )}
          <img
            className="absolute right-[-10rem] top-[-22rem] hidden lg:block"
            src={asset2}
            alt="Decorative"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageText;
