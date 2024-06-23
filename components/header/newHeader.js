import React, { useState } from "react";

import { AppBar, Box, Container, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const NewHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const menuItems = [
    { text: "Home", path: "/home" },
    { text: "About", path: "/" },
    { text: "Product", path: "/" },
    { text: "Shop", path: "/" },
    { text: "After Sales", path: "/" },
  ];

  return (
    <header>
      <AppBar
        position="static"
        sx={{
          "&.MuiAppBar-root": {
            background: "white",
            boxShadow: "0px -1.94px 19px 0px rgba(16, 14, 62, 0.10)",
          },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              "&.MuiToolbar-root": {
                alignItems: "center",
                justifyContent: "space-between",
              },
            }}
          >
            <IconButton onClick={handleDrawerToggle} sx={{ display: { xs: "flex", md: "none" }, padding: "0" }}>
              <MenuRoundedIcon sx={{ width: "24px", height: "24px", color: "#000000" }} />
            </IconButton>
            <Box
              sx={{
                width: { xs: "40px", md: "50px" },
                heeight: { xs: "40px", md: "50px" },
                marginRight: { xs: "auto", md: "inherit" },
                marginLeft: { xs: "8px", md: "0" },
              }}
            >
              <img src={"/assets/images/logo-circle.png"} alt="banner" width={50} height={50} />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex", gap: "16px" } }}>
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  underline="none"
                  sx={{
                    "&.MuiTypography-root": {
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#000000",
                      cursor: "pointer",
                    },
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Box>
            <Box>
              <IconButton>
                <SearchRoundedIcon sx={{ width: "24px", height: "24px", color: "#000000" }} />
              </IconButton>
              <IconButton>
                <FavoriteBorderRoundedIcon sx={{ width: "24px", height: "24px", color: "#000000" }} />
              </IconButton>
              <IconButton>
                <ShoppingCartRoundedIcon sx={{ width: "24px", height: "24px", color: "#000000" }} />
              </IconButton>
            </Box>

            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle} sx={{ display: { xs: "block", md: "none" } }}>
              <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
                <List>
                  {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton onClick={() => handleNavigation(item.path)}>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default NewHeader;
