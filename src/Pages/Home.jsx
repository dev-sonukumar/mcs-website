import OurServices from "../components/OurServices";
import Hero from "../components/Hero";
import HappyClientServicesCount from "../components/HappyClientServiceCount";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurServices />
      <HappyClientServicesCount />
    </div>
  );
};

export default Home;
