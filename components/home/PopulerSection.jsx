import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const products = [
  {
    discount: 20,
    image: "https://via.placeholder.com/194",
    name: "Product 1",
    rating: 4.5,
    price: 29.99,
  },
  {
    discount: 10,
    image: "https://via.placeholder.com/194",
    name: "Product 2",
    rating: 4.0,
    price: 19.99,
  },
  {
    discount: 15,
    image: "https://via.placeholder.com/194",
    name: "Product 3",
    rating: 3.5,
    price: 39.99,
  },
  {
    discount: 25,
    image: "https://via.placeholder.com/194",
    name: "Product 4",
    rating: 4.8,
    price: 49.99,
  },
];

const PopulerSection = () => {
  return (
    <Container
      sx={{
        "&.MuiContainer-root": {
          margin: "40px 0",
          padding: "0",
        },
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
        <Typography
          component={"h1"}
          sx={{
            fontSize: { xs: "40px", md: "48px" },
            fontWeight: "600",
            color: "#0F0C33",
          }}
        >
          Produk Populer
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "rgba(15, 12, 51, 0.5)",
          }}
        >
          Tidak perlu bayar lebih untuk memiliki produk berkualitas. saatnya Era baru datang dengan produk Mitimes
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="flex-start">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopulerSection;
