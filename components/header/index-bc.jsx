import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AppLogo from "../logo";
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "none",
        backgroundColor: "background.paper",
        width: {
          xs: "100%",
        },
      }}
      className="app-bar"
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            boxSizing: "border-box",
            minHeight: { xs: 56, sm: 70 },
          }}
          disableGutters
        >
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              paddingLeft: "0px",
            }}
          >
            <AppLogo />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{ color: "#000" }}>
                  Home
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <AppLogo />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
          sx={{
            flexGrow: 1,
            display: {xs: 'none', md: 'flex'},
          }}
        >
          <Box sx={{textAlign: 'center', width: '100%'}}>
            <Link href={'/'} sx={{textDecoration: 'none'}}>
              <Button
                key={'Home'}
                onClick={handleCloseNavMenu}
                className='headerButtonMenu'
              >
                Home
              </Button>
            </Link>
            <Link href={'/'} sx={{textDecoration: 'none'}}>
              <Button
                key={'Home'}
                onClick={handleCloseNavMenu}
                sx={{my: 2, display: 'inline'}}
                className='headerButtonMenu'
              >
                About
              </Button>
            </Link>
            <Link href={'/'} sx={{textDecoration: 'none'}}>
              <Button
                key={'Home'}
                onClick={handleCloseNavMenu}
                sx={{my: 2, display: 'inline'}}
                className='headerButtonMenu'
              >
                Product
              </Button>
            </Link>
            <Link
              href={'https://www.tokopedia.com/mitimes'}
              sx={{textDecoration: 'none'}}
            >
              <Button
                key={'Home'}
                onClick={handleCloseNavMenu}
                sx={{my: 2, display: 'inline'}}
                className='headerButtonMenu'
              >
                Shop
              </Button>
            </Link>
            <Link href={'/aftersales'} sx={{textDecoration: 'none'}}>
              <Button
                key={'Home'}
                onClick={handleCloseNavMenu}
                sx={{my: 2, display: 'inline'}}
                className='headerButtonMenu'
              >
                After Sales
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              right: 0,
              minWidth: '180px',
            }}
          >
            <IconButton
              aria-label='search'
              color='primary'
              className={'headerButtonRightMenu'}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              aria-label='search'
              color='primary'
              className={'headerButtonRightMenu'}
            >
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              aria-label='search'
              color='primary'
              className={'headerButtonRightMenu'}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
