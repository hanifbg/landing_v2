import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container
      sx={{
        "&.MuiContainer-root": {
          padding: "0",
        },
      }}
    >
      <Grid container justifyContent="space-around" sx={{ padding: 2, backgroundColor: "#f8f8f8", margin: "0" }}>
        <Grid item xs={6} sm={6} md={3}>
          <Typography variant="h6">Social Media</Typography>
          <Link href="#" color="inherit" display="block">
            Facebook
          </Link>
          <Link href="#" color="inherit" display="block">
            Twitter
          </Link>
          <Link href="#" color="inherit" display="block">
            Instagram
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Typography variant="h6">Find Product</Typography>
          <Link href="#" color="inherit" display="block">
            Categories
          </Link>
          <Link href="#" color="inherit" display="block">
            New Arrivals
          </Link>
          <Link href="#" color="inherit" display="block">
            Best Sellers
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Typography variant="h6">Get Help</Typography>
          <Link href="#" color="inherit" display="block">
            Customer Service
          </Link>
          <Link href="#" color="inherit" display="block">
            Returns
          </Link>
          <Link href="#" color="inherit" display="block">
            Shipping Info
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Typography variant="h6">About Us</Typography>
          <Link href="#" color="inherit" display="block">
            Company Info
          </Link>
          <Link href="#" color="inherit" display="block">
            Careers
          </Link>
          <Link href="#" color="inherit" display="block">
            Privacy Policy
          </Link>
        </Grid>
      </Grid>
      <Box
        sx={{
          boxShadow: "0px -1.94px 19px 0px rgba(16, 14, 62, 0.10)",
          padding: "16px",
        }}
      >
        <Typography variant="body2" color="textSecondary" align="center" sx={{ fontWeight: "600", color: "#0F0C33" }}>
          © 2022 Mitimes. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
