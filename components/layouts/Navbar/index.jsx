// components/Navbar.js

import React, { useState } from "react";
import Image from "next/image";

import logo from "../../../assets/home/logo.png";

import { AppBar, Toolbar, Typography, IconButton, Button, MenuItem, Select, Box, Drawer, List, ListItem, ListItemText, Link } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Accessories", path: "/accessories" },
    { name: "iQibla Life", path: "/iqibla-life" },
    { name: "Brand Story", path: "/brand-story" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const renderNavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.path} passHref>
          <Button
            color="inherit"
            sx={{
              "&.MuiButtonBase-root": {
                fontSize: "18px",
                fontWeight: "600",
                color: "white",
                opacity: "0.75",
                textTransform: "none",
              },
            }}
          >
            {link.name}
          </Button>
        </Link>
      ))}
    </>
  );

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path} passHref>
            <ListItem button component="a">
              <ListItemText primary={link.name} />
            </ListItem>
          </Link>
        ))}
        <ListItem button>
          <Select defaultValue="EN" sx={{ color: "inherit" }} fullWidth>
            <MenuItem value="EN">English</MenuItem>
            <MenuItem value="IND">Indonesia</MenuItem>
          </Select>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        "&.MuiAppBar-root": {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          background: "transparent",
          boxShadow: "none",
          zIndex: "1",
        },
      }}
    >
      <Toolbar
        sx={{
          "&.MuiToolbar-root": {
            minHeight: "94px",
            padding: { xs: "0 20px", lg: "0 40px" },
          },
        }}
      >
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link href="/" passHref>
            <Image src={logo} alt="iQIBLA" width={150} height={40} />
          </Link>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-start" }}>{renderNavLinks()}</Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Select defaultValue="EN" sx={{ color: "inherit", mr: 2 }} inputProps={{ "aria-label": "Without label" }}>
            <MenuItem value="EN">English</MenuItem>
            <MenuItem value="IND">Indonesia</MenuItem>
          </Select>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
