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
import Link from '@mui/material/Link';

const pages = [
 { name: 'ABOUT US', link: '/' },
 { name: 'CATALOG', link: '/catalog' },
 { name: 'BASKET', link: '/basket' },
 { name: 'FAVOURITES', link: '/favourites' },
 { name: 'DELIVERY', link: '/delivery' },
 { name: 'PROFILE', link: '/profile' }
];

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
  <nav>
   <Container maxWidth="xl" sx={{ color: 'black' }}>
    <Toolbar disableGutters>
     <Link href='/' sx={{ textDecoration: 'none' }}>
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
     <Box sx={{
      flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end',
     }}>
      <IconButton
       size="large"
       aria-label="account of current user"
       aria-controls="menu-appbar"
       aria-haspopup="true"
       onClick={handleOpenNavMenu}
       color="inherit"
       sx={{
        color: 'black',
        '&:focus': {
         outline: 'none',
        },
        '&:focus-visible': {
         outline: 'none',
        },
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
       sx={{
        display: { xs: 'block', md: 'none' }, color: 'black',
       }}
      >
       {pages.map((page) => (
        <MenuItem key={page.name} onClick={handleCloseNavMenu}>
         <Link href={page.link} sx={{ textDecoration: 'none', color: 'black' }}>
          <Typography textAlign="center">{page.name}</Typography>
         </Link>
        </MenuItem>
       ))}
      </Menu>
     </Box>
     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
       <Button
        href={page.link}
        key={page.name}
        onClick={handleCloseNavMenu}
        sx={{
         my: 2,
         display: 'block',
         color: 'black',
         fontFamily: 'Verdana',
         letterSpacing: '-1px',
         '&:focus': {
          outline: 'none',
         },
         '&:focus-visible': {
          outline: 'none',
         },
        }}
       >
        {page.name}
       </Button>
      ))}
     </Box>
     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
      <Button href='/catalog'
       sx={{
        my: 2,
        color: 'black',
        fontFamily: 'Verdana',
        letterSpacing: '-1px',
        '&:focus': {
         outline: 'none',
        },
        '&:focus-visible': {
         outline: 'none',
        },
       }}>
       enter
      </Button>
     </Box>
    </Toolbar>
   </Container>
  </nav>
 );
}
export default ResponsiveAppBar;
