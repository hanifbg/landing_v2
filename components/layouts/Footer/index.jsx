import React from "react";
import { Box, Container, Grid, Typography, TextField, Button, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, YouTube, Twitter, Pinterest } from "@mui/icons-material";

const styles = {
  textField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "white" },
      "&:hover fieldset": { borderColor: "white" },
      "&.Mui-focused fieldset": { borderColor: "white" },
    },
    input: { color: "white" },
  },
  button: {
    ml: 1,
    bgcolor: "white",
    color: "black",
    "&:hover": { bgcolor: "grey.300" },
  },
};

const socialIcons = [Facebook, Instagram, YouTube, Twitter, Pinterest];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", p: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Newsletter Signup */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Receive the latest articles, tips, and offers from iQIBLA
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <TextField variant="outlined" placeholder="Email" fullWidth sx={styles.textField} />
              <Button variant="contained" sx={styles.button}>
                →
              </Button>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              We care about protecting your data. Read more in our{" "}
              <Link href="#" color="inherit" underline="always">
                Privacy policy
              </Link>
              .
            </Typography>
          </Grid>

          {/* Footer Links */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {["About us", "Blog", "News", "FAQ", "Distributors", "Affiliate Program"].map((item) => (
                <Grid item xs={6} key={item}>
                  <Link href="#" color="inherit" underline="none">
                    <Typography variant="body1">{item}</Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Payment Methods and Social Icons */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            {socialIcons.map((Icon, index) => (
              <IconButton key={index} color="inherit" sx={{ ml: 1 }} aria-label={Icon.displayName}>
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Copyright and Policies */}
        <Typography variant="body2" sx={{ mt: 4, textAlign: "center" }}>
          © 2024, iQIBLA •
          <Link href="#" color="inherit" sx={{ mx: 1 }} rel="noopener noreferrer" target="_blank">
            Refund policy
          </Link>{" "}
          •
          <Link href="#" color="inherit" sx={{ mx: 1 }} rel="noopener noreferrer" target="_blank">
            Privacy policy
          </Link>{" "}
          •
          <Link href="#" color="inherit" sx={{ mx: 1 }} rel="noopener noreferrer" target="_blank">
            Terms of service
          </Link>{" "}
          •
          <Link href="#" color="inherit" sx={{ mx: 1 }} rel="noopener noreferrer" target="_blank">
            Shipping policy
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
