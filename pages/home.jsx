import React from "react";

import HeroSection from "../components/home/HeroSection";

import { Container } from "@mui/material";
import ServiceSection from "../components/home/ServiceSection";
import FeatureBestSection from "../components/home/FeatureBestSection";
import PopulerSection from "../components/home/PopulerSection";

const Home = () => {
  return (
    <Container
      sx={{
        "&.MuiContainer-root": {
          padding: { xs: "0 16px", md: "0 16px", lg: "0" },
        },
      }}
    >
      <HeroSection />
      <ServiceSection />
      <FeatureBestSection />
      <PopulerSection />
    </Container>
  );
};

export default Home;
