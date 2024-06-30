import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

// const pages = [
//   { name: 'ABOUT US', link: '/' },
//   { name: 'CATALOG', link: '/catalog' },
//   { name: 'BASKET', link: '/basket' },
//   { name: 'FAVOURITES', link: '/favourites' },
//   { name: 'DELIVERY', link: '/delivery' },
//   { name: 'PROFILE', link: '/profile' }
// ];
const pages = [
  { name: 'ABOUT US', link: '/' },
  { name: 'CATALOG', link: '/catalog' },
  { name: 'BASKET', link: '/basket' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: 1000, backgroundColor: 'white', color: 'black' }}>


      <nav>
        <Container maxWidth="xl" sx={{ color: 'black' }}>
          <Toolbar disableGutters>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontFamily: 'Verdana',
                  fontWeight: 'bold',
                  color: 'black',
                }}
              >
                LIFEWEAR
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  color: 'black',
                  '&:focus': { outline: 'none' },
                  '&:focus-visible': { outline: 'none' },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                sx={{ display: { xs: 'block', md: 'none' }, color: 'black' }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Link to={page.link} style={{ textDecoration: 'none', color: 'black' }}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={page.link}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: 'block',
                    color: 'black',
                    fontFamily: 'Verdana',
                    letterSpacing: '-1px',
                    '&:focus': { outline: 'none' },
                    '&:focus-visible': { outline: 'none' },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Button
                component={Link}
                to='/catalog'
                sx={{
                  my: 2,
                  color: 'black',
                  fontFamily: 'Verdana',
                  letterSpacing: '-1px',
                  '&:focus': { outline: 'none' },
                  '&:focus-visible': { outline: 'none' },
                }}
              >
                enter
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </nav>
    </AppBar>
  );
}

export default ResponsiveAppBar;
