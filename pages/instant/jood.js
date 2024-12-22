import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Button, Container, Typography } from "@mui/material";
import HeroSection from "@components/jood/HeroSection";
import ExcellenceSection from "@components/jood/ExcellenceSection";
import ModelSection from "@components/jood/ModelSection";
import LifeAppSection from "@components/jood/LifeAppSection";
import Specifications from "@components/instants/noor/Specifications";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Import WhatsApp icon

const theme = createTheme({
  palette: {
    primary: {
      main: "#FDCC4D",
    },
    secondary: {
      main: "#9B9B9B", // Custom secondary color
    },
    text: {
      primary: "#585778",
      color: "#45494E",
      fontFamily: "Montserrat, sans-serif",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontWeightRegular: 400,
    fontSize: 16,
    lineHeight: 1.5, // 150%
    customLarge: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "2.25rem", //36px
    },
    h1: {
      fontSize: "2rem", //32px
    },
    h2: {
      fontSize: "1.5rem", //24px
    },
    h3: {
      fontSize: "1.125rem", //18px
    },
    h4: {
      fontSize: "1rem", //16px
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
      },
    },
  },
});

const IqiblaJood = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          m: "0 auto",
          p: 0,
          maxWidth: {
            xs: "100%", // Full width untuk perangkat kecil (mobile)
            md: "400px", // 400px untuk perangkat desktop (md ke atas)
          },
        }}
      >
        <HeroSection />
        <ExcellenceSection />
        <ModelSection />
        <LifeAppSection />
        <Box sx={{ paddingTop: "220px" }}>
          <Specifications />
        </Box>
      </Container>

      <Box
        component="footer"
        sx={{
          textAlign: "center",
          padding: "0 0 100px",
        }}
      >
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            color: "var(--iqibla-com-shuttle-gray, #5F6368)",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "11px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          © iQIBLA Indonesia 2024
        </Typography>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: {
            xs: "calc(100% - 32px)",
            sm: "calc(50% - 32px)",
            md: "calc(33.33% - 32px)",
            lg: "calc(25% - 32px)",
            xl: "calc(20% - 32px)",
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<WhatsAppIcon />}
          sx={{
            backgroundColor: "#EBC884",
            textAlign: "center",
            color: "#1B1B1B",
            padding: "12px 24px",
            borderRadius: "12px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "20px",
            width: "100%",
            fontWeight: 600,
          }}
          onClick={() => window.open("https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Zikr%20Ring.", "_blank")}
        >
          Beli Sekarang
        </Button>
      </Box>
    </ThemeProvider>
  );
};

IqiblaJood.getLayout = (page) => page;

export default IqiblaJood;
