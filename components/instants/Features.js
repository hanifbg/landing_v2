import React, { useState } from "react";
import Image from "next/image";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

import vector from "../../assets/icon/vector.webp";

const Features = () => {
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
            top: "-30px",
            right: "0",
            zIndex: "-1",
            width: "250px",
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
  );
};

export default Features;
