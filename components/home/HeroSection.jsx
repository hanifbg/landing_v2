import { Box, Button, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "inherit", md: "80vh" },
        backgroundImage: { xs: "none", md: "url(/assets/images/homepage/landing_page_banner.png)" },
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Container
        sx={{
          width: { xs: "100%", md: "45%" },
          marginRight: "auto",
          marginLeft: "0",
          padding: "0",
        }}
      >
        <Box sx={{ display: { xs: "flex", md: "none", alignItems: "center", justifyContent: "center" } }}>
          <img src={"/assets/images/homepage/landing_page_banner.png"} alt="banner" width={400} height={400} />
        </Box>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            "&.MuiTypography-root": {
              fontSize: { xs: "32px", md: "40px" },
              fontWeight: "600",
              color: "#0F0C33",
              marginTop: { xs: "-20px", md: "0" },
            },
          }}
        >
          Fascia Gun Mini Pro
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{
            "&.MuiTypography-root": {
              fontSize: "16px",
              fontWeight: "500",
              color: "#0f0c3380",
            },
          }}
        >
          Membantu meredakan nyeri otot dan kekakuan dengan 4 attachment massage head yang dapat digant dan Meningkatkan sirkulasi darah
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }} href="/buy">
          Beli Sekarang
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
