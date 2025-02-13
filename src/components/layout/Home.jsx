import HappyClientServicesCount from "../../Pages/HappyClientServiceCount";
import Hero from "../../Pages/Hero";
import ImageSlider from "../../Pages/ImageSlider";
import OurServices from "../../Pages/OurServices";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurServices />
      <HappyClientServicesCount />
      <ImageSlider />
      {/* <PostPage /> */}
      {/* <Post /> */}
    </div>
  );
};

export default Home;
