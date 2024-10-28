import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MenuIcon from "@mui/icons-material/Menu"; // Import the hamburger menu icon
import Image from "next/image";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FDCC4D", // Gold-like color to match the theme
    },
    text: {
      primary: "#585778", // Muted gray text
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
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
  { id: "lightweight", title: "Ringan", content: "Berat 7.2g seperti bulu." },
  {
    id: "benefits",
    title: "Manfaat",
    content: "Membantu menjaga hubungan dengan Allah SWT.",
  },
  {
    id: "pricing",
    title: "Harga",
    content: "Harga promo spesial untuk bulan ini.",
  },
  {
    id: "contact",
    title: "Hubungi Kami",
    content: "Kontak kami untuk info lebih lanjut.",
  },
];

const App = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); // Close the drawer after navigating
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        sx={{
          "&.MuiAppBar-root": {
            background: "#242833",
            boxShadow: "0px -1.94px 19px 0px rgba(16, 14, 62, 0.10)",
          },
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            onClick={() => scrollToSection("contact")}
            sx={{ p: 0, ml: "auto" }}
          >
            <Image
              src="/assets/icon/logo-instant.svg"
              alt="Logo Instant"
              width={100}
              height={50}
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: "#242833", color: "#fff", height: "100%" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {sections.map((section) => (
              <ListItem key={section.id} disablePadding>
                <ListItemButton onClick={() => scrollToSection(section.id)}>
                  <ListItemText primary={section.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Container maxWidth="sm" sx={{ mt: 2, mb: 10 }}>
        {sections.map((section) => (
          <Box
            key={section.id}
            id={section.id}
            sx={{
              py: 5,
              borderBottom: "1px solid #E0E0E0",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              {section.title}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {section.content}
            </Typography>
            {section.id === "home" && (
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                endIcon={<ArrowDownwardIcon />}
                onClick={() => scrollToSection("about")}
              >
                Pelajari Lebih Lanjut
              </Button>
            )}
          </Box>
        ))}
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.primary">
          © 2024 Zikr Ring Noor. All Rights Reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

App.getLayout = (page) => page;

export default App;
