import React from "react";
import OurServices from "../components/OurServices";
import { div } from "framer-motion/client";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurServices />
    </div>
  );
};

export default Home;
