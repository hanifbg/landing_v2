import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
("@emotion/react");

import life1 from "../../public/home/life-app1.png";
import life2 from "../../public/home/life-app2.png";
import lifeTalent from "../../public/home/life-talent.png";

const FeaturedProducts = () => {
  const featuredList = [
    {
      id: "product1",
      title: "Featured Product 1",
      description: "Description of Featured Product 1",
      image: "/home/feature-product.png",
      link: "/products/featured1",
    },
    {
      id: "product2",
      title: "Featured Product 2",
      description: "Description of Featured Product 2",
      image: "/home/feature-product2.png",
      link: "/products/featured2",
    },
    {
      id: "product3",
      title: "Featured Product 3",
      description: "Description of Featured Product 3",
      image: "/home/feature-product3.png",
      link: "/products/featured3",
    },
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300000000,
    centerMode: true,
    centerPadding: "60px", // Adjust spacing around the centered slide
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: "40px 0 80px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: { xs: "100%", md: "50%" },
          margin: "0 auto 60px",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            "&.MuiTypography-root": {
              fontSize: "35px",
              fontWeight: "600",
              color: "#929292",
              marginBottom: "50px",
            },
          }}
        >
          IQibla: Where Innovation Meets Faith in Next-Level Tech Solutions for Muslims
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{
            "&.MuiTypography-root": {
              fontSize: "30px",
              fontWeight: "600",
              color: "#929292",
              marginBottom: "30px",
            },
          }}
        >
          More intelligent ways of tasbih
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            "&.MuiTypography-root": {
              fontSize: "60px",
              color: "#E7B85D",
            },
          }}
        >
          FEED YOUR SOUL WITH ZIKR
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "60px" }}>
        <Slider {...sliderSettings}>
          {featuredList.map((product) => (
            <Box key={product.id}>
              <Card
                sx={{
                  "&.MuiCard-root": {
                    background: "transparent",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  width="500"
                  height="500"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    "&.MuiCardMedia-root": {
                      margin: "0 20px",
                    },
                  }}
                />
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          width: { xs: "100%", md: "50%" },
          margin: "0 auto 60px",
        }}
      >
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{
            "&.MuiTypography-root": {
              fontSize: "30px",
              color: "#929292",
              marginBottom: "30px",
            },
          }}
        >
          Experience modern muslim living with
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            "&.MuiTypography-root": {
              fontSize: "60px",
              color: "#E7B85D",
            },
          }}
        >
          iQIBLA Life
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "80px" }}>
        <Container
          sx={{
            "&.MuiContainer-root": {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              gap: "16px",
              padding: { xs: "0", md: "0 16px" },
            },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              "&.MuiTypography-root": {
                fontSize: "42px",
                fontWeight: "400",
                color: "#FFFFFF",
                width: { xs: "100%", md: "25%" },
                textAlign: "center",
              },
            }}
          >
            What is iQIBLA Life
          </Typography>
          <Image src={life1} alt="iQIBLA life" width={310} height={600} style={{ borderRadius: "32px" }} />
          <Typography
            variant="p"
            component="h1"
            gutterBottom
            sx={{
              "&.MuiTypography-root": {
                fontSize: "20px",
                fontWeight: "400",
                color: "#929292",
                width: { Xs: "100%", md: "25%" },
              },
            }}
          >
            iQIBLA Life is not just a multi-functional app designed exclusively for our Muslim,but also a harmonious community gathering Muslims from around the world. Whether it's providing religious guidance, family education, or daily
            life conveniences, iQIBLA Life is your ideal companion for an Islamic lifestyle.
          </Typography>
        </Container>
        <Container
          sx={{
            "&.MuiContainer-root": {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              gap: "16px",
              padding: { xs: "0", md: "0 16px" },
            },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "25%" } }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                "&.MuiTypography-root": {
                  fontSize: "42px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                  textAlign: "center",
                },
              }}
            >
              Convention & Calc Method
            </Typography>
            <Typography
              variant="p"
              component="h1"
              gutterBottom
              sx={{
                "&.MuiTypography-root": {
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#929292",
                },
              }}
            >
              Regardless of which sect of thought you belong to and no matter where you are in the world, our algorithms are based on accurate and reliable data sources, combined with local geographical and timezone information, to provide
              you with the most authoritative local algorithm for Asr and Salah prayer times.
            </Typography>
          </Box>

          <Image src={life2} alt="iQIBLA life" width={310} height={600} style={{ borderRadius: "32px" }} />
          <Box sx={{ width: { xs: "100%", md: "35%" } }}>
            <Image src={lifeTalent} alt="iQIBLA life" width={600} height={300} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
