import React from "react";

import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import VideoSection from "../components/home/VideoSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <VideoSection />
    </>
  );
};

export default HomePage;
