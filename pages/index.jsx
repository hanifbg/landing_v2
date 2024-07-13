import { Box, Container } from "@mui/material";
import React from "react";
import HeroSection from "../components/home/HeroSection";

const HomePage = () => {
  return (
    <Container sx={{ color: "white" }}>
      <HeroSection />
      <div style={{ background: "white", color: "black", padding: "0 0 80px" }}>section bawah hero</div>
    </Container>
  );
};

export default HomePage;
