import ImageText from "@/components/ReuseComponents/ImageText";

import { about3 } from "@/utils/ImgUtils";
import TextMovingAnimation from "./AminamtionPages/TextMovingAnimation";

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
    <div>
      <section>
        <div className="mt-20 mb-10">
          <ImageText {...data[0]} />
        </div>
        <TextMovingAnimation
          spanText="Our Trusted Clients Say."
          mainText="Our Trusted Clients Say."
        />
      </section>
    </div>
  );
};

export default AboutUs;
