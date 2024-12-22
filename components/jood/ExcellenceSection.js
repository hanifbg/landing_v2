import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography } from "@mui/material";

import excel1 from "../../public/jood/excel_1.webp";

const ExcellenceSection = () => {
  const products = [
    { id: 1, color: "Cokelat", hex: "#8B4513", image: "/jood/jood_brown.webp" },
    { id: 2, color: "Biru", hex: "#0000FF", image: "/jood/jood_blue.webp" },
    { id: 3, color: "Pink", hex: "#FFC0CB", image: "/jood/jood_pink.webp" },
    { id: 4, color: "Putih", hex: "#E2DED8", image: "/jood/jood_white.webp" },
    { id: 5, color: "Hitam", hex: "#000000", image: "/jood/jood_black.webp" },
    { id: 6, color: "Hijau", hex: "#008000", image: "/jood/jood_green.webp" },
  ];

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: products[i].hex,
          margin: "0 auto",
          cursor: "pointer",
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/jood/bg-excel.webp')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        padding: "40px 0 60px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Image src={excel1} alt="jood" width={235} height={475} />
        <Typography
          color="text.primary"
          sx={{
            fontSize: "28px",
            fontWeight: "600",
            color: "white",
            padding: "32px 0",
            textTransform: "uppercase",
          }}
        >
          Warna Unggulan
        </Typography>
      </Box>
      <div className="product-slider">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="product-slide">
              <img src={product.image} alt={`Produk ${product.color}`} className="product-image" />
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
};

export default ExcellenceSection;
