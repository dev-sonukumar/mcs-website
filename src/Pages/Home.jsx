import OurServices from "../components/OurServices";
import Hero from "../components/Hero";
import HappyClientServicesCount from "../components/HappyClientServiceCount";
import ImageSlider from "./ImageSlider";
// import PostPage from "./PostPage";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurServices />
      <HappyClientServicesCount />
      <ImageSlider />
      {/* <PostPage /> */}
    </div>
  );
};

export default Home;
