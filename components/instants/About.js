import React, { useState } from "react";
import Image from "next/image";

import { Box, Typography } from "@mui/material";

import about_1 from "../../assets/icon/about_1.webp";
import vector from "../../assets/icon/vector.webp";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const About = () => {
  const productVariants = [
    { color: "black", image: "/home/feature_black.webp" },
    { color: "pink", image: "/home/feature_pink.webp" },
    { color: "blue", image: "/home/feature_blue.webp" },
    { color: "green", image: "/home/feature_green.webp" },
  ];

  const [selectedVariant, setSelectedVariant] = useState(0);

  const nextImage = () => {
    setSelectedVariant((prev) => (prev === productVariants.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setSelectedVariant((prev) => (prev === 0 ? productVariants.length - 1 : prev - 1));
  };

  return (
    <Box>
      <Box sx={{ position: "relative", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
        <Image src={about_1} alt="About" width={393} height={309} />
        <Typography
          variant="customLarge"
          component="h2"
          color="primary"
          mb={0}
          textAlign="left"
          sx={{
            fontWeight: "800",
            textTransform: "uppercase",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.24%, #FFF 58.82%)",
            position: "relative",
            top: "-100px",
            padding: "100px 24px 0",
            marginBottom: "-100px",
          }}
        >
          LAYAR BESAR & Jernih
        </Typography>
        <Typography variant="h2" color="secondary" textAlign="left" sx={{ margin: "0 24px" }}>
          Bercahaya seperti Bulan di tengah malam
        </Typography>
        <Typography variant="h4" color="text.primary" textAlign="left" sx={{ margin: "0 24px" }}>
          iQIBLA NOOR memancarkan kemewahan modernnya. Desainnya yang memikat menambahkan sentuhan keindahan abadi di tangan Anda, membisikkan rasa percaya diri di setiap pandangan.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography
          variant="customLarge"
          component="h2"
          color="primary"
          mb={0}
          textAlign="left"
          sx={{
            fontWeight: "800",
            textTransform: "uppercase",
            padding: "0 24px",
          }}
        >
          HADIR DENGAN 4 warna
        </Typography>
        <Typography variant="h2" color="secondary" textAlign="left" sx={{ margin: "0 24px" }}>
          Sesuaikan Dengan Gaya Pribadi Anda.
        </Typography>
      </Box>
      <div className="carousel-container">
        <div className="carousel-image-wrapper">
          <img src={productVariants[selectedVariant].image} alt={`Product in ${productVariants[selectedVariant].color}`} className="carousel-image" />
          <button onClick={previousImage} className="carousel-button carousel-button-left" aria-label="Previous image">
            <ChevronLeftRoundedIcon className="icon" />
          </button>
          <button onClick={nextImage} className="carousel-button carousel-button-right" aria-label="Next image">
            <ChevronRightRoundedIcon className="icon" />
          </button>
          <Image
            src={vector}
            alt="vector"
            width={300}
            height={300}
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              zIndex: "-1",
              width: "200px",
            }}
          />
        </div>
        <div className="color-selector">
          {productVariants.map((variant, index) => (
            <button
              key={variant.color}
              onClick={() => setSelectedVariant(index)}
              className={`color-dot ${variant.color} ${selectedVariant === index ? "color-dot-active" : ""}`}
              aria-label={`Select ${variant.color} variant`}
              aria-pressed={selectedVariant === index}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default About;
