import { Phone } from "lucide-react";
import { asset18, bg } from "../utils/ImgUtils";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full mt-10 md:mt-0  ">
        <div className="container mx-auto md:h-[50vh]  lg:h-[60vh]  flex justify-center items-center ">
          <div className=" px-4 sm:px-6 lg:px-8 w-[90%] ">
            <>
              {/* <img src={bg} className=" absolute bg-right" /> */}

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-400 mb-4 hover:text-[var(--main2-color)] transition-colors duration-300 ">
                Best <span className="text-[var(--main-color)]">BIS, EPR</span>{" "}
                Certification Provider Company in Delhi, India
              </h1>
              <h4 className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[60rem]">
                We are an Indian firm specializing in{" "}
                <span className="text-[var(--main-color)]">
                  BIS, LMPC, EPR Certificate
                </span>
                , and{" "}
                <span className="text-[var(--main-color)]">
                  various other certifications
                </span>{" "}
                that will help you enter or sell in the Indian market at a
                reasonable price. Our expert team ensures a smooth and
                hassle-free certification process, making compliance quick and
                cost-effective.
              </h4>

              {/* Call Button */}
              <div className="inline-block h-[50px] mt-10">
                <a href="tel:+917065995901">
                  <button
                    aria-label="Call Now"
                    className="bg-[var(--main-color)] p-3 shadow rounded-xl flex items-center text-white hover:bg-gray-300 hover:text-[var(--color5)] transition-all duration-200 font-bold animate-bounce"
                  >
                    <Phone
                      className="mr-2 transition-transform duration-200"
                      size={16}
                    />
                    +91-7065995901
                  </button>
                </a>
              </div>
              <img src={asset18} className="lg:absolute " />
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
