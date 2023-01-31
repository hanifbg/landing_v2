import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppLogo from './logo';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar
      position='sticky'
      color='inherit'
      sx={{
        boxShadow: 'none',
        backgroundColor: 'background.paper',
        width: {
          xs: '100%',
        },
      }}
      className='app-bar'
    >
      <Toolbar
        sx={{
          boxSizing: 'border-box',
          minHeight: {xs: 56, sm: 70},
          paddingLeft: {xs: 5},
          paddingRight: {xs: 5, md: 7.5, xl: 12.5},
        }}
        disableGutters
      >
        <Box
          noWrap
          sx={{mr: 2, display: {xs: 'none', md: 'flex'}, paddingLeft: '0px'}}
        >
          <AppLogo />
        </Box>

        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: {xs: 'block', md: 'none'},
            }}
          >
            <MenuItem key={'Home'} onClick={handleCloseNavMenu}>
              <Typography textAlign='center'>Home</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box noWrap sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
          <AppLogo />
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
    </AppBar>
  );
};

export default Header;