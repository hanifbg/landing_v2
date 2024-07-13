import React from "react";
import Slider from "react-slick";

import { Box, Button, IconButton, Link, Typography } from "@mui/material";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const HeroSection = () => {
  const products = [
    {
      image: "/product-hero.png",
      title: "Qwatch",
      detail: "The wearable device that helps you stay connected to your faith, wherever you go.",
      link: "/products/product1",
    },
    {
      image: "/product-hero2.png",
      title: "Zikr Rings",
      detail: "Smartwatch for Muslims, featuring essential Islamic functionalities and all the features of a modern",
      link: "/products/product2",
    },
  ];

  const CustomArrow = ({ onClick, direction }) => {
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          zIndex: 1,
          ...(direction === "left" ? { left: "10px" } : { right: "10px" }),
        }}
      >
        {direction === "left" ? <ArrowBackIosNewRoundedIcon /> : <ArrowForwardIosRoundedIcon />}
      </IconButton>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000000000000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        ".slick-dots": {
          bottom: "10px",
          "& li ::before": {
            color: "white",
            opacity: "1",
          },
          "& li.slick-active ::before": {
            color: "#E1AF40",
            opacity: "1",
          },
        },
        ".slick-arrow": {
          zIndex: 1,
        },
      }}
    >
      <Slider {...settings}>
        {products.map((product, index) => (
          <Box
            key={index}
            sx={{
              display: "flex !important",
              flexDirection: "column",
              // alignItems: { xs: "center", md: "flex-start" },
              alignItems: index === 0 ? { xs: "center", md: "flex-start" } : "center", // Align left for first slide, center for others
              justifyContent: index === 0 ? { xs: "flex-end", md: "flex-end" } : { xs: "flex-end", md: "center" },
              height: "80vh",
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              textAlign: "center",
              padding: { xs: "0 0 60px", md: "20px" },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                "&.MuiTypography-root": {
                  fontSize: "40px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                },
              }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              gutterBottom
              sx={{
                "&.MuiTypography-root": {
                  fontSize: "16px",
                  color: "#FFFFFF",
                },
              }}
            >
              {product.detail}
            </Typography>
            <Link href={product.link} passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  "&.MuiButtonBase-root": {
                    background: "white",
                    boxShadow: "0px 0px 0px 1px #FFF",
                    borderRadius: "30px",
                    fontSize: "16px",
                    color: "#000",
                    textTransform: "none",
                    marginTop: "16px",
                  },
                }}
              >
                Shop Now
              </Button>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
