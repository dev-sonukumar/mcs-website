import ScrollDocument from "@/Pages/ScrollDocument";
import HappyClientServicesCount from "../../Pages/Hero/HappyClientServiceCount";
import Hero from "../../Pages/Hero/Hero";
import ImageSlider from "../../Pages/ImageSlider";
import OurServices from "../../Pages/OurServices";
import About from "@/Pages/Hero/HeroAbout";
import OurApproach from "@/Pages/Hero/OurApproach";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <OurApproach />
      <OurServices />
      <HappyClientServicesCount />
      <ImageSlider />
      <ScrollDocument />
    </div>
  );
};

export default Home;
