import React, { useState, useEffect } from "react";

import { Typography, Container, Box, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Import WhatsApp icon

import Home from "@components/instants/Home";
import About from "@components/instants/About";
import Features from "@components/instants/Features";
import Size from "@components/instants/Size";
import IqiblaApp from "@components/instants/IQiblaApp";
import FollowUs from "@components/instants/FollowUs";

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

const sections = [
  {
    id: "home",
    title: "Beranda",
    content: "Selamat datang di Zikr Ring Noor.",
  },
  {
    id: "about",
    title: "Tentang Kami",
    content: "Ring dengan makna mendalam dalam beribadah.",
  },
  {
    id: "features",
    title: "Fitur",
    content: "Desain modern dan nyaman digunakan.",
  },
  {
    id: "size",
    title: "Ukuran",
    content: "Tersedia dalam 3 ukuran",
  },
  {
    id: "app",
    title: "Iqibla Live App",
    content: "Aplikasi penunjuk arah kiblat yang akurat.",
  },
  {
    id: "follow-us",
    title: "Ikuti Kami",
    content: "Kontak kami untuk info lebih lanjut.",
  },
];

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [appBarStyle, setAppBarStyle] = useState({
    backgroundColor: "rgba(36, 40, 51, 1)",
  });

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAppBarStyle({ backgroundColor: "rgba(36, 40, 51, 0.5)" });
      } else {
        setAppBarStyle({ backgroundColor: "rgba(36, 40, 51, 1)" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ m: "0 auto", p: 0 }}>
        {sections.map((section) => (
          <Box
            key={section.id}
            id={section.id}
            sx={{
              pb: 2,
              // borderBottom: "1px solid #E0E0E0",
              textAlign: "center",
            }}
          >
            {section.id === "home" ? (
              <Home onLearnMoreClick={() => scrollToSection("about")} />
            ) : section.id === "about" ? (
              <About />
            ) : section.id === "features" ? (
              <Features />
            ) : section.id === "size" ? (
              <Size />
            ) : section.id === "app" ? (
              <IqiblaApp />
            ) : (
              <FollowUs />
            )}
          </Box>
        ))}
      </Container>

      {/* Floating WhatsApp Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<WhatsAppIcon />}
          sx={{
            backgroundColor: "#EBC884",
            textAlign: "center",
            color: "text.primary",
          }}
          onClick={() =>
            window.open(
              "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Zikr%20Ring.",
              "_blank"
            )
          }
        >
          Beli Sekarang
        </Button>
      </Box>

      <Box
        component="footer"
        sx={{
          pb: 3,
          px: 2,
          textAlign: "center",
          mb:7,
        }}
      >
        <Typography variant="body2" color="text.primary"
          sx={
            {
              color: "var(--iqibla-com-shuttle-gray, #5F6368)",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "11px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }
          }
        >
            © iQIBLA Indonesia 2024
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

App.getLayout = (page) => page;

export default App;
