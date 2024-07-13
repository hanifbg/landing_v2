import React from "react";

import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";

import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container sx={{ color: "white" }}>
      <HeroSection />
      <FeaturedProducts />
      
    </Container>
  );
};

export default HomePage;
